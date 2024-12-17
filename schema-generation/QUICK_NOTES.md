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

# TSV parsing notes (Fri 12/13)

I just added support for special parsing of "I don't know" checkboxes. In retrospect this is a mistake,
they aren't that common, and there are other similar checkboxes like "Not applicable" that don't get special 
handling (both likely should permit empty text fields during validation, so similar usage). I need to back
that out and treat them like other checkboxes.

However, I should add special support for boolean fields.

Also, add the dropdown list column, and auto populate for some of the most common cases (state,
country, email type, phone type, agency).

Also, need to get part B working again.