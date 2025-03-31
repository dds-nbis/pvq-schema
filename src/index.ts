import { Static, Type } from "@sinclair/typebox";

/**
 * Dates are expected to be in ISO8601 format yyyy-mm-dd
 * e.g. 1985-06-12
 */
type Date = string

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

export const YesNoDontKnow = Type.Union([
  Type.Literal("yes"),
  Type.Literal("no"),
  Type.Literal("dontKnow")
])

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

export const Name = Type.Union([Type.Object({
  text: Type.String(),
  lettersOnly: Type.Boolean()
}), Type.String()])

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

export const StartDate = Type.Object({
  value: Type.String(),
  estimated: Type.Optional(Type.Boolean()),
})

export const EndDate = Type.Object({
  value: Type.String(),
  estimated: Type.Optional(Type.Boolean()),
  present: Type.Optional(Type.Boolean())
})

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
  suffixOtherExplanation: Type.Optional(Type.String()),
  startDate: StartDate,
  endDate: EndDate,
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
  hasItem: YesNoDontKnow,
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
  startDate: StartDate,
  endDate: EndDate,
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
  startDate: StartDate,
  endDate: EndDate,
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
  firstMetDate: StartDate,
  lastContactDate: EndDate,
  contactFrequency: Frequency,
  contactFrequencyOtherExplanation: Type.Optional(Type.String()),
  currentRelationship: Type.String(),
  phoneNumber: PhoneNumber,
  emailAddress: Type.Array(EmailAddress),
  address: Type.Union([USAddress, NonUsAddress])
})

export const DisciplinaryAction = Type.Object({
  type: Type.String(),
  explanation: Type.String(),
  disciplinaryActionDate: StartDate,
  actionInitiator: FullName,
})
export const FederalEmploymentPeriod = Type.Object({
  startDate: StartDate,
  endDate: EndDate,
  disciplinaryActions: Type.Array(DisciplinaryAction),
})
export const OtherFederalEmployment = Type.Object({
  agency: Type.String(),
  employmentPeriods: Type.Array(FederalEmploymentPeriod),
})

/** Section 6: Education **/

export const PhysicalAddress = Type.Object({
  physicalAddressInUs: Type.Boolean(),
  physicalAddressUsStreet: Type.String(),
  physicalAddressUsCity: Type.String(),
  physicalAddressUsState: Type.String(),
  physicalAddressUsZipcode: Type.String(),
  physicalAddressUsIsMilitaryInstallation: Type.Boolean(),
  physicalAddressUsMilitaryInstallationName: Type.String(),
  physicalAddressNonUsStreet: Type.String(),
  physicalAddressNonUsCity: Type.String(),
  physicalAddressNonUsCountry: Type.String(),
  physicalAddressNonUsIsUsgFacility: Type.Boolean(),
  physicalAddressNonUsUsgFacilityName: Type.Object({
    value: Type.String(),
    notApplicable: Type.Boolean(),
  }),
  physicalAddressNonUsPostCode: Type.String(),
})

export const PreviousSchool = Type.Object({
  schoolName: Type.String(),
  schoolType: Type.String(),
  schoolTypeExplanation: Type.String(),
  learningExperience: Type.String(),
  learningExperienceExplanation: Type.String(),
  fromMonth: StartDate,
  toMonth: EndDate,
  isInUs: Type.Boolean(),
  addressUsStreet: Type.String(),
  addressUsCity: Type.String(),
  addressUsState: Type.String(),
  addressUsZipcode: Type.String(),
  addressNonUsCity: Type.String(),
  addressNonUsCountry: Type.String(),
  degreeType: Type.String(),
  degreeTypeExplanation: Type.String(),
  awardMonth: StartDate,
})

export const SchoolInformation = Type.Object({
  schoolName: Type.String(),
  schoolNoLongerInBusiness: Type.Boolean(),
  schoolType: Type.String(),
  schoolTypeExplanation: Type.String(),
  learningExperience: Type.String(),
  startDate: StartDate,
  endDate: EndDate,
  isSchoolInUs: Type.Boolean(),
  addressUsStreet: Type.String(),
  addressUsCity: Type.String(),
  addressUsState: Type.String(),
  addressUsZipcode: Type.String(),
  addressNonUsCity: Type.String(),
  addressNonUsCountry: Type.String(),
  receivedDegreeOrDiploma: Type.Boolean(),
  degreeType: Type.String(),
  degreeTypeExplanation: Type.String(),
  degreeDate: StartDate,
  differentPhysicalLocation: Type.Boolean(),
  physicalAddresses: Type.Array(PhysicalAddress),
  educationReferenceLastName: Type.String(),
  educationReferenceFirstName: Type.String(),
  educationReferenceMiddleName: Type.Object({
    value: Type.String(),
    dontKnow: Type.Boolean(),
  }),
  educationReferenceSuffix: Type.Optional(Suffix),
  educationReferenceRelationship: Type.String(),
  educationReferenceRelationshipExplanation: Type.String(),
  educationReferencePhone: Type.Object({
    value: Type.String(),
    dontKnow: Type.Boolean(),
  }),
  educationReferenceEmail: Type.Object({
    value: Type.String(),
    dontKnow: Type.Boolean(),
  }),
  educationReferenceInUS: Type.Boolean(),
  educationReferenceUsAddressNotKnown: Type.Boolean(),
  educationReferenceAddressUsStreet: Type.String(),
  educationReferenceAddressUsCity: Type.String(),
  educationReferenceAddressUsState: Type.String(),
  educationReferenceAddressUsZipcode: Type.String(),
  educationReferenceAddressUsIsMilitaryInstallation: YesNoDontKnow,
  educationReferenceAddressUsMilitaryInstallationName: Type.String(),
  educationReferenceAdderssNonUsNotKnown: Type.String(),
  educationReferenceAddressNonUsStreet: Type.String(),
  educationReferenceAddressNonUsCity: Type.String(),
  educationReferenceAddressNonUsCountry: Type.String(),
  educationReferenceAddressNonUsIsUsgFacility: YesNoDontKnow,
  educationReferenceAddressNonUsUsgFacilityName: Type.Object({
    value: Type.String(),
    dontKnow: Type.Boolean(),
  }),
  educationReferenceAddressUsgFacilityPostcode: Type.String(),
})

/* Section 7 Employment Activities */

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
  education: Type.Object({
    haveAttendedSchools: Type.Object({ value: Type.Boolean() }),
    schools: Type.Array(SchoolInformation),
    previousSchools: Type.Array(PreviousSchool),
  }),
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