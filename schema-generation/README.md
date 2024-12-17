This directory contains the data and code that will be used to programatically generate the JSON schema.

The general approach is that:

- The Word documents get saved as HTML in word
- Minor adjustments are made to the Word docs to enable parsing (i.e. change
file encoding to UTF-8, add a script tag to load the parsing script)
- The HTML are parsed by opening the pages in a web browser, and the resulting JSON saved to the "-raw.json" files in the
data directory.
- The resulting raw JSON is hand edited to fix issues the JS parser couldn't handle, and add other information 
needed for the schema, like JSON identifiers for the  sections and questions. This cleaned JSON is saved to 
the "-clean.json" files.
- Python code takes the clean JSON and generates our desired schema format.