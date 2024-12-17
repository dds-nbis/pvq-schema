The PVQ documentation parser runs as Javascript inside the HTML version
of the PVQ word docs. It saves the parsing output to the `parsedSections 
JS global variable, whose JSON you can then copy to the clipboard by
running

```
copy(JSON.stringify(parsedSections, null, 2))
```

in the browser's JS console (this command is also logged at the bottom
of the parser's console output for convenience).

The parser output is organized into sections, which are organized into
question groups, which are organized into questions. The output structure
looks something like this:

```json
{
  "section_01": {
    "name": "Section 01 - General Information",
    "groups": [
      {
        "condition": "",
        "questions": [
          {
            "questionId": "n122",
            "text": "Last Name",
            "checkboxes": [
              "Letter(s) Only"
            ],
            "otherChunks": [],
            "dataType": "text"
          },
          {
            "questionId": "n127",
            "text": "First Name",
            "checkboxes": [
              "Letter(s) Only"
            ],
            "otherChunks": [],
            "dataType": "text"
          }
          {
            "questionId": "n137",
            "text": "Suffix",
            "checkboxes": [],
            "otherChunks": [],
            "dataType": "dropdown"
          }
        ]
      }
    ]
  }
}
```

## Overriding questions

The PVQ Word docs weren't intended to be parsed programatically, so the parsing
results are imperfect (for example, question text and question data types are
usually placed in different, adjacent table cells, but in some questions, they
are simply separated by whitespace).

Rather than adding code to the parser to handle every quirk of every question,
the parser allows you to override the parser output for specific questions. This
approach lets us avoid having to add code to the parser for every formatting
quirk in the PVQ documents, while letting us continue iterating on the parser
logic without needing to repeatedly perform manual fixes to the parser output.

This result overriding is done by defining a global `pvqOverrides` variable.
The contents of this variable will vary for the different PVQ documents, so it
is defined in a doc-specific JS file (i.e. `part-a-overrides.js`) that is
loaded via a `<script>` tag in each HTML document before the parser is loaded.
The `pvqOverrides` variable should contain a JSON structure organized first by
section ID, then question ID. It should look similar to this:

```json
{
  "section_02": {
    "n305": [{
      "text": "Have you ever had a U.S. passport book?",
      "datatype": "checkboxes",
      "checkboxes": ["Yes", "No", "I don't know"]
    }]
  }
}
```

The example above indicates that you want to override the contents of
the question with ID `n305` in the section `section_02`. For each question
entry, the override value should be an array of questions that should replace
it. This means that you can cause a quesiton to be deleted by providing an empty
array, or cause it to be replaced by multiple questions by providing multiple entries
in the array.

For each replacement question in the array, the parser will take the original question
and replace the given properties on it. This means that any properties that aren't
defined in the replacement object will retain their value from the original question 
object.