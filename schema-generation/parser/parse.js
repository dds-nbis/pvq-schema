"use strict";

function getXCoord(e) {
    return getAbsolutePosition(e).left;
}

const BULLET = "•";

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

function getCounts(collection, extractor) {
    const counts = new Map();
    for (const e of collection) {
        const value = extractor(e);
        if (value) {
            const curCount = counts.get(value) || 0;
            counts.set(value, curCount + 1);
        }
    }
    return counts;
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
    }

    // tests whether text starts with an uppercase letter or a left square bracket
    const QUESTION_CONTENT_PATTERN = /^[A-Za-z\[]/;
    let isQuestionLike = e.parentNode.tagName == "TD"
        && fontFamily.indexOf("Garamond") >= 0
        && QUESTION_CONTENT_PATTERN.test(e.innerText.trim());
    if (isQuestionLike) {
        return "question";
    } else {
        return "text";
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

function arraysAreEqual(a, b) {
    return a.length === b.length 
        && a.every((value, index) => value === b[index]);
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
    "mm/yy": "month",
    "mm/yyyy": "month",
    "addr + type": "email_and_type",
    "address + type": "email_and_type",
    "country code|number|extension|type": "phone_number_and_type",
    "country code |number|extension|type": "phone_number_and_type",
    "yyyy": "year",
}

const CHECKBOX_MAPPINGS = {
    "No.": "No",
    "Don’t Know": "I Don't Know",
    "I Don’t Know": "I Don't Know"
};

const DROPDOWN_LIST_MAPPINGS = {
    "State or Territory": "STATE_OR_TERRITORY",
    "Country": "COUNTRY"
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

    static create(questionId, nodeId, text, secondaryChunks, _examineHints) {
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
            }
        } else {
            dataType = "text";
            examineHints.push("no_secondary_chunks");
        }

        let checkboxes = [];
        const otherChunks = [];
        for (const chunk of secondaryChunks) {
            if (CHECKBOX_PATTERN.test(chunk)) {
                let checkboxText = substringAfter(']', chunk).trim();
                checkboxes.push(checkboxText);
            } else if (chunk in SPECIAL_CHUNKS) {
                checkboxes.push(...SPECIAL_CHUNKS[chunk])
            } else {
                otherChunks.push(chunk.trim());
            }
        }

        checkboxes = checkboxes.map(s => CHECKBOX_MAPPINGS[s] || s);

        const yesNoCheckboxes = ["Yes", "No"];
        const yesNoDontknowCheckboxes = ["Yes", "No", "I Don't Know"]
        let dropdownList = null;

        dataType = dataType.trim().toLowerCase();
        dataType = DATATYPE_MAPPINGS[dataType] || dataType;

        if (dataType == "unknown") {
            if (checkboxes.length > 0) {
                if (arraysAreEqual(checkboxes, yesNoCheckboxes)) {
                    dataType = "boolean";
                    checkboxes = [];
                } else if (arraysAreEqual(checkboxes, yesNoDontknowCheckboxes)) {
                    dataType = "dropdown";
                    dropdownList = "YES_NO_DONTKNOW";
                } else {
                    dataType = "checkboxes";
                }
            } else {
                examineHints.push("undetected_datatype");
            }
        } else if (dataType == "dropdown") {
            if (text in DROPDOWN_LIST_MAPPINGS) {
                dropdownList = DROPDOWN_LIST_MAPPINGS[text];
                console.debug("Setting dropdown list text='%s' list=%s", text, dropdownList);
            }
        }

        if (otherChunks.length > 0) {
            examineHints.push("extra_chunks");
        } else if (text.indexOf('[') >= 0) {
            examineHints.push("bracket_in_text");
        } else if (checkboxes.some(s => s.indexOf('[') > 0)) {
            examineHints.push("bracket_in_checkbox");
        }

        return new Question(questionId, nodeId, text, dataType, checkboxes, dropdownList, examineHints);
    }

    constructor(questionId, nodeId, text, dataType, checkboxes, dropdownList, examineHints) {
        console.assert(QUESTION_ID_PATTERN.test(questionId), "invalid question ID: %s", questionId);
        console.assert(typeof text == "string" && text.length > 0, "question text must be a non-empty string")
        console.assert(nodeId != null, "no node ID provided for question questionId=%s text='%s'", questionId, text);

        this.id = questionId;
        this.text = cleanText(text);
        this.dataType = dataType;
        this.nodeId = nodeId;

        if (!checkboxes) {
            checkboxes = [];
        }

        this.dropdownList = dropdownList || "";

        console.assert(Array.isArray(checkboxes), 
            "checkboxes must be an array (actual value: %o)", checkboxes);

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
        if (overrides) {
            if (typeof overrides === "string") {
                overrides = {
                    "id": overrides
                };
            }
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

/**
 * Some of the questions use strings of nbsp whitespace to visually separate different
 * chunks of the question content, rather than using different paras or table cells.
 * This function detects such formatting in the main question text chunk, and moves separate
 * chunks (like "[] Yes" and "[] No" checkbox values) to the start of the secondaryChunks
 * array.
 */
function cleanupNbspChunks(questionText, secondaryChunks) {
    const NBSP_PATTERN = / {3,} *\[[^\n ]+/g;
    const match = questionText.match(NBSP_PATTERN);
    if (match == null) {
        return {
            "questionText": questionText,
            "secondaryChunks": secondaryChunks
        };
    } else {
        const remaining = cleanText(questionText.split(NBSP_PATTERN).join("\n"));
        const matches = match.map(cleanText);
        const newSecondaryChunks = matches.concat(secondaryChunks);
        return {
            "questionText": remaining,
            "secondaryChunks": newSecondaryChunks
        };
    }
}

/**
 * A simple, fast string hash algorithm, taken from
 * 
 * https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
 */
function hashString(str, seed = 48193) {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for(let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1  = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
    h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2  = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
    h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

const QUESTION_HASH_COUNTER = new Map();

/**
 * Creates a parser question ID from the PVQ part, the section number, the current condition
 * text and the question text.
 * 
 * The returned ID has 4 parts, separated by hyphens:
 * 
 * - The PVQ part (a single lowercase letter)
 * - The section number (a positive integer)
 * - The question hash
 * - A counter (a non-negative integer)
 * 
 * The PVQ part and section number are passed in directly. The question hash is the first
 * 6 characters of hash string calculated for the combination of the condition text and 
 * question text. The counter is the number of times that question hash has been used before
 * (in any PVQ part or section, though I don't expect to find the same combination of condition
 * text and question text in different sections). The counter is necessary because there is
 * at least 1 case where the exact same question text is used twice within the same section 
 * and conditional logic group. The counter starts at 0, so for the first question with a 
 * particular condition and text, the counter will be 0, for the second it will be 1, etc.
 * The counter also protects against hash collisions.
 * 
 * This approach should provide reasonable resilience to most of the changes we expect
 * the PVQ documents to have. For example:
 * 
 * - Adding a new question won't change the ID of any other questions (except in the
 *   rare case that the question text and branch condition are identical to a previous
 *   question)
 * - Deleting a question won't change the ID of any other question (except in the
 *   rare case that the question ID and branch conditoin are identical to a subsequent
 *   question)
 * - Modifying the text of a question changes its ID, but no other question IDs
 * - Modifying the text of a branch condition changes the IDs of questions within
 *   that branch, but no others.
 * - Reordering questions and instructions doesn't change any of the question IDs 
 *   (except in the rare case that two of them share the same question text and 
 *   branch condition)
 * - Changing the formatting of questions or other document content (i.e. whether a 
 *   question is in a table or a para tag) doesn't change their IDs.
 * 
 * This should make it easier to update the JSON schema due to new PVQ drafts
 * without a ton of work.
 */
function createQuestionId(pvqPart, sectionNum, conditionText, questionText) {
    conditionText = cleanText(conditionText);
    questionText = cleanText(questionText);
    const hash = hashString(`${conditionText}:::${questionText}`);
    const hashPrefix = Math.abs(hash).toString(16).slice(0,6);

    const curCount = QUESTION_HASH_COUNTER.get(hashPrefix) || 0;
    const qId = `${pvqPart}-${sectionNum}-${hashPrefix}-${curCount}`;
    QUESTION_HASH_COUNTER.set(hashPrefix, curCount + 1);
    return qId;
}

class QuestionGroupParser {
    #currentCondition = "";
    #currentGroup = {
        "condition": "",
        "prologueContent": [],
        "questionChunks": [],
    };

    #conditionCounters = new Map();

    groups = [];

    constructor(pvqPart, sectionNum, sectionOverrides) {
        this.pvqPart = pvqPart;
        this.sectionNum = sectionNum;
        this.sectionOverrides = sectionOverrides || {};
    }

    endGroup() {
        if (this.#currentGroup.questionChunks.length > 0) {
            sortByPosition(this.#currentGroup.questionChunks);
            const questions = this.#parseQuestions(this.#currentGroup.condition, this.#currentGroup.questionChunks);
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
            "condition": this.#currentCondition,
            "prologueContent": [],
            "questionChunks": [],
        };
    }

    startGroup(conditionText) {
        const normalizedCondition = substringAfter("branch auto populate", cleanText(conditionText), true).trim();
        this.#currentCondition = normalizedCondition;
        const curCount = this.#conditionCounters.get(normalizedCondition) || 0;
        this.#conditionCounters.set(normalizedCondition, curCount + 1);
        this.endGroup();
    }

    addContent(e) {
        const text = cleanText(e);
        if (text.length == 0) {
            return;
        }

        const contentType = detectContentType(e);
        if (contentType == "branch-start") {
            this.startGroup(cleanText(e));
        } else if (contentType == "branch-end" || contentType == "heading") {
            this.#currentCondition = "";
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

    #parseQuestions(conditionText, allChunks) {
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
                curQuestionChunk.setAttribute("question-suffix", curSuffix + "\n" + text);
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
            const nodeId = e.getAttribute("pvq-id");
            console.assert(nodeId != null, "no pvq-id found for question element: %o", e);
            const suffix = e.getAttribute("question-suffix") || "";
            const examineHints = [];
            if (suffix != "") {
                examineHints.push("complex_html_parsing");
                console.warn("Assembling multi-chunk question text e=%o, main='%s' suffix='%s'", e, mainText, suffix);
            }
            const questionText = (mainText + " " + suffix).trim();
            let secondaryChunks = reorganized.get(e);
            const cleaned = cleanupNbspChunks(questionText, secondaryChunks);
            const questionId = createQuestionId(this.pvqPart, this.sectionNum, conditionText, questionText);
            const question = Question.create(questionId, nodeId, cleaned.questionText, cleaned.secondaryChunks, examineHints);
            output.push(question);
        }
        return output;
    }
}

function processOverrides(questions, overrides) {
    const hasOverrides = questions.some(q => q.id in overrides);
    if (!hasOverrides) {
        return;
    }

    const newQuestions = [];
    for (const i in questions) {
        const question = questions[i];
        const questionId = question.id;
        let replacements = overrides[questionId];
        if (replacements) {
            if (!Array.isArray(replacements)) {
                replacements = [replacements];
            }
            console.debug("Overriding question questionId=%s replacements=%o", questionId, replacements);
            for (const j in replacements) {
                let replacement = replacements[j];
                if ((typeof replacement) == "string") {
                    replacement = {"id": replacement};
                }
                replacements[j] = question.clone(replacement);
            }
            newQuestions.push(...replacements);
        } else {
            newQuestions.push(question);
        }
    }

    questions.length = 0;
    questions.push(...newQuestions);
}

function parseSection(pvqPart, sectionNum, sectionContent, sectionOverrides) {
    const parser = new QuestionGroupParser(pvqPart, sectionNum, sectionOverrides);
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
    let nodeNum = 0;
    document.querySelectorAll("h2, h3, h4, p").forEach((e, pvqId) => {
        var text = cleanText(e);
        const match = /^(Continuation of )?Section ([0-9]+) (-|–)/.exec(text);
        if (match != null) {
            const sectionName = cleanText(e).trim();
            sections.set(sectionName, []);
            currentSection = sectionName;
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
            const nodeId = nodeNum++;
            e.setAttribute("pvq-id", nodeId);
        }
    });

    for (const elements of sections.values()) {
        sortByPosition(elements);
    }

    return sections;
}

function substringAfter(substring, str, caseInsensitive=false) {
    let index = null;
    if (caseInsensitive) {
        index = str.toLowerCase().indexOf(substring.toLowerCase());
    } else {
        index = str.indexOf(substring);
    }
    if (index === -1) {
        return str;
    }
    return str.slice(index + substring.length);
}


function toTsv(parsed) {
    const rows = [];
    rows.push(["Part", "Section", "Parser ID", "Node ID", "Question text", "Data type", "Checkboxes", "Dropdown list", "Condition", "Review hints", "Repetition group", "Schema ID"]);
    for (const section of Object.values(parsed)) {
        for (const group of section.groups) {
            for (const question of group.questions) {
                const joinedCheckboxes = question.checkboxes ? question.checkboxes.join("|") : "";
                const joinedHints = question.examineHints ? question.examineHints.join(", ") : "";
                const row = [
                    window.parserConfig.pvqPart.toUpperCase(),
                    section.name,
                    question.id,
                    question.nodeId,
                    question.text,
                    question.dataType,
                    joinedCheckboxes,
                    question.dropdownList,
                    group.condition,
                    joinedHints,
                    "",
                    ""
                ];
                rows.push(row);
            }
        }
    }

    return rows
        .map(row => row.join("\t"))
        .join("\n");
}

function parseDoc(config) {
    const pvqPart = config.pvqPart;
    const overrides = config.overrides || {};
    console.assert(/^[a-z]$/.test(pvqPart), "config.pvqPart must be a single lowercase letter");
    console.assert(typeof overrides == "object", "config.overrides must be an object");

    const nodesBySection = getElementsBySection(pvqPart);
    const parsedSections = {}
    const sectionNamePattern = /Section ([0-9]+) /;
    for (const sectionHeading of nodesBySection.keys()) {
        const sectionNum = Number(sectionNamePattern.exec(sectionHeading)[1]);
        const sectionId = `section_${sectionNum.toString().padStart(2, '0')}`;
        const content = nodesBySection.get(sectionHeading);
        console.groupCollapsed("Parsing section: %s", sectionHeading);
        const groups = parseSection(pvqPart, sectionNum, content, overrides);
        console.groupEnd();
        parsedSections[sectionId] = {
            "name": substringAfter("Section", sectionHeading).trim(),
            "groups": groups
        };
    }

    const allGroups = Object.values(parsedSections)
        .flatMap(s => s.groups);
    const allQuestions = allGroups.flatMap(g => g.questions);
    const allIds = allQuestions.map(q => q.id);
    for (let i = 0; i < allIds.length; i++) {
        const qId = allIds[i];
        var firstIndex = allIds.indexOf(qId);
        if (i !== firstIndex) {
            console.warn("DUPLICATE ID questionId=%s i=%s firstIndex=%s", qId, typeof i, typeof firstIndex);
        }
    }

    const typeCounts = {};
    allQuestions.map(q => q.dataType)
        .forEach(dataType => {
            typeCounts[dataType] = (typeCounts[dataType] || 0) + 1;
        });
    console.groupCollapsed("Question statistics");
    for (const [dataType, count] of Object.entries(typeCounts)) {
        console.debug("Count for type %s: %o", dataType, count);
    }

    console.debug("Counts by checkbox values");
    let checkboxCounts = getCounts(allQuestions, q => q.checkboxes ? q.checkboxes.join("|") : null);
    [...checkboxCounts.entries()]
        .sort((a, b) => b[1] - a[1])
        .forEach(([checkboxes, count]) => {
            console.debug("CHECKBOXES %s: %s", checkboxes, count)
        });
    console.groupEnd();

    console.debug("Total questions: %o", allQuestions.length);
    console.info("Completed parsing PVQ word doc");
    console.info("To copy the parsed JSON to your clipboard, run %ccopy(JSON.stringify(parsedSections, null, 2))", "color: blue")
    console.info("To copy the parsed TSV to your clipboard, run %ccopy(toTsv(parsedSections))", "color: blue")

    return parsedSections;
}

function generateOverridesSkeleton(parsed) {
    const output = {};
    Object.values(parsed)
        .flatMap(s => s.groups)
        .flatMap(g => g.questions)
        .forEach(q => {
            output[q.id] = null;
        });
    return output;
}

window.parsedSections = parseDoc(window.parserConfig);