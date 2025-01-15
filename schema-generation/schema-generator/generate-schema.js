const fs = require('fs');
const path = require('path');
const { parseDropdownValues, generateSchema } = require('./schema-generator');

function readFileSync(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}

async function main() {
    const args = process.argv.slice(2);
    if (args.length > 1) {
        console.error("Usage: node generate-schema.js <output_directory>");
        process.exit(1);
    }

    const [outputDir] = args;

    console.info("Reading dropdown values");
    const dropdownCsv = readFileSync("/schema-generation/schema-generator/dropdown_values.csv");
    console.info("Parsing dropdown values");
    const dropdownValues = parseDropdownValues(dropdownCsv);

    console.info("Reading questions CSV");
    const questionsCsv = readFileSync("/schema-generation/schema-generator/pvq-questions.csv");

    const APPLICANT_TYPES = ["NATIONAL_SECURITY"]; // Adjust as needed

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    for (const type of APPLICANT_TYPES) {
        const [schema, sampleDoc] = generateSchema(questionsCsv, type, dropdownValues);

        const schemaFilePath = path.join(outputDir, `${type}_schema.json`);
        const sampleFilePath = path.join(outputDir, `${type}_sample.json`);

        fs.writeFileSync(schemaFilePath, JSON.stringify(schema, null, 2));
        fs.writeFileSync(sampleFilePath, JSON.stringify(sampleDoc, null, 2));

        console.info(`Generated files for ${type}:`);
        console.info(`  Schema: ${schemaFilePath}`);
        console.info(`  Sample: ${sampleFilePath}`);
    }
}

main().catch(err => {
    console.error("Error running script:", err);
    process.exit(1);
});