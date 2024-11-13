import { Type } from "@sinclair/typebox";
export const suffixOptions = [
    "Jr.",
    "Sr.",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "Other",
];
export const months = [
    "01 - January",
    "02 - February",
    "03 - March",
    "04 - April",
    "05 - May",
    "06 - June",
    "07 - July",
    "08 - August",
    "09 - September",
    "10 - October",
    "11 - November",
    "12 - December",
];
// type Suffix =
//   | {
//     text:
//     | "Jr."
//     | "Sr."
//     | "II"
//     | "III"
//     | "IV"
//     | "V"
//     | "VI"
//     | "VII"
//     | "VIII"
//     | "IX"
//     | "X";
//   }
//   | {
//     text: "Other";
//     explanation: PlainString;
//   };
export const PhoneNumber = Type.Object({
    countryCode: Type.String(),
    number: Type.String(),
    extension: Type.String(),
    type: Type.Union([
        Type.Literal("day"),
        Type.Literal("night"),
        Type.Literal("dayOrNight"),
        Type.Literal("extension"),
        Type.Literal("international"),
        Type.Literal("dsn"),
        Type.Literal("unknown")
    ]),
    location: Type.Union([
        Type.Literal("cell"),
        Type.Literal("home"),
        Type.Literal("work")
    ])
});
export const EmailAddress = Type.Object({
    email: Type.String(),
    type: Type.Union([Type.Literal('personal'), Type.Literal('work')])
});
export const USCitizenshipStatus = Type.Union([
    Type.Literal("citizenByBirth"),
    Type.Literal("citizenByBirthBornToParentsInForeignCountry"),
    Type.Literal('naturalizedCitizen'),
    Type.Literal("derivedCitizen"),
    Type.Literal("notACitizen"),
    Type.Literal("nationalByBirth"),
    Type.Literal("nationalByBirthBornToParentsInForeignCountry"),
]);
export const Name = Type.Object({
    text: Type.String(),
    lettersOnly: Type.Boolean()
});
const Suffix = Type.Object({});
export const DateRange = Type.Object({
    from: Type.Object({
        date: Type.String(),
        estimated: Type.Boolean(),
    }),
    to: Type.Object({
        date: Type.String(),
        estimated: Type.Boolean(),
        present: Type.Boolean(),
    }),
});
export const DateOfBirth = Type.Object({
    date: Type.String(),
    estimated: Type.Boolean(),
    estimatedExplanation: Type.Optional(Type.Boolean())
});
export const PlaceOfBirth = Type.Object({
    bornInUsa: Type.Boolean(),
    city: Type.String(),
    country: Type.Optional(Type.String()),
    stateOrTerritory: Type.Optional(Type.String()),
    county: Type.Optional(Type.String())
});
export const SSN = Type.Object({
    ssn: Type.Optional(Type.String()),
    noSsn: Type.Boolean(),
    noSsnExplanation: Type.String()
});
export const AdditionalName = Type.Object({
    firstName: Name,
    lastName: Name,
    middleName: Type.Optional(Name),
    suffix: Type.Optional(Suffix),
    range: DateRange
});
export const ContactInformation = Type.Object({
    phoneNumbers: Type.Array(PhoneNumber),
    emailAddresses: Type.Array(EmailAddress)
});
export const IdentityDocument = Type.Object({
    hasItem: Type.Union([Type.Literal('yes'), Type.Literal('no'), Type.Literal('dontKnow')]),
    explanation: Type.String(),
    number: Type.String(),
    lastName: Name,
    firstName: Name,
    middleName: Name,
    suffix: Type.Optional(Suffix),
    issueDate: Type.String(),
    expirationDate: Type.String(),
    isMostRecent: Type.Boolean(),
    isMostRecentExplanation: Type.String(),
});
const BornAbroad = Type.Object({});
export const PVQSchema = Type.Object({
    version: Type.Number(),
    // Section 01
    generalInformation: Type.Object({
        lastName: Name,
        firstName: Name,
        middleName: Type.Optional(Name),
        suffix: Type.Optional(Suffix),
        pronouns: Type.Optional(Type.String()),
        dateOfBirth: DateOfBirth,
        placeOfBirth: PlaceOfBirth,
        ssn: SSN,
        hadAdditionalNames: Type.Boolean(),
        additionalNames: Type.Array(AdditionalName),
        contactInformation: ContactInformation
    }),
    // Section 02
    passport: Type.Object({
        book: IdentityDocument,
        card: IdentityDocument
    }),
    // Section 03
    usCitizenship: Type.Object({
        status: USCitizenshipStatus,
        bornAbroad: BornAbroad
    }),
    additionalCitizenships: Type.Object({}),
    otherFederalEmployment: Type.Object({}),
    usMilitary: Type.Object({}),
    policeRecord: Type.Object({}),
    drugActivity: Type.Object({}),
    marijuana: Type.Object({}),
    priorInvestigations: Type.Object({}),
    itSystems: Type.Object({}),
    protectedInformation: Type.Object({}),
    associates: Type.Object({}),
    psychologicalHealth: Type.Object({})
});
export { countries } from "./countries";
export { countryCodes } from "./countryCodes";
export { statesOrTerritories } from "./statesOrTerritories";
