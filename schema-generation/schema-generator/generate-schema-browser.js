const DEBUG = false;

//const APPLICANT_TYPES = ["NATIONAL_SECURITY", "PUBLIC_TRUST", "LOW_RISK"];
const APPLICANT_TYPES = ["NATIONAL_SECURITY"];
//import { parseDropdownValues, generateSchema, readFile } from './schema-generator.js';

async function handleSubmit(event) {

    console.info("Called handleSubmit");
    event.preventDefault();

    const questionCsvInput = document.getElementById('questionCsv');
    const dropdownCsvInput = document.getElementById('dropdownCsv');

    const valuesFile = dropdownCsvInput.files[0];
    const vContent = await readFile(valuesFile);
    const dropdownValues = parseDropdownValues(vContent);

    const questionsFile = questionCsvInput.files[0];
    const qContent = await readFile(questionsFile);
    globalThis.pvqSchemas = {};
    globalThis.pvqSamples = {};
    for (const type of APPLICANT_TYPES) {
        const [schema, sampleDoc] = generateSchema(qContent, type, dropdownValues);
        globalThis.pvqSchemas[type] = schema;
        globalThis.pvqSamples[type] = sampleDoc;
        console.info("Generated schema for applicant type: %s", type);
    }

    console.info("Saved generated schemas to %cpvqSchemas", "color: blue");
    console.info("To copy the NATIONAL_SECURITY schema JSON to your clipboard, run %ccopy(JSON.stringify(pvqSchemas.NATIONAL_SECURITY, null, 2))", "color: blue")
    console.info("To copy the NATIONAL_SECURITY sample JSON to your clipboard, run %ccopy(JSON.stringify(pvqSamples.NATIONAL_SECURITY, null, 2))", "color: blue")
}

function onLoad() {
    document.getElementById('schemaForm').addEventListener('submit', handleSubmit);
}

document.addEventListener('DOMContentLoaded', onLoad);

// End code for browser-based execution

