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
    const output = {
        "debug_question_id": {
            "type": "string",
            "pattern": QUESTION_ID_REGEX
        },
        "phone_number": {
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
            "additionalProperties": false
        },
        "us_addr_type1": {
            "type": "object",
            "properties": {
                "streetAddress": {
                    "type": "string",
                    "maxLength": 255,
                    "description": "The street address or PO Box"
                },
                "city": {
                    "type": "string",
                    "maxLength": 100,
                    "description": "The name of the city or town"
                },
                "stateOrTerritory": {
                    "type": "string",
                    "minLength": 2,
                    "maxLength": 2,
                    "description": "The standard two letter USPS code for the state or territory"
                },
                "zipcode": {
                    "type": "string",
                    "pattern": "^\d{5}(?:[- ]\d{4})?$",
                    "description": "The zipcode"
                },
                "isMilitaryInstallation": {
                    "type": "boolean",
                    "description": "Whether or not the adddress is on a US military installation"
                },
                "militaryInstallationName": {
                    "type": "string",
                    "maxLength": 100,
                    "description": "The name of the US military installation the address is on, if any"
                }
            },
            "required": ["streetAddress", "city", "stateOrTerritory", "zipcode", "isMilitaryInstallation"]
        },
        "us_addr_type2": {
            "type": "object",
            "properties": {
                "streetAddress": {
                    "type": "string",
                    "maxLength": 255,
                    "description": "The street address"
                },
                "city": {
                    "type": "string",
                    "maxLength": 100,
                    "description": "The name of the city or town"
                },
                "stateOrTerritory": {
                    "type": "string",
                    "minLength": 2,
                    "maxLength": 2,
                    "description": "The standard two letter USPS code for the state or territory"
                },
                "zipcode": {
                    "type": "string",
                    "pattern": "^\d{5}(?:[- ]\d{4})?$",
                    "description": "The zipcode"
                }
            },
            "required": ["streetAddress", "city", "stateOrTerritory", "zipcode", "isMilitaryInstallation"]
        },
        "us_addr_type3": {
            "type": "object",
            "properties": {
                "city": {
                    "type": "string",
                    "maxLength": 100,
                    "description": "The name of the city or town"
                },
                "stateOrTerritory": {
                    "type": "string",
                    "minLength": 2,
                    "maxLength": 2,
                    "description": "The standard two letter USPS code for the state or territory"
                },
                "zipcode": {
                    "type": "string",
                    "pattern": "^\d{5}(?:[- ]\d{4})?$",
                    "description": "The zipcode"
                },
                "isMilitaryInstallation": {
                    "type": "boolean",
                    "description": "Whether or not the adddress is on a US military installation"
                },
                "militaryInstallationName": {
                    "type": "string",
                    "maxLength": 100,
                    "description": "The name of the US military installation the address is on, if any"
                }
            },
            "required": ["streetAddress", "city", "stateOrTerritory", "zipcode", "isMilitaryInstallation"]
        },
        "foreign_addr_type1": {
            "type": "object",
            "properties": {
                "streetAddress": {
                    "type": "string",
                    "maxLength": 255,
                    "description": "The street address"
                },
                "city": {
                    "type": "string",
                    "maxLength": 100,
                    "description": "The name of the city or town"
                },
                "country": {
                    "type": "string",
                    "minLength": 3,
                    "maxLength": 3,
                    "description": "The 3 letter GENC code for the country. GENC country codes are typically the same as ISO-3166-1 codes, with exceptions to comply with USG policy."
                },
                "isUsgFacility": {
                    "type": "boolean",
                    "description": "True if the address is on a US military or diplomatic facility abroad, false otherwise"
                },
                "usgFacilityName": {
                    "type": "string",
                    "maxLength": 100,
                    "description": "The name of the US military or diplomatic facility the address is on, if any"
                },
                "usgFacilityPostcode": {
                    "type": "string",
                    "maxLength": 15,
                    "description": "What is the APO/FPO/DPO ZIP Code of the USG facility, if any"
                }
            },
            "required": ["streetAddress", "city", "country", "isUsgFacility"]
        },
        "foreign_addr_type2": {
            "type": "object",
            "properties": {
                "streetAddress": {
                    "type": "string",
                    "maxLength": 255,
                    "description": "The street address"
                },
                "city": {
                    "type": "string",
                    "maxLength": 100,
                    "description": "The name of the city or town"
                },
                "country": {
                    "type": "string",
                    "minLength": 3,
                    "maxLength": 3,
                    "description": "The 3 letter GENC code for the country. GENC country codes are typically the same as ISO-3166-1 codes, with exceptions to comply with USG policy."
                }
            },
            "required": ["streetAddress", "city", "country", "isUsgFacility"]
        },
        "foreign_addr_type3": {
            "type": "object",
            "properties": {
                "city": {
                    "type": "string",
                    "maxLength": 100,
                    "description": "The name of the city or town"
                },
                "country": {
                    "type": "string",
                    "minLength": 3,
                    "maxLength": 3,
                    "description": "The 3 letter GENC code for the country. GENC country codes are typically the same as ISO-3166-1 codes, with exceptions to comply with USG policy."
                },
                "isUsgFacility": {
                    "type": "boolean",
                    "description": "True if the address is on a US military or diplomatic facility abroad, false otherwise"
                },
                "usgFacilityName": {
                    "type": "string",
                    "maxLength": 100,
                    "description": "The name of the US military or diplomatic facility the address is on, if any"
                },
                "usgFacilityPostcode": {
                    "type": "string",
                    "maxLength": 15,
                    "description": "What is the APO/FPO/DPO ZIP Code of the USG facility, if any"
                }
            },
            "required": ["streetAddress", "city", "country", "isUsgFacility"]
        }
    };
    for (const listName of ddValues.keys()) {
        console.assert(/^[A-Z_]+$/.test(listName), "corrupt dropdown list name: %s", listName);
        const values = ddValues.get(listName);
        const defsKey = `dropdown_${listName}`;
        output[defsKey] = {
            "type": "string",
            "enum": values
        };
        console.debug("Created common dropdown value schema name=%s", defsKey);
    }
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

const DEFAULT_MAX_LENGTH = 255;

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

const QUESTION_TYPES = {
    "text": new QuestionType(false, false, true, null),
    "long_text": new QuestionType(false, false, true, null, null, 4000),
    "number": new QuestionType(false, false, true, NUMBER_REGEX),
    "email": new QuestionType(false, false, true, EMAIL_REGEX),
    "email_multiple": new QuestionType(true, false, true, EMAIL_REGEX),
    "phone_number": new QuestionType(false, false, true, null, null, null, true),
    "phone_number_multiple": new QuestionType(true, false, true, null, null, null, true),
    "checkboxes": new QuestionType(false, false, false, null),
    "date": new QuestionType(false, false, true, DATE_REGEX, "date"),
    "month": new QuestionType(false, false, true, MONTH_REGEX),
    "year": new QuestionType(false, false, true, YEAR_REGEX),
    "dropdown": new QuestionType(false, true, true, null),
    "dropdown_multiple": new QuestionType(true, true, true, null)
};

const NORMAL_TEXT_PATTERN = /^(ZIP|U\.S\.|[A-Z]\. |[A-Z][a-z]).*/;

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

function generateSimpleProperty(row, dropdownValues) {
    const dataType = row.dataType;
    const questionId = row.questionId;
    const typeSettings = QUESTION_TYPES[dataType];
    console.assert(typeSettings, "Unhandled data type type=%s question=%s row=%o", dataType, questionId, row);

    const hasNormalText = NORMAL_TEXT_PATTERN.test(row.questionText);
    if (!hasNormalText) {
        console.warn("Weird question text text='%s' questionId=%s", row.questionText, questionId);
    }

    const hasEnumList = typeSettings.hasEnumList;
    if (hasEnumList) {
        console.assert(row.dropdownList, "Dropdown list not defined question=%s type=%s", questionId, dataType);
    } else {
        console.assert(!row.dropdownList, "Dropdown list unexpectedly found question=%s type=%s", questionId, dataType);
    }

    let dropdownList = row.dropdownList;

    const description = `
Question text: ${row.questionText}
Data type: ${dataType}
Question ID: ${questionId}
`.trim();

    let prop = {
        "type": "object",
        "properties": {
            "value": {
                "type": "string",
                "maxLength": DEFAULT_MAX_LENGTH
            },
            "_qId": {
                "$ref": "#/$defs/debug_question_id"
            }

        },
        "additionalProperties": false,
        "title": `Question ${questionId}`,
        "description": description
    };

    if (typeSettings.isPhoneNumber) {
        prop.properties.value = {
            "$ref": "#/$defs/phone_number"
        };
    }

    for (let checkbox of row.checkboxes) {
        prop.properties[checkbox] = {
            "type": "boolean"
        };
    }

    if (typeSettings.maxLength) {
        prop.properties.value.maxLength = typeSettings.maxLength;
    }

    if (typeSettings.requiresValue) {
        prop.required = ["value"];
    } else {
        // no value is required on checkboxes questions, but if provided, it must be an empty string
        console.assert(row.checkboxes.length > 0, "no checkboxes defined for checkboxes question question=%s", row.questionId);
        prop.required = [];
        prop.properties.value.const = "";
    }

    if (typeSettings.hasEnumList) {
        const enumValues = dropdownValues.get(dropdownList);
        if (enumValues) {
            const defsKey = `#/$defs/dropdown_${dropdownList}`;
            prop.properties.value = {
                "$ref": defsKey
            };
        } else {
            console.error("unknown dropdown list list=%s questionId=%s", dropdownList, questionId);
            prop.properties.value.enum = [];
        }
    } 

    if (typeSettings.valuePattern) {
        prop.properties.value.pattern = typeSettings.valuePattern;
    }

    if (typeSettings.schemaFormat) {
        prop.properties.value.format = typeSettings.schemaFormat;
    }

    if (typeSettings.isMultivalue) {
        const valueSpec = prop.properties.value;
        prop.properties.value = {
            "type": "array",
            "items": valueSpec
        };
    }

    return prop;
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



// I think we should refactor "NonUs" property names to say "Foreign" for less tricky matching
// Need to continue searching for incomplete aggregations, they may indicate issues in the XLS

// Consider updating this to support both required and optional fields (court martial offense US address in section 9 doesn't have street, for example)... simplifies schema, at the expense of less accurate validation. Validation is horribly inaccurate anyway, maybe that doesn't matter.

class Aggregation {
  constructor(aggregationType, properties) {
    // Validate aggregationType is a string
    if (typeof aggregationType !== 'string') {
      throw new TypeError('aggregationType must be a string');
    }

    // Validate properties is an array of strings
    if (!Array.isArray(properties)) {
      throw new TypeError('properties must be an array');
    }

    if (properties.some(prop => typeof prop !== 'string')) {
      throw new TypeError('All elements in properties must be strings');
    }

    this.aggregationType = aggregationType;
    this.properties = properties;
  }
}

class AggregationType {
    constructor(name, discriminatorSuffix, otherSuffixes, aggregationSuffix) {
        this.name = name;
        this.discriminatorSuffix = discriminatorSuffix;
        this.otherSuffixes = otherSuffixes;
        this.aggregationSuffix = aggregationSuffix;
    }

    getAggregatedPropName(prefix) {
        return prefix + this.aggregationSuffix;
    }

    /**
     * Returns a Set of the property names with the given prefix matching this aggregation.
     */
    getPropertyNames(prefix) {
        const output = new Set();
        output.add(prefix + this.discriminatorSuffix);
        for (const suffix of this.otherSuffixes) {
            output.add(prefix + suffix);
        }
        return output;
    }

    /**
     * Tests whether the given property names contain any property sets compatible
     * with this aggregation type, returning an array of all matching property name prefixes.
     * 
     * A property name prefix matches this aggregation type if the given property keys
     * contain a property name with that prefix and the expected suffix, for all suffixes
     * associated with this aggregation type.
     */
    testKeys(propKeys) {
        const candidatePrefixes = Array.from(propKeys)
            .map(s => this.#matchSuffix(s, this.discriminatorSuffix))
            .filter(s => s != null && !s.endsWith("Non"));
        const output = [];
        for (const prefix of candidatePrefixes) {
            const missingProps = this.otherSuffixes
                .map(suffix => prefix + suffix)
                .filter(expectedProp => !propKeys.has(expectedProp));
            if (missingProps.length == 0) {
                output.push(prefix);
            } else {
                console.warn("Unable to match all aggregation properties aggregation=%s missing=%o", 
                    this.name, missingProps)
            }
        }
        return output;
    }

    /**
     * Returns the substring before the suffix if s ends with the suffix, otherwise returns null. 
     */
    #matchSuffix(s, suffix) {
        if (!s.endsWith(suffix)) {
            return null;
        }
        return s.slice(0, -1 * suffix.length);
    }
}

const US_ADDR_TYPE1 = new AggregationType("us_addr_type1", "UsIsMilitaryInstallation", 
        ["UsMilitaryInstallationName", "UsStreet", "UsCity", "UsState", "UsZipcode"], "Us");
const US_ADDR_TYPE2 = new AggregationType("us_addr_type2", "UsStreet", 
    ["UsCity", "UsState", "UsZipcode"], "Us");
const US_ADDR_TYPE3 = new AggregationType("us_addr_type3", "UsIsMilitaryInstallation", 
    ["UsMilitaryInstallationName", "UsCity", "UsState", "UsZipcode"], "Us");
const FOREIGN_ADDR_TYPE1 = new AggregationType("foreign_addr_type1", "NonUsStreet",
    ["NonUsCity", "NonUsCountry", "NonUsIsUsgFacility", "NonUsUsgFacilityName", "NonUsUsgFacilityPostcode"], "Foreign");
const FOREIGN_ADDR_TYPE2 = new AggregationType("foreign_addr_type2", "NonUsStreet",
    ["NonUsCity", "NonUsCountry"], "Foreign");
const FOREIGN_ADDR_TYPE3 = new AggregationType("foreign_addr_type3", "NonUsUsgFacilityPostcode",
    ["NonUsCity", "NonUsCountry", "NonUsIsUsgFacility", "NonUsUsgFacilityName"], "Foreign");

// order matters... earlier aggregation types take precedence over later ones
const AGGREGATIONS = [US_ADDR_TYPE1, US_ADDR_TYPE2, US_ADDR_TYPE3, FOREIGN_ADDR_TYPE1, FOREIGN_ADDR_TYPE2, FOREIGN_ADDR_TYPE3];
const AGGREGATION_NAMES = new Set(AGGREGATIONS.map(ag => ag.name));

const US_STREET_SUFFIX = "UsStreet";

function findAggregations(contextSchema) {
    const output = {};
    for (const aggregationType of AGGREGATIONS) {
        const propKeys = new Set(Object.keys(contextSchema.properties));
        const matchingPrefixes = aggregationType.testKeys(propKeys);
        for (const prefix of matchingPrefixes) {
            const aggregationName = aggregationType.name;
            const origKeys = aggregationType.getPropertyNames(prefix);
            const aggregatedPropName = aggregationType.getAggregatedPropName(prefix);
            for (const propName of origKeys) {
                delete contextSchema.properties[propName];
            }
            contextSchema.properties[aggregatedPropName] = {
                "value": {
                    "$ref": "#/$defs/" + aggregationName
                }
            };
            console.debug("Found aggregation prefix=%s aggregation=%s", prefix, aggregationName);
        }
    }

    return output;
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
            let prop = generateSimpleProperty(q, dropdownValues);
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

    findAggregations(schemaContext);
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
    output["$defs"] = commonDefs;
    console.groupEnd();

    for (const rawSection of questionsBySection.keys()) {

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