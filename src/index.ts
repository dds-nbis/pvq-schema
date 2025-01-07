import { Static, Type } from "@sinclair/typebox";

/**
 * Dates are expected to be in ISO8601 format yyyy-mm-dd
 * e.g. 1985-06-12
 */
type Date = string

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
//     | Type.Literal("Jr.")
//     | Type.Literal("Sr.")
//     | Type.Literal("II")
//     | Type.Literal("III")
//     | Type.Literal("IV")
//     | Type.Literal("V")
//     | Type.Literal("VI")
//     | Type.Literal("VII")
//     | Type.Literal("VIII")
//     | Type.Literal("IX")
//     | Type.Literal("X")
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
    Type.Literal("cell"),
    Type.Literal("home"),
    Type.Literal("work"),
  ]),
  callTimePreference: Type.Union([
    Type.Literal("day"),
    Type.Literal("night"),
    Type.Literal("both")
  ])
})

export const EmailAddress = Type.Object({
  email: Type.String(),
  type: Type.Union([Type.Literal('personal'), Type.Literal('work')])
})

export const USCitizenshipStatus = Type.Union([
  Type.Literal("citizenByBirth"),
  Type.Literal("citizenByBirthBornToParentsInForeignCountry"),
  Type.Literal('naturalizedCitizen'),
  Type.Literal("derivedCitizen"),
  Type.Literal("notACitizen"),
  Type.Literal("nationalByBirth"),
  Type.Literal("nationalByBirthBornToParentsInForeignCountry"),
])

export const Name = Type.Object({
  text: Type.String(),
  lettersOnly: Type.Boolean()
})

const Suffix = Type.Object({
  text: Type.Union([
    Type.Literal("X"),
    Type.Literal("IX"),
    Type.Literal("VIII"),
    Type.Literal("VII"),
    Type.Literal("VI"),
    Type.Literal("IV"),
    Type.Literal("V"),
    Type.Literal("III"),
    Type.Literal("II"),
    Type.Literal("Sr."),
    Type.Literal("Jr."),
    Type.Literal("Other")
  ]),
  explanation: Type.Optional(Type.String())
})

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
})

export const PlaceOfBirth = Type.Object({
  bornInUsa: Type.Boolean(),
  city: Type.String(),
  country: Type.Optional(Type.String()),
  stateOrTerritory: Type.Optional(Type.String()),
  county: Type.Optional(Type.String())
})

export const SSN = Type.Object({
  ssn: Type.Optional(Type.String()),
  noSsn: Type.Boolean(),
  noSsnExplanation: Type.String()
})

export const AdditionalName = Type.Object({
  firstName: Name,
  lastName: Name,
  middleName: Type.Optional(Name),
  suffix: Type.Optional(Suffix),
  range: DateRange
})

export const FullName = Type.Object({
  firstName: Name,
  lastName: Name,
  middleName: Type.Optional(Name),
  suffix: Type.Optional(Suffix),
})

export const ContactInformation = Type.Object({
  phoneNumbers: Type.Array(PhoneNumber),
  emailAddresses: Type.Array(EmailAddress)
})

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
})

export const BornAbroadDocument = Type.Union([Type.Literal("FS-240"), Type.Literal("DS-1350"), Type.Literal("FS-545"), Type.Literal("N-560/N-561"), Type.Literal("Other")])

const BornAbroad = Type.Object({
  document: BornAbroadDocument,
  formTitle: Type.Optional(Type.String()),
  serialNumber: Type.Optional(Type.String()),
  serialNumberNotApplicableExplanation: Type.Optional(Type.String()),
  issueDate: Type.Object({
    date: Type.String(),
    estimated: Type.Boolean()
  }),
  issuedInUS: Type.Boolean(),
  issuedInCity: Type.Optional(Type.String()),
  issuedInCountry: Type.Optional(Type.String()),
  name: FullName,
  militaryInstallationName: Type.Optional(Type.Boolean()),
})

export const NaturalizedCitizen = Type.Object({
  alienRegistrationNumber: Type.String(),
  naturalizationCerfiticateNumber: Type.String(),
  issueDate: Type.String(),
  name: FullName,
})

export const DerivedCitizen = Type.Object({
  alienRegistrationNumber: Type.String(),
  permanentResidentCardNumber: Type.String(),
  citizenshipCertificateNumber: Type.Object({
    text: Type.Optional(Type.String()),
    notApplicable: Type.Boolean(),
    notApplicableExplanation: Type.Optional(Type.String())
  }),
  citizenshipCertificateName: FullName,
  issueDate: Type.String()
})

export const ResidenceStatus = Type.Union([Type.Literal('permanentResident'), Type.Literal('asylum/refugee'), Type.Literal('nonimmigrant'), Type.Literal('temporaryProtectedStatus'), Type.Literal('deferredActionForChildhoodArrivals'), Type.Literal('other')])

export const LegalResidencyDocument = Type.Union([Type.Literal("i94"), Type.Literal("visaCard"), Type.Literal("i20"), Type.Literal("ds2019"), Type.Literal("Other")])

export const NonCitizen = Type.Object({
  residenceStatus: ResidenceStatus,
  otherExplanation: Type.Optional(Type.String()),
  dateEnteredUS: Type.Object({
    date: Type.String(),
    estimated: Type.Boolean()
  }),
  whereEnteredUS: Type.Object({
    city: Type.String(),
    stateOrTerritory: Type.String()
  }),
  countriesOfCitizenship: Type.Array(Type.String()),
  alienRegistrationNumber: Type.Object({
    text: Type.Optional(Type.String()),
    notApplicable: Type.Boolean(),
    notApplicableExplanation: Type.Optional(Type.String())
  }),
  employmentAuthorizationCardExpiration: Type.Object({
    date: Type.Optional(Type.String()),
    notApplicable: Type.Boolean(),
    notApplicableExplanation: Type.Optional(Type.String())
  }),
  legalResidency: Type.Object({
    document: Type.Optional(LegalResidencyDocument),
    title: Type.Optional(Type.String()),
    number: Type.Object({
      text: Type.Optional(Type.String()),
      notApplicable: Type.Boolean(),
      notApplicableExplanation: Type.Optional(Type.String())
    }),
    issueDate: Type.String(),
    expirationDate: Type.String(),
    name: FullName
  })
})

export const AdditionalCountryCitizenship = Type.Object({
  country: Type.String(),
  how: Type.String(),
  when: DateRange,
  issuedPassport: Type.Boolean(),
  stillActive: Type.Boolean()
})

export const USAddress = Type.Object({
  street: Type.String(),
  city: Type.String(),
  stateOrTerritory: Type.String(),
  zipCode: Type.String(),
  isMilitaryInstallation: Type.Boolean(),
  militaryInstallationName: Type.String()
})

export const NonUsAddress = Type.Object({
  physicalAddress: Type.String(),
  city: Type.String(),
  country: Type.String(),
  isMilitaryInstallation: Type.Boolean(),
  militaryInstallation: Type.Object({
    name: Type.Object({
      text: Type.Optional(Type.String()),
      notApplicable: Type.Boolean(),
      notApplicableExplanation: Type.Optional(Type.String())
    }),
    zipCode: Type.String()
  })
})

export const TemporaryLivingPurpose = Type.Union([
  Type.Literal('extendedTravel'),
  Type.Literal('business'),
  Type.Literal('school'),
  Type.Literal('militaryTraining'),
  Type.Literal('militaryDeployment'),
  Type.Literal('other')
])

export const Residence = Type.Object({
  inUs: Type.Boolean(),
  address: Type.Union([USAddress, NonUsAddress]),
  dateRange: DateRange,
  temporaryAddressOver90Days: Type.Boolean(),
  temporaryLivingPurpose: TemporaryLivingPurpose,
  temporaryLivingPurposeExplanation: Type.Optional(Type.String())
})

export const Frequency = Type.Union([
  Type.Literal('daily'),
  Type.Literal('weekly'),
  Type.Literal('monthly'),
  Type.Literal('quarterly'),
  Type.Literal('annually'),
  Type.Literal('other')
])

export const PersonWhoKnowsYou = Type.Object({
  name: FullName,
  whenKnown: DateRange,
  contactFrequency: Frequency,
  contactFrequencyOtherExplanation: Type.Optional(Type.String()),
  currentRelationship: Type.String(),
  phoneNumber: PhoneNumber,
  emailAddress: Type.Array(EmailAddress),
  address: Type.Union([USAddress, NonUsAddress])
})

export const DisiplinaryAction = Type.Object({
  type: Type.String(),
  explanation: Type.String(),
  date: Type.Object({
      date: Type.String(),
      estimated: Type.Boolean(),
  }),
  actionInitiator: FullName,
})
export const FederalEmploymentPeriod = Type.Object({
  dateRange:DateRange,
  disaplinaryAction: Type.Optional(DisiplinaryAction),
})
export const OtherFederalEmployment = Type.Object({
  agency: Type.String(),
  employmentPeriods: Type.Array(FederalEmploymentPeriod),
})
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
    bornAbroad: Type.Optional(BornAbroad),
    naturalizedCitizen: Type.Optional(NaturalizedCitizen),
    derivedCitizen: Type.Optional(DerivedCitizen),
    nonCitizen: Type.Optional(NonCitizen)
  }),
  // Section 04
  additionalCitizenships: Type.Object({
    citizenOfAnotherCountry: Type.Boolean(),
    countries: Type.Array(AdditionalCountryCitizenship),
  }),
  // Section 05
  residences: Type.Array(Residence),
  // Section 06
  education: Type.Object({}),
  // Section 07
  employment: Type.Object({}),
  // Section 08
  otherFederalEmployment: Type.Array(OtherFederalEmployment),
  // Section 09
  usMilitary: Type.Object({}),
  // Section 10
  peopleWhoKnowYouWell: Type.Array(PersonWhoKnowsYou),
  policeRecord: Type.Object({}),
  drugActivity: Type.Object({}),
  marijuana: Type.Object({}),
  priorInvestigations: Type.Object({}),
  itSystems: Type.Object({}),
  protectedInformation: Type.Object({}),
  associates: Type.Object({}),
  psychologicalHealth: Type.Object({})
})

export type PVQ = Static<typeof PVQSchema>

export { countries } from "./countries.js"
export { countryCodes } from "./countryCodes.js"
export { statesOrTerritories } from "./statesOrTerritories.js"