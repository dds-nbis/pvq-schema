# PVQ JSON Schema Guide

The PVQ JSON schemas define the JSON format for saving applicant responses to the US Personnel
Vetting Questionnaire. There are three variants of the PVQ JSON schema, containing different sets of
questions, based on the type of position the applicant is seeking: one for low risk positions, one
for public trust positions, and one for national security positions. The type of position this PVQ
is for is recorded in the top-level `subjectType` JSON attribute, which must have one of these values:

- `NATIONAL_SECURITY`
- `PUBLIC_TRUST`
- `LOW_RISK`

The bulk of the JSON content consists of the responses to the PVQ questions, which are organized into
top-level JSON properties corresponding to the sections of the PVQ form.  For example, the `generalInformation`
property contains the responses to questions in section 1 of the PVQ, "General Information." The full list of
section property names, in section order, is:

- `generalInformation`
- `usPassport`
- `usCitizenship`
- `additionalCitizenships`
- `residences`
- `education`
- `employment`
- `otherFederalEmployment`
- `usUniformedService`
- `peopleWhoKnowYouWell`
- `policeRecord`
- `drugActivity`
- `cannabisUse`
- `usVettingInvestigations`
- `federalDebt`
- `itSystems`
- `handlingProtectedInformation`
- `associations`
- `alcoholUse`
- `relationshipStatus`
- `relatives`
- `foreignTravel`
- `financialRecord`
- `civilCourtActions`
- `foreignContacts`
- `foreignFinancialInterests`
- `mentalHealth`
- `criminalConvictions`

## Question responses

Here are the key things to know about how question responses are represented in the PVQ JSON schema:

- All question responses are represented by a JSON object with a `value` property that holds the main value for that question.
- If the question has any checkboxes associated with it, the response object will have an optional boolean property for each one
- There are 5 possible data types for the main value, depending on the question:
  - A string
  - An array of strings
  - A phone number object (a structured object with fields like `number`, `extension` and `timeOfDay`)
  - An array of phone number objects
  - No value (for questions that consist only of checkboxes)
- Many parts of the PVQ allow the user to repeat a block of questions multiple times, once for each instance of an activity they
  should report. These repeated groups of questions are represented as an array of objects.
  - These subobjects themselves can contain arrays of objects, if the PVQ repetition logic is nested.
  - For example, the education section asks users to report all schools you've attended in the last 5 years, and for each school, asks you
    to report all the physical campus locations you attended.
  - The schema models this using a `schools` property within the education section whose value is an array of objects. Each school object
    has a `physicalAddresses` property whose value is also an array of objects. Each of those objects has properties like `addressUsStreet`
    and `addressUsCity` to model the various attributes of an address.
- The schema currently has very little support for validating the presence or absence of required questions- the majority of questions
  within each section are considered optional, with the exceptions being those that don't have any conditional display logic defined at all
  within the PVQ content guide. Future releases of the schema may add more advanced support for validating the presence of questions that are
  required based on responses to previous questions.
- The schema does not permit `null` anywhere.

## Question response examples

### String values

The first question in the PVQ asks for your last name. Here's what the JSON schema for that response looks like:

```json
{
  "type": "object",
  "properties": {
    "value": {
      "type": "string",
      "maxLength": 255
    },
    "_qId": {
      "$ref": "#/$defs/debug_question_id"
    },
    "lettersOnly": {
      "type": "boolean"
    }
  },
  "additionalProperties": false,
  "title": "Question a-1-170c53-0",
  "description": "Question text: Last Name\nData type: text\nQuestion ID: a-1-170c53-0",
  "required": [
    "value"
  ]
}
```

The main value for this question must be a string with max length 255. The question also has one
associated boolean checkbox property, called `lettersOnly`, corresponding to the "Letters only"
checkbox for this question in the PVQ form. Boolean checkbox properties like this are optional- data
consumers should treat missing checkbox properties as if their value is `false`. The third property,
`_qId` is optional and can be ignored- it exists to allow sample values to be clearly tied to PVQ
questions in the JSON schema's sample data.

Here's an example of what a question response matching this subschema would look like:

```json
{
    "value": "Smith",
    "lettersOnly": false
}
```

And here's the same value, in the context of the overall PVQ JSON document:

```json
{
    "subjectType": "NATIONAL_SECURITY",
    "generalInformation": {
        "lastName": {
            "value": "Smith",
            "lettersOnly": false
        }
    }
}
```

### String array values

Section 4 of the PVQ asks if the applicant has any additional citizenships, letting them select zero or more from a dropdown list of countries. Questions that let you select multiple values from a list have their values represented as arrays of strings in the schema. Here's an example of what a response to that question looks like in JSON:

```json
{
  "value": ["AUS", "NZL"]
}
```

Section 27 of the PVQ asks about the citizenships of foreign nationals you have business ventures with. That question both lets you select multiple values from a dropdown list, and includes an "I don't know" checkbox. Here's what a response to that question might look like if the applicant check "I don't know":

```json
{
  "value": [],
  "dontKnow": true
}
```

### Phone number values

When entering phone numbers in the PVQ, the form asks you to to include additional context about the number, such as what type of phone it is and whether the best time to call it is day or night. The JSON schema represents phone numbers as as specialized JSON object with these properties. Here's an example of what a response to a question asking for a single phone number looks like:

```json
{
  "value": {
    "countryCode": "1",
    "number": "202-555-1234",
    "extension": "831",
    "timeOfDay": "Night",
    "type": "Cell",
    "isDsn": false
  }
}
```

Some questions allow you to enter multiple phone numbers. Those get represented as an array of phone number objects, like this:

```json
{
  "value": [
    {
      "countryCode": "1",
      "number": "202-555-1234",
      "extension": "831",
      "timeOfDay": "Night",
      "type": "Cell",
      "isDsn": false
    },
    {
      "countryCode": "1",
      "number": "202-666-1234",
      "extension": "",
      "timeOfDay": "Day",
      "type": "Home",
      "isDsn": false
    }
  ]
}
```

### Checkbox only values

Some questions only consist of checkboxes, without a main value. Response objects for these questions can optionally omit the `value` property. If the `value`
property is included, it must be the empty string.

For example, many parts of the PVQ ask the applicant to enter an address, but allow the applicant to check "I don't know" if they don't know it. The various parts of the address, like the street address and city name, are broken out into individual questions in the PVQ and in this schema, so the "I don't know" checkbox is represented as its own question, since it applies to all the address fields, not just one of them. As such, that question consists only of a single checkbox. Here's
how a response to it would be represented in JSON if the optional `value` property is omitted:

```json
{
  "dontKnow": true
}
```

If the `value` property is included, the response would look like this:

```json
{
  "value": "",
  "dontKnow": true
}
```

### Emails and dates

Several common data types are modeled in the schema as strings that are validated against a regular expression. Email addresses, in particular, must be formatted
as "TYPE: ADDRESS", where `TYPE` is one of the following values:

- `PERSONAL`
- `WORK`
- `UNKNOWN`

The `ADDRESS` portion should be a standard email address. For example, this would be a valid complete response object for a question asking for a single email address:

```json
{
  "value": "PERSONAL: john.smith@gmail.com"
}
```

For date questions, the value will be validated to match the format "YYYY-MM-DD". Questions asking for months must use the format "YYYY-MM" and year questions must use format "YYYY".

### Addresses

When they PVQ asks the applicant to provide an address, they are usually given the choice of a US address or a foreign one. Both address types are represented 
throughout as a set of questions for the various address components like street address, city, state, and military facility information. The PVQ JSON schema
follows a consistent naming convention for these fields, using a consistent suffix for each address component. Here are the suffixes for the components of
a US address (with an asterisk representing a variable prefix):

- `*UsStreet` (the street address, including the number and street name)
- `*UsCity` (the city name)
- `*UsState` (the US state or territory, given as a two letter postal code abbreviation, like `MD` for Maryland)
- `*UsZipcode` (the zipcode)
- `*UsIsMilitaryInstallation` (a yes/no question indicating if the address is on a US military installation)
- `*UsMilitaryInstallationName` (the name of the military installation the address is on, if any)

For example, here are the JSON property names used in section 5 (Residences) for the address of a residence in the US:

- `addressUsStreet`
- `addressUsCity`
- `addressUsState`
- `addressUsZipcode`
- `addressUsIsMilitaryInstallation`
- `addressUsMilitaryInstallationName`

Foreign addresses are also represented by a group of fields with consistent suffixes for the address components:

- `*NonUsCity` (the city name)
- `*NonUsCountry` (the country, as a 3 letter GENC country code, such as "CAN" for Canada)
- `*NonUsIsUsgFacility` (a yes/no question indicating if the address is on a US government facility abroad, such as diplomatic facilities or military bases)
- `*NonUsUsgFacilityName` (the name of the US government facility, if any)
- `*NonUsUsgUsgFacilityPostcode` (the APO/FPO/DPO/Zipcode of the US government facility abroad, if any)

For example, here are the address property names for a non-US residence in section 5:

- `addressNonUsCity`
- `addressNonUsCountry`
- `addressNonUsIsUsgFacility`
- `addressNonUsUsgFacilityName`
- `addressNonUsUsgFacilityPostcode`

Before entering either a US address or a foreign address, the PVQ typically asks which type of address it is using a yes/no question. The JSON properties for these questions typically end with `IsUs` (for example, `addressIsUs`).
