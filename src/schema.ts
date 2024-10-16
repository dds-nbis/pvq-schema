export type PlainString = string

type Name = {
  text: PlainString;
  lettersOnly: boolean;
};

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

type Suffix =
  | {
    text:
    | "Jr."
    | "Sr."
    | "II"
    | "III"
    | "IV"
    | "V"
    | "VI"
    | "VII"
    | "VIII"
    | "IX"
    | "X";
  }
  | {
    text: "Other";
    explanation: PlainString;
  };

export type DateRange = {
  from: {
    date: Date;
    estimated: boolean;
  };
  to?: {
    date: Date;
    estimated: boolean;
    present: boolean;
  };
};

export type AdditionalName = {
  firstName: Name;
  lastName: Name;
  middleName?: Name;
  suffix?: Suffix;
  range: DateRange;
};

export type PhoneNumberType = "day" | "night" | "dayOrNight" | "extension" | "international" | "dsn" | "unknown"

export type PhoneNumber = {
  countryCode: string
  number: string
  extension?: string
  type: PhoneNumberType
  location: "cell" | "home" | "work"
}

export type EmailAddress = {
  email: string
  type: "personal" | "work"
}

export type IdentityDocument = {
  hasItem: "yes" | "no" | "dontKnow";
  explanation: string;
  number: string;
  lastName: Name;
  firstName: Name;
  middleName: Name;
  suffix?: Suffix;
  issueDate: Date;
  expirationDate: Date;
  isMostRecent: boolean
  isMostRecentExplanation: string;
}

export type USCitizenshipStatus = "citizenByBirth" | "citizenByBirthBornToParentsInForeignCountry" | "naturalizedCitizen" | "derizedCitizen" | "notACitizen" | "nationalByBirth" | "nationalByBirthBornToParentsInForeignCountry"

export type BornAbroadDocument = "FS-240" | "DS-1350" | "FS-545" | "N-560/N-561" | "Other"

export type PVQ = {
  version: number;
  generalInformation: {
    lastName: Name;
    firstName: Name;
    middleName?: Name;
    suffix?: Suffix;
    pronouns?: string;
    dateOfBirth: string;
    dateOfBirthEstimated: boolean;
    dateOfBirthEstimatedExplanation?: string;
    bornInUsa: boolean;
    placeOfBirthCity: string;
    placeOfBirthCounty?: string;
    placeOfBirthStateOrTerritory?: string;
    placeOfBirthCountry?: string;
    ssn?: string;
    noSsn: boolean;
    noSsnExplanation?: string;
    hadAdditionalNames: boolean;
    additionalNames: AdditionalName[];
    contactInformation: {
      phoneNumbers: PhoneNumber[],
      emailAddresses: EmailAddress[]
    }
  };
  passport: {
    book: IdentityDocument;
    card: IdentityDocument;
  };
  usCitizenship: {
    status: USCitizenshipStatus
    bornAbroad?: {
      document: BornAbroadDocument
      documentTitle: string
      serialNumber: {
        text: string
      } | {
        notApplicable: true
      }
      issueDate: Date
    }
  }
  additionalCitizenships: {
    otherCountryCitizen: boolean;
  };
  otherFederalEmployment: {
    fedEmploymentMoreThanFiveYearsAgo: boolean;
  };
  usMilitary: {
    everServed: boolean;
  };
  policeRecord: {
    chargedWithCrimeLastFiveYears: boolean;
    onProbationLastFiveYears: boolean;
    onParoleLastFiveYears: boolean;
  };
  drugActivity: {
    usedIllegalDrugLastFiveYears: boolean;
  };
  marijuana: {
    usedLast90Days: boolean;
  };
  priorInvestigations: {
    priorInvestigationLastFiveYears: boolean;
  };
  itSystems: {
    illegallyAccessedLastFiveYears: boolean;
  };
  protectedInformation: {
    illegallyAccessedLastFiveYears: boolean;
  };
  associations: {
    memberOfTreasonousOrganization: boolean
  },
  psychologicalHealth: {
    everMentallyIncompetent: boolean
    mentalConsultationOrdered: boolean,
    hospitalized: boolean,
    diagnosedWithDisorder: boolean,
  },
}
