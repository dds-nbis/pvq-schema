Is there a missing conditional header on page 19? To mark off address entry for military stations
not in US. Currently It looks like the US military station and non-US military stations are in the same conditional
grouping.
# same thing
At the top of page 20, there's a "Country" dropdown for the country in which a military duty station is located. But the conditional display heading for that question says "[2] Branch Auto Populate for Employment Type Military, U.S. Military Station in the U.S.", meaning that we should already know that this duty station is in the US. In addition, it's not clear to me why the city needs to be provided again, given that the city was provided immediately above for the duty station mailing address.

On page 5, I think the text "What is your mother’s name at birth?" might be clearer as "What was your mother’s name at birth?" Also, it's not totally clear whether the question means at her birth or yours.

On page 8, condition "Citizen Born Abroad Biographical Data on Document" ... is this actually a condition? Also condition "Branch Auto Populate Explanation for “Other” Form for U.S. Citizen Born Abroad Selection in Dropdown Menu. Title of
Form." on the same page.

On page 16, for schools not in the U.S. with a different physical location, there's a question with text "Please provide physical address (not mailing address)". It's not clear what a "physical address" means. I think it means a street address, but other address questions in this form use the term "Street" for the street address portion, so it's not clear if this is different.

In the top half of page 23, there's a yellow conditional display heading with the text "[4] Branch Auto Populate for Employment Type Selection of Other Federal Employment, Federal Contractor, State Government Employment or Non-government Employment. Address in U.S." The context around that heading though seems to indicate that those questions are for a military installation outside of the U.S. (i.e. I think the yellow heading is wrong).

In section 7, there's a question "What is this supervisor's email address?". It seems to take a single email address, but every similar prompt for a person's
email allows multiple. Can we allow multiple here for consistency?

In part B, on pages 106, 113, 114, there are "Addr + Type" data types. For consistency with part A, can they be "Address + Type"?

On page six, under additional names, the suffix field is a dropdown, but also has a "None" checkbox. "None" is already one of the options in the dropdown list.

Bottom of page 40, incorrect hyphens following the words "Domestic violence"

There are 3 types of employment, and all 3 types ask at the end "Do you have another employment
activity to report?" (for example, on page 28). Seems simpler to just ask that
 once... users will
fill these out in chronological order, not all self-employment, then all standard employment.

On page 34, the question "Who gave you this disciplinary action?" has a "Text" type, but its duplicative with the explicit name
fields just below. That question should be deleted, just use the specific name field questions.

Page 34 asks both
- Do you have another period of federal employment with this federal agency to report?
- Do you have another period of federal employment to report?
Immediate after each other. It's not clear how the repetition logic would differ for these questions. I think the first question
could be omitted, just use the second question. If that won't work, need to know if there's any behavioral difference between the
two.

# TSV parsing notes (Mon 12/16)

## LLM prompt

This document contains a list of questions that applicants will be asked to obtain a job with the US federal government. The list of questions together is called the Personnel Vetting Questionaire, or PVQ. The most important columns are "Section", which indicates which section of the PVQ the question occurs in, "Question text", which indicates the text of the question, and "Condition", which indicates under what conditions the question should be displayed (some questions are only asked if the user gave a particular answer to a previous question).

Here's a description of some of the columns:

- "Section" - the name of the PVQ section this question appears in
- "Question text" - the text of the question
- "Condition" - the condition under which the question should be displayed (some questions should only be displayed if the applicant provided a particular answer to a previous question)
- "Data type" - the type of data the response should contain, and a hint for how to display the question to the applicant.
- "Parser ID" - a unique ID for the question

I need define a JSON format for storing an applicant's responses to these questions. For each question, I need to choose a JSON property name that the response will be saved in. I've recorded some JSON property names in the "Schema ID" column, but not all questions have property names assigned yet. I'd like you to help generate property names for some of the remaining properties.

Here are some style rules for generating property names:

- The property names should use camel case naming style. For example, "firstName" or "dateOfBirth".
- Many questions ask the user to enter an address, and the address could be in the US or outside of the US. For example, one set of questions ask for the address of a school the applicant attended. When asking for US addresses, the applicant is usually asked separately for the street address, the city, the state or province, and the zipcode.Street address properties for US addresses should end in "UsAddressStreetAddress". State or province properties for US addresses should in in "UsAddressState". And the city and zipcode properties should end in "UsAddressCity" and "UsAddressZipcode". 

For addresses outside the US, these questions typically ask for a city and country, and sometimes a street address. Non-US city properties should end in "NonUsCity" and non-US country properties should end in "NonUsCountry". Similarly, non-US street addresses should end in "NonUsStreetAddress". If a question asks for zipcode or postcode for a non-US address, it should end in "NonUsZipcode". You can generally determine if an address question is for a US or non-US address from the condition value. 

Given these rules, please generate JSON property names for each question in section 7 ("Employment Activites"). For each question, emit the question's "Parser ID" value and the JSON property name. Format the output as CSV.



LLM thoughts:
  - Let's do the repetition groups first, knowing that a field is part of a repetition group influences
    what field name to use.
  - Repetition group names should be plural
  - Repetition group triggers should have schema ID "IGNORE"

Style notes:
  - State or territory should just be "State" in the property name
  - Zipcode is "Zipcode" (not "Zipcode") in the property name
  - Zipcode/postcode outside of US is "Postcode" in the property name
  - Many repeating parts have one of several types. For example, employment entries can be military, standard or self-employment.
    Could model those as 3 different arrays, or 1 array with the union of all the properties. 1 array is easier. But need to check
    what I did for the previous sections. There are other situations like this, like US/non-US addresses, and I just do unions, it's
    the simplest and most predictable approach.
  - Questions of type boolean, where the question text starts with "Is", should have property names that start with "is"
  - Sometimes there's a boolean question that triggers a repeating block. I've been saying to ignore that question in the schema, and just
    use the array. That means that the initial boolean trigger question, and the final "Do you have any additional X to report?" question
    both should be ignored. The info is embedded in the array.

