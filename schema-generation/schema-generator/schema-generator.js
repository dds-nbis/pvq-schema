//const DEBUG = false;

function parseCSV(csvText) {
    const rows = [];
    let currentRow = [];
    let currentValue = '';
    let insideQuotes = false;

    for (let i = 0; i < csvText.length; i++) {
        const char = csvText[i];
        const nextChar = csvText[i + 1];

        if (char === '"') {
            if (insideQuotes && nextChar === '"') {
                // Handle escaped quotes ("") inside quoted values
                currentValue += '"';
                i++; // Skip next quote
            } else {
                // Toggle quote state
                insideQuotes = !insideQuotes;
            }
        } else if (char === ',' && !insideQuotes) {
            // End of field
            currentRow.push(currentValue.trim());
            currentValue = '';
        } else if (char === '\n' && !insideQuotes) {
            // End of row
            currentRow.push(currentValue.trim());
            rows.push(currentRow);
            currentRow = [];
            currentValue = '';
        } else {
            currentValue += char;
        }
    }

    // Handle last value
    if (currentValue || currentRow.length > 0) {
        currentRow.push(currentValue.trim());
        rows.push(currentRow);
    }

    return rows;
}

function parseDropdownValues(valuesCsv) {
    const output = new Map();
    let count = 0;
    parseCSV(valuesCsv.trim())
        .slice(1)
        .forEach(row => {
            const listName = row[0];
            const value = row[1];
            if (!output.has(listName)) {
                output.set(listName, []);
            }
            output.get(listName).push(value);
            count++;
        });

    console.debug("Parsed dropdown values count=%s", count);
    return output;
}

/**
 * Generates the schema's "$defs" section, creating one subschema with enumerated values for every 
 * dropdown list parsed.
 * 
 * @param {Map} ddValues 
 * @returns 
 */
function generateCommonDefs(ddValues) {
    console.info("Generating common schema defs");
    const output = {
        "debug_question_id": {
            "type": "string",
            "pattern": QUESTION_ID_REGEX
        },
        "phone_number_value": {
            "type": "object",
            "properties": {
                "countryCode": {
                    "type": "string",
                    "pattern": "\\d+"
                },
                "number": {
                    "type": "string",
                    "pattern": "\\d{5,}" // Solomon Islands can have 5 digit numbers
                },
                "extension": {
                    "type": "string",
                    "maxLength": 100
                },
                "type": {
                    "type": "string",
                    "enum": ["Cell", "Home", "Work"]
                },
                "timeOfDay": {
                    "type": "string",
                    "enum": ["Day", "Night", "Both"]
                },
                "isDsn": {
                    "type": "boolean"
                }
            },
            "required": ["countryCode", "number", "type", "timeOfDay", "extension", "isDsn"],
        }
    };

    for (const typeName in QUESTION_TYPES) {
        const instance = QUESTION_TYPES[typeName];
        const commonDefs = instance.getCommonDefs();
        verify((typeof commonDefs) == "object", "getCommonDefs returned bad result for %s", typeName);
        console.debug("Common defs for %s: %o", typeName, Object.keys(commonDefs));
        for (const defName in commonDefs) {
            console.debug("Recording common def name=%s", defName);
            output[defName] = commonDefs[defName];
        }
    }

    for (const listName of ddValues.keys()) {
        console.assert(/^[A-Z_]+$/.test(listName), "corrupt dropdown list name: %s", listName);
        const values = ddValues.get(listName);
        const valueDefsKey = `dropdown_values_${listName}`;
        output[valueDefsKey] = {
            "type": "string",
            "enum": values
        };
        const questionDefsKey = `basic_dropdown_${listName}`;
        output[questionDefsKey] = {
            "type": "object",
            "properties": {
                "value": {
                    "$ref": `#/$defs/${valueDefsKey}`
                }
            },
            "required": ["value"]
        };

        console.debug("Created common dropdown value schema name=%s", valueDefsKey);
    }
    console.debug("Final common def names: %o", Object.keys(output));
    return output;
}

function parseSection(rawSection) {
    const match = /^([0-9]+)_([a-zA-Z]+)/.exec(rawSection);
    console.assert(match != null, "Bogus section name: %s", rawSection);
    return [Number(match[1]), match[2]];
}

function parseDelimitedString(s, delimiter) {
    const trimmed = s.trim();
    if (trimmed.length == 0) {
        return [];
    }
    return trimmed.split(delimiter).map(part => part.trim());
}

const REQUIRED_COLS = new Set(["part", "section", "questionId", "questionText", "propertyName"]);

function parseQuestionRow(row) {
    console.assert(row.length >= 11, "BAD ROW, not enough columns row=%o colCount=%s", row, row.length);
    row = row.map(s => s.trim());
    const checkboxes = parseDelimitedString(row[6], "|");
    const groupPath = parseDelimitedString(row[9], '.');

    const output = {
        "part": row[0],
        "section": row[1],
        "questionId": row[2],
        "questionText": row[4],
        "dataType": row[5].toLowerCase(),
        "checkboxes": checkboxes,
        "dropdownList": row[7],
        "condition": row[8],
        "groupPath": groupPath,
        "propertyName": row[10]
    };

    for (const fieldName of REQUIRED_COLS) {
        const value = output[fieldName];
        console.assert(value, "Bad row, no %s found row=%o", fieldName, row);
    }

    return output;

}

const EMAIL_REGEX = "^(Personal|Work|Unknown): \\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$";
const DATE_REGEX = "^\\d{4}-\\d{2}-\\d{2}$";
const MONTH_REGEX = "^\\d{4}-\\d{2}$";
const YEAR_REGEX = "^\\d{4}$";
const NUMBER_REGEX = "^\\d+(\\.\\d+)?$";
const QUESTION_ID_REGEX = "^[abcd]-\\d+-[0-9a-z]{6}-\\d+$";

const NORMAL_MAX_LENGTH = 255;
const LONG_MAX_LENGTH = 4000;

class QuestionType {
    constructor(isMultivalue, hasEnumList, requiresValue, valuePattern, schemaFormat, maxLength, isPhoneNumber) {
        this.isMultivalue = isMultivalue;
        this.hasEnumList = hasEnumList;
        this.requiresValue = requiresValue;
        this.valuePattern = valuePattern || null;
        this.schemaFormat = schemaFormat || null;
        this.maxLength = maxLength || null;
        this.isPhoneNumber = isPhoneNumber || false;
    }
}

function makeQuestionDef(maxLength, regex) {
    let schema = {
        "type": "object",
        "properties": {
            "value": {
                "type": "string"
            },
            "_qId": {
                "$ref": "#/$defs/debug_question_id"
            }

        },
        "required": ["value"],
        "additionalProperties": false
    };
    if (maxLength) {
        schema.properties.value.maxLength = maxLength;
    }
    if (regex) {
        schema.properties.value.pattern = regex;
    }
    return schema;
}

function addCheckboxes(skeleton, checkboxes) {
    for (let checkbox of checkboxes) {
        skeleton.properties[checkbox] = {
            "type": "boolean"
        };
    }
    return skeleton;
}

function makeMultivalue(schema) {
    const valueSpec = schema.properties.value;
    schema.properties.value = {
        "type": "array",
        "items": valueSpec
    };
    return schema;
}

class TextQuestionType {
    constructor(name, maxLength, regex, isMultivalue) {
        this.name = name;
        this.maxLength = maxLength || null;
        this.regex = regex || null;
        this.isMultivalue = isMultivalue || false;
        this.commonDefName = "basic_" + this.name;
    }

    getCommonDefs() {
        const defs = {};
        defs[this.commonDefName] = makeQuestionDef(this.maxLength, this.regex);
        return defs;
    }

    generateSchema(checkboxes) {
        if (checkboxes.length == 0 && !this.isMultivalue) {
            const defPath = `#/$defs/${this.commonDefName}`;
            return { "$ref": defPath };
        } else {
            const result = this.getCommonDefs()[this.commonDefName];
            addCheckboxes(result, checkboxes);
            if (this.isMultivalue) {
                makeMultivalue(result);
            }
            return result;
        }
    }
}

function getPhoneNumberQuestionSchema() {
    return {
        "type": "object",
        "properties": {
            "value": {
                "$ref": "#/$defs/phone_number_value"
            },
            "_qId": {
                "$ref": "#/$defs/debug_question_id"
            }
        },
        "additionalProperties": false
    };
}

class PhoneNumberQuestionType {

    constructor(isMultivalue) {
        this.isMultivalue = isMultivalue;
    }

    getCommonDefs() {
        if (this.isMultivalue) {
            return {};
        }

        return {
            "basic_phone_number": getPhoneNumberQuestionSchema()
        };
    }

    generateSchema(checkboxes) {
        if (checkboxes.length == 0 && !this.isMultivalue) {
            return { "$ref": "#/$defs/basic_phone_number" };
        } else {
            const result = getPhoneNumberQuestionSchema();
            addCheckboxes(result, checkboxes);
            if (this.isMultivalue) {
                makeMultivalue(result);
            }
            return result;
        }
    }
}

class CheckboxesQuestionType {
    getCommonDefs() {
        return {};
    }

    generateSchema(checkboxes) {
        const result = {
            "type": "object",
            "properties": {}
        };

        for (const checkbox of checkboxes) {
            result.properties[checkbox] = {
                "type": "boolean"
            };
        }

        return result;
    }
}

class DropdownQuestionType {
    constructor(isMultivalue) {
        this.isMultivalue = isMultivalue;
    }

    getCommonDefs() {
        return {};
    }

    generateSchema(checkboxes, listName) {
        if (checkboxes.length == 0 && !this.isMultivalue) {
            return {
                "$ref": `#/$defs/basic_dropdown_${listName}`
            };
        }

        const result = {
            "type": "object",
            "properties": {
                "value": {
                    "$ref": `#/$defs/dropdown_values_${listName}`
                }
            }
        };
        addCheckboxes(result, checkboxes);
        if (this.isMultivalue) {
            makeMultivalue(result);
        }
        return result;
    }
}

const QUESTION_TYPES = {
    "text": new TextQuestionType("text", NORMAL_MAX_LENGTH),
    "long_text": new TextQuestionType("long_text"),
    "number": new TextQuestionType("number", NORMAL_MAX_LENGTH, NUMBER_REGEX),
    "email": new TextQuestionType("email", NORMAL_MAX_LENGTH, EMAIL_REGEX),
    "email_multiple": new TextQuestionType("email", NORMAL_MAX_LENGTH, EMAIL_REGEX, true),
    "date": new TextQuestionType("date", 20, DATE_REGEX),
    "month": new TextQuestionType("month", 20, MONTH_REGEX),
    "year": new TextQuestionType("year", 4, YEAR_REGEX),
    "phone_number": new PhoneNumberQuestionType(false),
    "phone_number_multiple": new PhoneNumberQuestionType(true),
    "checkboxes": new CheckboxesQuestionType(),
    "dropdown": new DropdownQuestionType(false),
    "dropdown_multiple": new DropdownQuestionType(true)
};

function getSampleValue(q, dropdownValues) {
    const propName = q.propertyName.toLowerCase();
    const dataType = q.dataType;
    if (dataType == "text") {
        if (propName.endsWith("lastname")) {
            return "Smith";
        } else if (propName.endsWith("firstname")) {
            return "John";
        } else if (propName.endsWith("middlename")) {
            return "Albert";
        } else if (propName.endsWith("street")) {
            return "123 Main Street";
        } else if (propName.endsWith("state")) {
            return "WA";
        } else if (propName.endsWith("city")) {
            return "Rapid City";
        } else if (propName.endsWith("postcode")) {
            return "1234-5678"
        } else if (propName.endsWith("usgfacilityname")) {
            return "US Embassy Wakanda"
        } else if (propName.endsWith("militaryinstallationname")) {
            return "AFB Wakanda";
        } else if (propName.endsWith("agency")) {
            return "Census Bureau";
        } else if (propName == "webadress") {
            return "https://google.com";
        } else if (propName.endsWith("jobtitle")) {
            return "Site manager";
        } else if (propName.endsWith("explanation") || propName.endsWith("details") || propName.endsWith("description")) {
            return "Lorem ipsum dolor sit amet."
        } else {
            return "Lorem ipsum";
        }
    } else if (dataType == "number") {
        return "100";
    } else if (dataType == "date") {
        return "2020-01-01";
    } else if (dataType == "month") {
        return "2020-10";
    } else if (dataType == "year") {
        return "2020";
    } else if (dataType == "dropdown" || dataType == "dropdown_multiple") {
        const listName = q.dropdownList;
        let value = null;
        if (listName == "COUNTRIES") {
            value = "CAN";
        } else if (listName == "STATE_OR_TERRITORY") {
            value = "WA";
        } else {
            const values = dropdownValues.get(listName);
            if (values.indexOf("Yes") >= 0) {
                value = "Yes";
            } else if (values.indexOf("None") > 0) {
                value = "None";
            } else {
                value = values[0];
            }
        }

        if (dataType == "dropdown") {
            return value;
        } else {
            return [value];
        }
    } else if (dataType == "email") {
        return "Personal: lorem.ipsum@gmail.com";
    } else if (dataType == "email_multiple") {
        return ["Personal: lorem.ipsum@gmail.com"];
    } else if (dataType == "phone_number") {
        return {
            "countryCode": "1",
            "number": "2025551234",
            "type": "Cell",
            "timeOfDay": "Both",
            "extension": "",
            "isDsn": false
        };
    } else if (dataType == "phone_number_multiple") {
        return [
            {
                "countryCode": "1",
                "number": "2025551234",
                "type": "Cell",
                "timeOfDay": "Both",
                "extension": "",
                "isDsn": false
            }
        ];
    } else if (dataType == "checkboxes") {
        return "";
    } else {
        return "Sample value";
    }
}

let SIMPLE_Q_COUNTERS = new Map();

function verify(condition, ...args) {
  if (!condition) {
    console.error(...args);
    throw new Error("assertion failed");
  }
}

function generateSimpleProperty(row) {
    const dataType = row.dataType;
    const questionId = row.questionId;
    const qType = QUESTION_TYPES[dataType];
    let checkboxes = row.checkboxes;
    let dropdownList = row.dropdownList;
    verify(qType, "unable to lookup question type question=%s type=%s");
    console.debug("Generating question schema question=%s dataType=%s", questionId, dataType);
    let qSchema = qType.generateSchema(checkboxes, dropdownList);
    verify(qSchema != null, "qSchema was null after question type identification question=%s type=%s",
        questionId, dataType);
    return qSchema;
}

/**
 * Checks for duplicate property names within a single schema object scope.
 */
class PropDeduper {
    constructor() {
        this.seen = new Map();
    }

    record(propName, q) {
        const prev = this.seen.get(propName);
        if (prev) {
            console.warn("Duplicate property detected prop=%s oldQ=%o newQ=%o", propName, prev, q);
        } else {
            this.seen.set(propName, q);
        }
    }
}

function substringBefore(str, suffix) {
  if (!str || !suffix || !str.endsWith(suffix)) {
    return null;
  }
  return str.slice(0, -suffix.length);
}

function processQuestions(schemaContext, sampleContext, contextDepth, questions, dropdownValues) {
    console.debug("Called processQuestions schemaContext=%o sampleContext=%o contextDepth=%s questions=%o", 
        schemaContext, sampleContext, contextDepth, questions);
    const nestedQuestions = [];
    const requiredProps = [];
    const deduper = new PropDeduper();

    for (const q of questions) {
        const propName = q.propertyName;
        const questionId = q.questionId;
        console.assert(propName != "IGNORE", "Encountered an ignored question q=%o", q);
        const groupPath = q.groupPath.slice(contextDepth);
        const condition = q.condition;
        if (groupPath.length == 0) {
            let prop = generateSimpleProperty(q);
            schemaContext.properties[propName] = prop;
            if (!DEBUG && condition == "") {
                schemaContext.required.push(propName);
            }
            deduper.record(propName, prop);
            const sampleValue = getSampleValue(q, dropdownValues);
            sampleContext[propName] = {
                "value": sampleValue,
                "_qId": questionId
            };
            q.checkboxes.forEach(checkbox => {
                sampleContext[propName][checkbox] = true;
            });
        } else {
            nestedQuestions.push(q);
        }

    }

    const arrayProps = Map.groupBy(nestedQuestions, 
        q => q.groupPath.slice(contextDepth)[0]);
    for (const arrayPropName of arrayProps.keys()) {
        const children = arrayProps.get(arrayPropName);
        const prop = {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {},
                "required": [],
                "additionalProperties": false
            }
        };
        schemaContext.properties[arrayPropName] = prop;
        const sampleArrayValue = {};
        sampleContext[arrayPropName] = [sampleArrayValue];
        processQuestions(prop.items, sampleArrayValue, contextDepth + 1, children, dropdownValues);
        deduper.record(arrayPropName, prop);
    }
}

const NATIONAL_SECURITY_PARTS = new Set(["A", "B", "C"]);
const PUBLIC_TRUST_PARTS = new Set(["A", "B"]);
const LOW_RISK_PARTS = new Set(["A"]);

function isQuestionApplicable(subjectType, parsedQuestion) {
    const questionPart = parsedQuestion.part;
    if (subjectType == "NATIONAL_SECURITY") {
        return NATIONAL_SECURITY_PARTS.has(questionPart);
    } else if (subjectType == "PUBLIC_TRUST") {
        return PUBLIC_TRUST_PARTS.has(questionPart);
    } else if (subjectType == "LOW_RISK") {
        return LOW_RISK_PARTS.has(questionPart);
    } else {
        throw new Error("Corrupt subject type: " + subjectType);
    }
}

function generateSchema(questionsCsv, subjectType, dropdownValues) {
    console.groupCollapsed("Parsing questions CSV");
    const allQuestions = parseCSV(questionsCsv)
        .slice(1) // skip the header row
        .map(parseQuestionRow)
        .filter(q => q.propertyName != "IGNORE");
    const filteredQuestions = allQuestions
        .filter(q => isQuestionApplicable(subjectType, q));
    console.debug("Parsed questions CSV subjectType=%s allQuestions=%s filteredQuestions=%s", 
        subjectType, allQuestions.length, filteredQuestions.length);
    console.groupEnd();

    const questionsBySection = Map.groupBy(filteredQuestions, q => q.section);

    const output = {
        "$id": "https://github.com/dds-nbis/pvq-schema",
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "PVQ Response",
        "description": "Validates responses to the US Federal Personnel Vetting Questionnaire",
        "type": "object",
        "properties": {
            "subjectType": {
                "type": "string",
                "const": subjectType
            }
        },
        "required": ["subjectType"],
        "additionalProperties": false
    };

    const sampleDoc = {
        "subjectType": subjectType
    };

    console.groupCollapsed("Parsing dropdown values");
    const commonDefs = generateCommonDefs(dropdownValues);
    console.debug("Final common defs: %o", commonDefs);
    output["$defs"] = commonDefs;
    console.groupEnd();

    SIMPLE_Q_COUNTERS.clear();
    for (const rawSection of questionsBySection.keys()) {

        // if (!rawSection.startsWith("06")) {
        //     continue;
        // }

        const sectionQuestions = questionsBySection.get(rawSection);
        const [sectionNum, sectionName] = parseSection(rawSection);

        console.groupCollapsed("Section: " + rawSection);
        const sectionObj = {
            "type": "object",
            "properties": {},
            "required": [],
            "additionalProperties": false,
            "title": `Section ${sectionNum}: ${sectionName}`
        };
        output.properties[sectionName] = sectionObj;
        if (!DEBUG) {
            output.required.push(sectionName);
        }

        const sampleSection = {};
        sampleDoc[sectionName] = sampleSection;

        processQuestions(sectionObj, sampleSection, 0, sectionQuestions, dropdownValues);
        console.groupEnd();
    }

    console.debug("Finished schema generation for %s simpleQCounters=%o", 
            subjectType, SIMPLE_Q_COUNTERS);

    return [output, sampleDoc];
}

function readFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            console.debug("Read input file: %s", file.name);
            const content = event.target.result;
            resolve(content);
        };

        reader.onerror = (error) => {
            console.error("Error reading input file")
            reject(error);
        };

        reader.readAsText(file);
    });
}