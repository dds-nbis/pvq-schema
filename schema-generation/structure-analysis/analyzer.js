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

function coalesce(s, defaultValue) {
    if (s == null || s.trim().length == 0) {
        return defaultValue;
    } else {
        return s;
    }
}

const sectionMappings = {
    "1": "generalInformation",
    "2": "usPassport",
    "3": "usCitizenship",
    "4": "additionalCitizenships",
    "5": "residences",
    "6": "education",
    "7": "employment",
    "8": "otherFederalEmployment",
    "9": "usUniformedService",
    "10": "peopleWhoKnowYouWell",
    "11": "policeRecord",
    "12": "drugActivity",
    "13": "marijuanaUse",
    "14": "federalPersonnelInvestigations",
    "15": "federalDebt",
    "16": "itSystems",
    "17": "handlingProtectedInformation",
    "18": "assocations",
    "19": "alcoholUse",
    "20": "relationshipStatus",
    "21": "relatives",
    "22": "foreignTravel",
    "23": "financialRecord",
    "24": "civilCourtActions",
    "25": "foreignContacts",
    "26": "foreignFinancialInterests",
    "27": "foreignBusinessAffairs",
    "28": "psychologicalHealth",
    "29": "criminalConvictions"
};

function parseSection(rawSection) {
    const firstWord = rawSection.split(" ")[0].trim();
    if (firstWord.length == 0) {
        return "UNKNOWN";
    } else {
        const normalized = Number(firstWord).toString();
        const alias = sectionMappings[normalized];
        return alias ? alias : "UNKNOWN";
    }
}

function recursiveSet(context, path, value) {
    const parts = path.split('.');
    const key = parts[0];

    if (parts.length === 1) {
        context[key] = value;
        return;
    }

    if (!context[key] || typeof context[key] !== 'object') {
        context[key] = {};
    }

    recursiveSet(context[key], parts.slice(1).join('.'), value);
}

function parseRow(row) {
    row = row.map(s => s.trim());
    const section = parseSection(row[1]);
    const rawCheckboxes = coalesce(row[6], null);
    const checkboxes = rawCheckboxes == null ? [] : rawCheckboxes.split("|").map(s => s.trim());
    const dropdownList = coalesce(row[7], null);
    const repetitionGroup = coalesce(row[10]);
    const propertyName = coalesce(row[11], "");

    return {
        "part": row[0],
        "section": section,
        "questionText": row[4],
        "dataType": row[5],
        "checkboxes": checkboxes,
        "dropdownList": dropdownList,
        "repetitionGroup": repetitionGroup,
        "propertyName": propertyName
    };
}

function parseStructure(rawCsv) {
    const parsed = {};
    parseCSV(rawCsv)
        .slice(1)
        .map(parseRow)
        .filter(row => row.propertyName != "")
        .forEach(row => {
            const section = row.section;
            if (section in questionsBySection) {
                questionsBySection[section].push(row);
            } else {
                questionsBySection[section] = [row];
            }
        });
    return questionsBySection;
}

document.getElementById('fileInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const text = e.target.result;
        const parsed = parseStructure(text);
        console.debug("Parsed: %o", parsed);
    };

    reader.readAsText(file);
});