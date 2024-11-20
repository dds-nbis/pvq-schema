"use strict";

function getXCoord(e) {
    return getAbsolutePosition(e).left;
}

/**
 * Gets absolute bounding box info for an element.
 * 
 * @param {Element} element 
 * @returns 
 */
function getAbsolutePosition(element) {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY,
    bottom: rect.bottom + window.scrollY,
    left: rect.left + window.scrollX
  };
}

/**
 * Returns the substring in s after the first occurrence of d,
 * or s if d is not found.
 * 
 * @param {string} d
 * @param {string} s 
 * @returns 
 */
function substringAfter(d, s) {
    const p = s.indexOf(d);
    if (p >= 0) {
        return s.substring(p + 1);
    } else {
        return s;
    }
}

/**
 * Returns the substring is s before the first occurrence of d, or s if d is not
 * found. 
 * 
 * @param {string} d 
 * @param {string} s 
 * @returns 
 */
function substringBefore(d, s) {
    const p = s.indexOf(d);
    if (p >= 0) {
        return s.substring(0, p);
    } else {
        return s;
    }
}

function getEffectiveStyle(e) {
    let styles = window.getComputedStyle(e);
    if (e.childElementCount == 1) {
        var child = e.children[0];
        if (child.tagName == "SPAN" && e.innerText == child.innerText) {
            styles = window.getComputedStyle(child);
        }
    }
    return styles;
}

function detectContentType(e) {
    let styles = getEffectiveStyle(e);
    let fontFamily = styles.fontFamily;
    let isHeaderLike = fontFamily.indexOf("Gill Sans MT") >= 0 || /H[0-9]/.test(e.tagName);

    if (isHeaderLike) {
        const text = cleanText(e).toLowerCase();
        if (text.indexOf("] branch auto populate") >= 0) {
            return "branch-start";
        } else if (/\* end of branch \*|\* branch end \*/.test(text) >= 0) {
            return "branch-end";
        } else {
            return "heading";
        }
    } else {
        let parent = e.parentElement;
        if (e.parentNode.tagName == "TD" && fontFamily.indexOf("Garamond") >= 0) {
            return "question";
            // if (isQuestionLike(e)) {
            //     return "question-text";
            // } else {
            //     return "question-other";
            // }
        } else {
            return "text";
        }
    }
}

/**
 * Sorts the given array of DOM elements first by y-coordinate, then x-coordinate. 
 * 
 * The input array is sorted in-place (i.e. mutated).
 * @returns the input array, with sorting completed
 */
function sortByPosition(elements) {
    elements.sort((a, b) => {
        const rectA = getAbsolutePosition(a);
        const rectB = getAbsolutePosition(b);

        if (rectA.top !== rectB.top) {
            return rectA.top - rectB.top;
        }

        return rectA.left - rectB.left;
    });
    return elements;
}



/**
 * A group of contiguous questions in a section, separated from other groups
 * by any type of heading or explanatory prose.
 */
class QuestionGroup {
    constructor(condition, prologue) {
        this.questionNodes = questionNodes;
        this.prologue = prologue;
        this.questionNodes = [];
    }

    addQuestionContent(e) {
        this.questionNodes.push(e);
    }
}

const FIELD_TYPE_PATTERN = /^\[([ a-zA-Z/|+]+)\]$/;
const CHECKBOX_PATTERN = /^\[ *\] *[A-Za-z.,()'’ ]+$/;
const QUESTION_ID_PATTERN = /^[a-z0-9\\-]+$/;

const SPECIAL_CHUNKS = {
    "[ ] Yes [ ] No": ["Yes", "No"]
}

const DATATYPE_MAPPINGS = {
    "mm/yy": "mm/yyyy",
    "addr + type": "address + type"
}


/**
 * A single logical question in the PVQ.
 * 
 * In the PVQ Word docs, questions are always defined in tables,
 * with the question text and other information, like the data type
 * and associated checkboxes, on the right. For example, a question asking about
 * when you began living at a particular address could include a checkbox to indicate
 * that the date provided is estimated. A Question instance includes
 * all these components- the main text, the data type, and any associated
 * checkboxes.
 */
class Question {

    static create(questionId, text, secondaryChunks, _examineHints) {
        const firstSecondary = secondaryChunks[0];
        let dataType = null;
        let examineHints = [..._examineHints];

        if (firstSecondary) {
            let match = firstSecondary.match(FIELD_TYPE_PATTERN);
            if (match != null) {
                dataType = match[1].toLowerCase();
                secondaryChunks.shift();
            } else {
                dataType = "unknown";
                examineHints.push("datatype");
            }
        } else {
            dataType = "text";
            examineHints.push("no_secondary_chunks");
        }

        const checkboxes = [];
        const otherChunks = [];
        for (const chunk of secondaryChunks) {
            if (CHECKBOX_PATTERN.test(chunk)) {
                let checkboxText = substringAfter(']', chunk).trim();
                checkboxes.push(checkboxText);
            } else if (chunk in SPECIAL_CHUNKS) {
                checkboxes.push(...[SPECIAL_CHUNKS[chunk]])
            } else {
                otherChunks.push(chunk.trim());
            }
        }

        if (dataType == "unknown" && checkboxes.length > 0) {
            dataType = "checkboxes";
        }
        dataType = dataType.trim();
        dataType = DATATYPE_MAPPINGS[dataType] || dataType;

        if (otherChunks.length > 0) {
            examineHints.push("extra_chunks");
        } else if (text.indexOf('[') >= 0) {
            examineHints.push("bracket_in_text");
        } else if (checkboxes.some(s => s.indexOf('[') > 0)) {
            examineHints.push("bracket_in_checkbox");
        }

        return new Question(questionId, text, dataType, checkboxes, examineHints);
    }

    constructor(questionId, text, dataType, checkboxes, examineHints) {
        console.assert(QUESTION_ID_PATTERN.test(questionId), "invalid question ID: %s", questionId);
        console.assert(typeof text == "string" && text.length > 0, "question text must be a non-empty string")
        console.assert(Array.isArray(checkboxes), "checkboxes must be an array");

        this.id = questionId;
        this.text = text;
        this.dataType = dataType;

        if (checkboxes.length > 0) {
            this.checkboxes = checkboxes;
        }

        if (examineHints && examineHints.length > 0) {
            this.examineHints = examineHints;
        }
    }

    clone(overrides) {
        console.debug("Clone questionId=%s props=%o", this.id, overrides);

        const cloned = new Question(this.id, this.text, this.dataType, this.checkboxes, this.examineHints);
        if (props) {
            for (const [k, v] of Object.entries(overrides)) {
                if (v == null) {
                    delete cloned[k];
                } else {
                    cloned[k] = v;
                }
            }
        }

        return cloned;
    }
}

function findFirstAbove(e, candidates) {
    sortByPosition(candidates);
    let box = getAbsolutePosition(e);
    let lastMatch = null;
    let i = 0;
    for (const candidate of candidates) {
        let candidateBox = getAbsolutePosition(candidate);
        if (candidateBox.top > box.top) {
            break;
        }
        if (candidateBox.left > box.left) {
            break;
        }
        lastMatch = candidate;
        i++;
    }
    return lastMatch;
}

function parseQuestions(allChunks) {
    let leftEdge = 10000;
    let leftmostChunks = [];
    let otherChunks = [];
    let filteredChunks = [];
    for (const chunk of allChunks) {
        // skip all chunks that aren't in the Garamond font
        let styles = getEffectiveStyle(chunk);
        let fontFamily = styles.fontFamily;
        if (fontFamily.indexOf("Garamond") < 0) {
            continue;
        }
        filteredChunks.push(chunk);
        let left = getXCoord(chunk);
        if (left < leftEdge) {
            leftEdge = left;
        }
    }

    for (const chunk of filteredChunks) {
        let left = getXCoord(chunk);
        let deltaX = left - leftEdge;
        if (deltaX < 20) {
            leftmostChunks.push(chunk);
        } else {
            otherChunks.push(chunk);
        }
    }

    sortByPosition(leftmostChunks);
    sortByPosition(otherChunks);

    let primaryChunks = [];
    let prevBottom = 0;
    // some of the questions are formatted as a single logical paragraph broken into multiple 
    // lines by <p> tags. When this happens, the bottom of one <p> box is the top of the next 
    // <p> box, so we can use y-axis gaps to reassemble them into one text string. When this 
    // happens, we store the text of all but the first chunk in a custom attribute on the 
    // first chunk's DOM element.
    for (const chunk of leftmostChunks) {
        const text = cleanText(chunk);
        let box = getAbsolutePosition(chunk);
        let yGap = box.top - prevBottom;
        if (yGap < 4) {
            let curQuestionChunk = primaryChunks.at(-1);
            let curSuffix = curQuestionChunk.getAttribute("question-suffix") || "";
            curQuestionChunk.setAttribute("question-suffix", curSuffix + " " + text);
        } else {
            primaryChunks.push(chunk);
        }
        prevBottom = box.bottom;
    }

    let reorganized = new Map();
    for (const e of primaryChunks) {
        reorganized.set(e, []);
    }

    if (primaryChunks.length == 1) {
        // Usually, we try to match right side secondary question chunks with left side primary question chunks
        // by finding the lowest left side chunk whose y position is equal to or above the right side chunk.
        // But there is one edge question in part A where the checkbox elements are slightly above the 
        // matching question text on the left, just because of bad formatting. That's the only 
        // question in that question group, so this is a small hack that allows us to match up the 
        // checkbox chunks with their question text chunk in that case
        const primaryChunk = primaryChunks[0];
        otherChunks
            .map(e => cleanText(e))
            .forEach(s => {
                reorganized.get(primaryChunk).push(s);
            }); 
    } else {
        for (const e of otherChunks) {
            let contextQuestion = findFirstAbove(e, primaryChunks);
            const text = cleanText(e);
            if (contextQuestion != null) {
                reorganized.get(contextQuestion).push(text);
            } else {
                console.warn("Couldn't find context question for %o", e);
            }
        }
    }
    let output = [];
    for (let e of reorganized.keys()) {
        const mainText = e.innerText;
        const questionId = e.getAttribute("pvq-id") || "";
        console.assert(questionId.length > 0, "no PVQ ID found on primary chunk: %o", e);
        const suffix = e.getAttribute("question-suffix") || "";
        const examineHints = [];
        if (suffix != "") {
            examineHints.push("complex_text_dom");
            console.debug("Assembling multi-chunk question text e=%o, main='%s' suffix='%s'", e, mainText, suffix);
        }
        const questionText = cleanText(mainText + " " + suffix);
        let secondaryChunks = reorganized.get(e);
        const question = Question.create(questionId, questionText, secondaryChunks, examineHints);
        output.push(question);
    }
    return output;
}

class QuestionGroupParser {
    #currentCondition = "";
    #currentGroup = {
        "condition": "",
        "prologueContent": [],
        "questionChunks": [],
    };

    groups = [];

    constructor(sectionOverrides) {
        this.sectionOverrides = sectionOverrides || {};
    }

    endGroup() {
        if (this.#currentGroup.questionChunks.length > 0) {
            sortByPosition(this.#currentGroup.questionChunks);
            const questions = parseQuestions(this.#currentGroup.questionChunks);
            processOverrides(questions, this.sectionOverrides);
            const joinedPrologue = this.#currentGroup.prologueContent.join("\n\n");
            this.groups.push({
                "condition": this.#currentGroup.condition,
                "questions": questions,
                "prologue": joinedPrologue
            });
            console.debug("Parsed question group: %o", this.groups.at(-1));
        }

        this.#currentGroup = {
            "condition": this.currentCondition,
            "prologueContent": [],
            "questionChunks": [],
        };
    }

    addContent(e) {
        const text = cleanText(e);
        if (text.length == 0) {
            return;
        }

        const contentType = detectContentType(e);
        if (contentType == "branch-start") {
            const condition = cleanText(substringAfter("]", e.innerText));
            this.currentCondition = condition;
            this.endGroup();
        } else if (contentType == "branch-end" || contentType == "heading") {
            this.currentCondition = "";
            this.endGroup();
        } else if (contentType == "question") {
            this.#currentGroup.questionChunks.push(e);
        } else if (contentType == "text") {
            if (this.#currentGroup.questionChunks.length > 0) {
                this.endGroup();
            }
            this.#currentGroup.prologueContent.push(text);
        } else {
            throw "unexpected content type: " + contentType;
        }
    }
}

function processOverrides(questions, sectionOverrides) {
    for (const i in questions) {
        const question = questions[i];
        const questionId = question.id;
        const replacements = sectionOverrides[questionId];
        if (replacements) {
            console.assert(Array.isArray(replacements), "overrides value for question '%s' is not an array", questionId)
            console.debug("Overriding question questionId=%s", questionId);
            for (const j in replacements) {
                let replacement = replacements[j];
                replacements[j] = question.clone(replacement);
            }
            questions.splice(i, 1, ...replacements);
        }
    }
}

function parseQuestionGroups(sectionContent, sectionOverrides) {
    const parser = new QuestionGroupParser(sectionOverrides);
    for (const e of sectionContent) {
        parser.addContent(e);
    }
    parser.endGroup();
    return parser.groups;
}

function cleanText(s) {
    if (!s) {
        return "";
    }
    if (s instanceof Element) {
        s = s.innerText;
    }
    return s
        .replaceAll(/\s+/g, ' ')
        .trim();
}


/**
 * Organizes all the significant content (non-empty h3, h4 and p tags) in the document
 * by section, with the elements in each section sorted first by Y position, then by X position.
 * 
 * This method also assigns a unique ID to each returned content element, stored in the custom
 * "pvq-id" attribute.
 */
function getElementsBySection(pvqPart) {
    const sections = new Map();
    let currentSection = null;
    let sectionNum = 0;
    let nodeNum = 0;
    document.querySelectorAll("h2, h3, h4, p").forEach((e, pvqId) => {
        var text = cleanText(e);
        const match = /^(Continuation of )?Section ([0-9]+) -/.exec(text);
        if (match != null) {
            const sectionName = cleanText(e).trim();
            sections.set(sectionName, []);
            currentSection = sectionName;
            sectionNum = Number(match[2]);
            nodeNum = 0;
            return;
        }

        if (currentSection == null) {
            return;
        }

        // the node IDs are designed to basically be autoincrementing integers within
        // their own section, so that if a new PVQ draft changes some of the content, 
        // hopefully only the node IDs in the changed sections are invalidated
        // (an alternative would be some hashing scheme based on the node content, but
        // question content is too repetitive)
        if (text.length > 0) {
            sections.get(currentSection).push(e);
            const nodeId = `${pvqPart}-${sectionNum}-${nodeNum++}`;
            e.setAttribute("pvq-id", nodeId);
        }
    });

    for (const elements of sections.values()) {
        sortByPosition(elements);
    }

    return sections;
}

function parseDoc(pvqPart, overrides = {}) {
    console.assert(/^[a-z]$/.test(pvqPart), "pvqPart must be a single lowercase letter");
    const nodesBySection = getElementsBySection(pvqPart);
    const parsedSections = {}
    const sectionNamePattern = /Section ([0-9]+) /;
    for (const sectionHeading of nodesBySection.keys()) {
        const sectionNum = Number(sectionNamePattern.exec(sectionHeading)[1]);
        const sectionId = `section_${sectionNum.toString().padStart(2, '0')}`;
        const content = nodesBySection.get(sectionHeading);
        console.groupCollapsed("Parsing section: %s", sectionHeading);
        const sectionOverrides = overrides[sectionId] || [];
        const groups = parseQuestionGroups(content, sectionOverrides);
        console.groupEnd();
        parsedSections[sectionId] = {
            "name": sectionHeading,
            "groups": groups
        };
    }

    const typeCounts = {};
    let questionCount = 0;
    Object.values(parsedSections)
        .flatMap(s => s.groups)
        .flatMap(g => g.questions)
        .map(q => q.dataType)
        .forEach(dataType => {
            typeCounts[dataType] = (typeCounts[dataType] || 0) + 1;
            questionCount++;
        });
    console.groupCollapsed("Question statistics");
    for (const [dataType, count] of Object.entries(typeCounts)) {
        console.debug("Count for type %s: %o", dataType, count);
    }
    console.debug("Total questions: %o", questionCount);
    console.groupEnd();
    
    console.info("Completed parsing PVQ word doc");
    console.info("To copy the parsed JSON to your clipboard, run %ccopy(JSON.stringify(parsedSections, null, 2))", "color: blue")

    return parsedSections;
}

window.parsedSections = parseDoc(window.pvqPart, window.pvqOverrides);