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

Page 36 asks "Who gave you this disciplinary action?" but there's no data type, no name fields. Just an "I don't know checkbox".

Page 37 has a "Please explain" under "What was the outcome for this charge?". The "Please explain" condition is "[4] Branch Auto Populate for U.S. Military Service, Disciplinary Action, Court Martial, Charge Outcome." It isn't clear when the "Please explain" should be displayed. My guess is for an "Other" selection
for the outcome, but this condition, unlike most "Please explain" conditions, doesn't say that.

On page 42, what does the "[2] Branch Auto Populate for any Affirmative Answer to Police Record. Fine Explanation" condition mean? Does 
that question apply whenever the user indicates a fine? 

On page 54, question "When did you get this counseling or treatment?" with type text seems duplicative with the start date and end date questions that follow.
I think the text input should be deleted and the checkbox moved to the "end date" question.

On page 54, "Who is or was your counseling or treatment provider", it has type "text", but there are separate text inputs for the name fields. I think it should
just be the checkbox, with no text input.

On page 56, the "Please explain" in condition "Branch Auto Populate for Affirmative Answer to Voluntary Treatment because of Illegal Drug Use or Misuse of Prescription
Drugs in the Past Five Years. Explanation on who recommended". The condition text probably means to refer to an "Other answer" to the previous question, but
doesn't say that explicitly.

On page 56, question "When did you get this counseling or treatment?" gets its own text box, but
seems duplicative with the "From" and "To" date questions immediately after.

On page 55, after "Did you complete this counseling or treatment?" (for mandatory treatment) there's a "Why was this treatment not completed?" optional question in a conditional
block for indicating that treatment wasn't completed. On page 58 (and end of 57), there's a similar block for voluntary treatment, but the voluntary "Not completed"
condition block doesn't include the "Why was this treatment not completed?" question, but does include the "What is the current status of your counseling or treatment?"
question. I think the second one on 58 is missing a "Why was this treatment not completed?" question.

On page 58, last question is a "Please explain" about cannabis use in a national security position. But the conditional logic is "Branch Auto Populate for Affirmative Answer to Marijuana/Cannabis Derivative Use in the Last 90 Days. Explanation", it doesn't mention your answer to the the use in a national security position question. I think the conditional logic is wrong

On page 47, the condition "Branch Auto Populate for Affirmative Answer to Drug Use/Misused Controlled Substance in the past Five Years. Used While in
National Security Position" should indicate that it requires an affirmative to "Used while in National Security position". Stylistically, the other conditional
headers in this section put the actual condition before the first period, and everything after acts as a subsection heading without conditional implications.
For example, the previous group heading is "Branch Auto Populate for Affirmative Answer to Drug Use/Misused Controlled Substance in the past Five Years. Additional
Details". The "Additional details" text is a description of the group contents, not conditional logic. But the style is inconsistent in this section and the 
interpretation not always clear... I can figure out in this case based on the question text that it should only apply if the applicant answered yes to using
the drug while in a NSP, but that isn't really clear based on the group heading. 

Similarly the first group heading on page 48 is "Branch Auto Populate for Affirmative Answer to Drug Use/Misused Controlled Substance in the past Five Years. Used While Employed in Criminal/Justice Position. Details." Its contents should only apply if the user answered yes to having used in a CJPS position, but the conditional
logic doesn't make that clear, especially when you compare it to the immediately previous heading, "Branch Auto Populate for Affirmative Answer to Drug Use/Misused Controlled Substance in the past Five Years. Used While Employed in Criminal/Justice Position.", which is nearly identical but clearly has different conditional logic.

The word "accidently" is a misspelling on pages 48 and 48 (should be "accidentally")

On page 59, the heading "Branch Auto Populate for Affirmative Answer to Marijuana/Cannabis Derivative Use in the Last 90 Days. While in National
Security Position. Dates, Frequency, Circumstances." is likely incorrect. Based on the preceding question, the group content, and the symmetry with
the next heading for CJPS positions, I think this group heading is supposed to read "Branch Auto Populate for Affirmative Answer to Marijuana/Cannabis Derivative Use While Employed in National Security Position Not Already listed. Dates, Frequency, Circumstances. Another Instance to Report". In other words, I think
these questions apply if the user indicated they they've used cannabis in NS position prior to the last 90 days (the conditional header as is refers to use
in the last 90 days).

On page 62, this question and its condition are self-referential:

> "Did you illegally manufacture, cultivate, traffic,
produce, transfer, ship, receive, or sell marijuana
or a cannabis derivative while employed in a
criminal justice or public safety position? ("While
employed" does not necessarily mean your use was
"on the clock” or “on duty".

The condition is "Branch Auto Populate for Affirmative Answer to involved in the Illegal Manufacture, Cultivation, Trafficking, etc. in Past Five
Years. While in a Criminal Justice/Public Safety Position". But there is no previous question asking if the applicant trafficked while in a CJPS position...
that's what this question is asking (though the question text doesn't reference five years). I think this question should be unconditional, and serve as
the condition for the next group.

On page 62, I think question "Please explain. (Include when and how many times you illegally manufactured, cultivated, trafficked, produced, transferred, shipped, received, or sold this drug or controlled substance while in a national security position.)" is supposed to be one question higher. The repetition end trigger
for trafficking in a national security position is one question higher. You wouldn't want to ask this after asking "Do you have another instance...". This is
an explain question for the question two questions up.

On page 74, the 5th group heading seems wrong. It says "Branch Auto Populate Illegally or without Proper Authorization, Modified, Destroyed or Manipulated information on IT System Past Five Years. Change Or Destroy, Successful, Frequency Attempts." but that seems duplicative with the two questions above. Based on the question text
(which says "How many times did you try to...") I think this is supposed to be asked if user indicated that the attempts were unsuccessful. Likewise for the next 
heading (" Branch Auto Populate Illegally or without Proper Authorization, Modified, Destroyed or Manipulated information on IT System
Past Five Years. Change Or Destroy, Successful, Attempts Other."), whose logic should likely match this one.

On page 72, 74, 76 and 78, 80 and 82, there are 3 questions about disciplinary actions received for improper IT activities: what actions were received, an explanation for choosing "Other" and a details text box. The order of these questions is inconsistent. Throughout the rest of the form, the "Please explain" for an "Other" selection comes immediately after the question where they choose other, but here, sometimes the details question comes after, sometimes the "other explanation" question.

On page 92, a repetition group start question seems to be incomplete or at least unclear:

- Have you ever planned, contributed to, attempted, or carried out an unlawful act of force or violence targeted at a person, group of people, or property?  If yes, explain (complete the additional details section), including:

There's nothing appropriate following the "including:"- no bulleted list, prose list, or formatting indication of when the "including:" content stops. I think some text
is missing there.

On page 92, it's also not clear how the conditional logic for this heading should work:

- [2] Branch Auto Populate Affirmative Answer to Planned, Contributed, Attempted or Carried out Unlawful Act of Force or Violence Targeted at Person, Group, or Property. Details

There's a repetition trigger at the end that suggests that these questions should only be answered if the user indicated that they targetted someone based on 
their race, color, religion, etc. But that's not what the heading says... as written, the heading seems to indicate that these questions apply if the applicant
targetted any person, group or property. 

The repetition logic around pages 92-94 (section 18, questions about engaging in violence against people or property) is unclear and likely duplicative. There's
a repetition trigger for targetting individuals, one for targetting government officials, and one for targetting property. These are:

- Do you have another instance in which you targeted an individual or individuals based on their race, color, religion, sex (including pregnancy, sexual orientation, or gender identity), national origin, age, disability, or genetic information?
- Do you have another instance in which you targeted an official of the United States Government or the Government of a State, local, or tribal government of the United States?
- Do you have another instance in which you targeted property of the United States Government or the Government of a State, local or tribal government of the United States?

The triggers for individuals and government officials are likely duplicative. To me, the simplest solution is to have one repetition trigger for the entire
group of questions started by this:
- Have you ever planned, contributed to, attempted, or carried out an unlawful act of force or violence targeted at a person, group of people, or property?  If yes, explain (complete the additional details section), including:

And then get rid of the three subcategory repetition triggers.

On page 93, regarding this question:

- Was the target property of the United States Government or the government of a State, local or tribal government of the United States?

As written, there are no questions to answer if the applicant used violence against non-government property. Is this intended?

The conditional logic in this subsection (violence against individuals, groups or property) is confusing and not clearly indicated by the headings,
but I think I figured it out. There are four basically independent types of violence they want you to report:

- Against individuals in specific groups
- Against government officials
- Against government property
- Against critical infrastructure

There are questions asking if each incident falls into one of those categories, and you record it under the first category that matches. But should verify this
and improve the conditional logic text.

On page 93, the wording and meaning of this question are unclear:

- Was the targeted property critical infrastructure? (Answer "No" if you listed in the question above.)

I think "if you listed in" should be "if you listed it in". 

## Section B notes

Page 104 (section 19, alcohol stuff):

- Who is or was your counselor or treatment provider?

This question has its own text box, and then separate name text boxes below. I think the text box for this question should be dropped.

Page 107 (section 19, alcohol), for the voluntary treatment questions, there's no final repetition trigger for voluntary treatment, even though
there's a repetition trigger for mandatory treatment here, and in the similar mandatory and voluntary question groups for section 12 (Drugs).

Page 113, heading "[6] Branch Auto Populate Affirmative Answer on Spouse or Partner Lives on a Military Installation." Based on preceding questions,
this should be conditional on the partner living at the same address as you, not in the US, on a military installation.... not just on a military installation in general.

# Section 20 (part B)

- 
  - Heading: [6] Branch Auto Populate Affirmative Answer on Spouse or Partner Lives on a Military Installation.
  - Page: 113
  - Issue: This question group should apply when the partner lives with the user, outside the US, at a USG facility, not just on a military installation.
  - Recommended fix: Change heading to this:
    - [6] Branch Auto Populate Affirmative Answer on Spouse or Partner Living Same Location not in US, on a Military Installation.

- Question: Do you have a former legally-recognized spouse or partner that you have not reported on this form?
  - Page: 116
  - Issue: it's not clear if this is a repetition trigger for the former partner questions, but I believe it is (the SF86 asks you to list all former spouses).
  - Recommendation: Make the wording more consistent with other repetition triggers in the PVQ. Change the wording to this:
    - Do you have another former legally-recognized spouse or partner?


## Section 23 (part B)

In section 23, there are a number of questions about the actions taken. Some of them have type dropdown, some have type text. Of the text type questions,
some have an associated "None" checkbox, while some don't. All are followed by a question asking for an explanation if the user indicated that no actions have been taken.  I think all the "actions taken" questions of type text need a "None" checkbox to indicate clearly to the UI that the "no actions taken" input needs
to be shown. This affects:
- The "actions taken" question regarding foreclosures 
  - "What actions have you taken to pay the lender?", p133
- The "actions taken" question regarding reposessions 
  - "What actions have you taken to pay the lender?", p135

At the end of the non-federal tax nonpayment section on p138, there's a missing repetition trigger for that question group. It would go after the second "Please explain" question in group "Branch Auto Populate Affirmative Answer for Failed to Pay Non-Fed Taxes and Not Paid In Full and Selection of
“Other” on Action Taken." The question text would be something like this:

- Do you have another instance where you failed to pay any non-federal taxes in the past five years? (Examples of non-federal taxes include state and local taxes, property taxes, and personal property taxes.)

# Sections 7 and 20

The vast majority of email questions explicitly state that you can enter more than 1, but two (1 in A-7, p20, one in B-20, p113) don't, and I don't see any reason
for them to be different. Should all email questions allow multiple values?

In A-7, the question "Is this an internship? Were you full-time or part-time?" on p24 has confusing checkbox values of "Yes/No/Full time/Part time". 
- Recommended fix: split this into two questions (Is this an internship? Were you full time or part-time)
- Also, adjust wording of first question to use past tense, i.e. "Was this an internship?"

# Section 11 (part B)

- Heading: for Affirmative Answer to Any of the Police Record Questions Above. Affirmative Answer Court Appearance. Outcome.
  Question: What was the outcome for this charge?
  Page: 101
  Issue: The dropdown values PDF doesn't define a dropdown list for this question. None of the given lists in section 11 seem quite right, I think
  this needs a new one.

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
  - Need to double check date field name style in section 13 (drugs). Need to double check a lot of style consistency there.
    - Referring to national security positition with "Nsp" abbreviation in field names?
    - Likewise, "Cjpsp" for "Criminal justice or public safety position"
    - intent/intent (plus negative form) throughout
    - Repetition logic is messy, needs double checked.
  - Verify that we consistently use "NotKnown" suffix for questions asking if you know some info (as opposed to "IsKnown").
  - Need to check every dropdown for whether it takes single or multiple values. Especially questions about countries/citizenship.
  - Dropdown list name EVICTING_ENTITY could probably be improved.

Note that properties with name "supervisedReleaseFromDate" and "supervisedReleaseToDate" should probably be renamed
"supervisedReleaseStartDate" and "supervisedReleaseEndDate" for stylistic consistency.

Also, "providerUsCity" and "providerUsState" should prob be "providerUsAddressCity" and "providerUsAddressState", and similar, for stylistic consistency.


# Style topics for discussion

How to represent "Yes/No/I dont know" checkbox sets:
  - My preference: treat that like a dropdown (mutually exclusive) with values "Yes", "No", "I don't know"
How to represent "Yes/No" checkbox sets:
  - My preference: for consistency with the above, like a dropdown with values "Yes", "No" (i.e. `value="Yes"`)
