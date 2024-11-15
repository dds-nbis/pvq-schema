import { Static } from "@sinclair/typebox";
export declare const suffixOptions: string[];
export declare const months: string[];
export declare const PhoneNumber: import("@sinclair/typebox").TObject<{
    countryCode: import("@sinclair/typebox").TString;
    number: import("@sinclair/typebox").TString;
    extension: import("@sinclair/typebox").TString;
    type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"day">, import("@sinclair/typebox").TLiteral<"night">, import("@sinclair/typebox").TLiteral<"dayOrNight">, import("@sinclair/typebox").TLiteral<"extension">, import("@sinclair/typebox").TLiteral<"international">, import("@sinclair/typebox").TLiteral<"dsn">, import("@sinclair/typebox").TLiteral<"unknown">]>;
    location: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"cell">, import("@sinclair/typebox").TLiteral<"home">, import("@sinclair/typebox").TLiteral<"work">]>;
}>;
export declare const EmailAddress: import("@sinclair/typebox").TObject<{
    email: import("@sinclair/typebox").TString;
    type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"personal">, import("@sinclair/typebox").TLiteral<"work">]>;
}>;
export declare const USCitizenshipStatus: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"citizenByBirth">, import("@sinclair/typebox").TLiteral<"citizenByBirthBornToParentsInForeignCountry">, import("@sinclair/typebox").TLiteral<"naturalizedCitizen">, import("@sinclair/typebox").TLiteral<"derivedCitizen">, import("@sinclair/typebox").TLiteral<"notACitizen">, import("@sinclair/typebox").TLiteral<"nationalByBirth">, import("@sinclair/typebox").TLiteral<"nationalByBirthBornToParentsInForeignCountry">]>;
export declare const Name: import("@sinclair/typebox").TObject<{
    text: import("@sinclair/typebox").TString;
    lettersOnly: import("@sinclair/typebox").TBoolean;
}>;
export declare const DateRange: import("@sinclair/typebox").TObject<{
    from: import("@sinclair/typebox").TObject<{
        date: import("@sinclair/typebox").TString;
        estimated: import("@sinclair/typebox").TBoolean;
    }>;
    to: import("@sinclair/typebox").TObject<{
        date: import("@sinclair/typebox").TString;
        estimated: import("@sinclair/typebox").TBoolean;
        present: import("@sinclair/typebox").TBoolean;
    }>;
}>;
export declare const DateOfBirth: import("@sinclair/typebox").TObject<{
    date: import("@sinclair/typebox").TString;
    estimated: import("@sinclair/typebox").TBoolean;
    estimatedExplanation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
}>;
export declare const PlaceOfBirth: import("@sinclair/typebox").TObject<{
    bornInUsa: import("@sinclair/typebox").TBoolean;
    city: import("@sinclair/typebox").TString;
    country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    stateOrTerritory: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    county: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const SSN: import("@sinclair/typebox").TObject<{
    ssn: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    noSsn: import("@sinclair/typebox").TBoolean;
    noSsnExplanation: import("@sinclair/typebox").TString;
}>;
export declare const AdditionalName: import("@sinclair/typebox").TObject<{
    firstName: import("@sinclair/typebox").TObject<{
        text: import("@sinclair/typebox").TString;
        lettersOnly: import("@sinclair/typebox").TBoolean;
    }>;
    lastName: import("@sinclair/typebox").TObject<{
        text: import("@sinclair/typebox").TString;
        lettersOnly: import("@sinclair/typebox").TBoolean;
    }>;
    middleName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        text: import("@sinclair/typebox").TString;
        lettersOnly: import("@sinclair/typebox").TBoolean;
    }>>;
    suffix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        text: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"X">, import("@sinclair/typebox").TLiteral<"IX">, import("@sinclair/typebox").TLiteral<"VIII">, import("@sinclair/typebox").TLiteral<"VII">, import("@sinclair/typebox").TLiteral<"VI">, import("@sinclair/typebox").TLiteral<"IV">, import("@sinclair/typebox").TLiteral<"V">, import("@sinclair/typebox").TLiteral<"III">, import("@sinclair/typebox").TLiteral<"II">, import("@sinclair/typebox").TLiteral<"Sr.">, import("@sinclair/typebox").TLiteral<"Jr.">, import("@sinclair/typebox").TLiteral<"Other">]>;
        explanation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
    range: import("@sinclair/typebox").TObject<{
        from: import("@sinclair/typebox").TObject<{
            date: import("@sinclair/typebox").TString;
            estimated: import("@sinclair/typebox").TBoolean;
        }>;
        to: import("@sinclair/typebox").TObject<{
            date: import("@sinclair/typebox").TString;
            estimated: import("@sinclair/typebox").TBoolean;
            present: import("@sinclair/typebox").TBoolean;
        }>;
    }>;
}>;
export declare const FullName: import("@sinclair/typebox").TObject<{
    firstName: import("@sinclair/typebox").TObject<{
        text: import("@sinclair/typebox").TString;
        lettersOnly: import("@sinclair/typebox").TBoolean;
    }>;
    lastName: import("@sinclair/typebox").TObject<{
        text: import("@sinclair/typebox").TString;
        lettersOnly: import("@sinclair/typebox").TBoolean;
    }>;
    middleName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        text: import("@sinclair/typebox").TString;
        lettersOnly: import("@sinclair/typebox").TBoolean;
    }>>;
    suffix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        text: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"X">, import("@sinclair/typebox").TLiteral<"IX">, import("@sinclair/typebox").TLiteral<"VIII">, import("@sinclair/typebox").TLiteral<"VII">, import("@sinclair/typebox").TLiteral<"VI">, import("@sinclair/typebox").TLiteral<"IV">, import("@sinclair/typebox").TLiteral<"V">, import("@sinclair/typebox").TLiteral<"III">, import("@sinclair/typebox").TLiteral<"II">, import("@sinclair/typebox").TLiteral<"Sr.">, import("@sinclair/typebox").TLiteral<"Jr.">, import("@sinclair/typebox").TLiteral<"Other">]>;
        explanation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
}>;
export declare const ContactInformation: import("@sinclair/typebox").TObject<{
    phoneNumbers: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        countryCode: import("@sinclair/typebox").TString;
        number: import("@sinclair/typebox").TString;
        extension: import("@sinclair/typebox").TString;
        type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"day">, import("@sinclair/typebox").TLiteral<"night">, import("@sinclair/typebox").TLiteral<"dayOrNight">, import("@sinclair/typebox").TLiteral<"extension">, import("@sinclair/typebox").TLiteral<"international">, import("@sinclair/typebox").TLiteral<"dsn">, import("@sinclair/typebox").TLiteral<"unknown">]>;
        location: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"cell">, import("@sinclair/typebox").TLiteral<"home">, import("@sinclair/typebox").TLiteral<"work">]>;
    }>>;
    emailAddresses: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        email: import("@sinclair/typebox").TString;
        type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"personal">, import("@sinclair/typebox").TLiteral<"work">]>;
    }>>;
}>;
export declare const IdentityDocument: import("@sinclair/typebox").TObject<{
    hasItem: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"yes">, import("@sinclair/typebox").TLiteral<"no">, import("@sinclair/typebox").TLiteral<"dontKnow">]>;
    explanation: import("@sinclair/typebox").TString;
    number: import("@sinclair/typebox").TString;
    lastName: import("@sinclair/typebox").TObject<{
        text: import("@sinclair/typebox").TString;
        lettersOnly: import("@sinclair/typebox").TBoolean;
    }>;
    firstName: import("@sinclair/typebox").TObject<{
        text: import("@sinclair/typebox").TString;
        lettersOnly: import("@sinclair/typebox").TBoolean;
    }>;
    middleName: import("@sinclair/typebox").TObject<{
        text: import("@sinclair/typebox").TString;
        lettersOnly: import("@sinclair/typebox").TBoolean;
    }>;
    suffix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        text: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"X">, import("@sinclair/typebox").TLiteral<"IX">, import("@sinclair/typebox").TLiteral<"VIII">, import("@sinclair/typebox").TLiteral<"VII">, import("@sinclair/typebox").TLiteral<"VI">, import("@sinclair/typebox").TLiteral<"IV">, import("@sinclair/typebox").TLiteral<"V">, import("@sinclair/typebox").TLiteral<"III">, import("@sinclair/typebox").TLiteral<"II">, import("@sinclair/typebox").TLiteral<"Sr.">, import("@sinclair/typebox").TLiteral<"Jr.">, import("@sinclair/typebox").TLiteral<"Other">]>;
        explanation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
    issueDate: import("@sinclair/typebox").TString;
    expirationDate: import("@sinclair/typebox").TString;
    isMostRecent: import("@sinclair/typebox").TBoolean;
    isMostRecentExplanation: import("@sinclair/typebox").TString;
}>;
export declare const BornAbroadDocument: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"FS-240">, import("@sinclair/typebox").TLiteral<"DS-1350">, import("@sinclair/typebox").TLiteral<"FS-545">, import("@sinclair/typebox").TLiteral<"N-560/N-561">, import("@sinclair/typebox").TLiteral<"Other">]>;
export declare const NaturalizedCitizen: import("@sinclair/typebox").TObject<{
    alienRegistrationNumber: import("@sinclair/typebox").TString;
    naturalizationCerfiticateNumber: import("@sinclair/typebox").TString;
    issueDate: import("@sinclair/typebox").TString;
    name: import("@sinclair/typebox").TObject<{
        firstName: import("@sinclair/typebox").TObject<{
            text: import("@sinclair/typebox").TString;
            lettersOnly: import("@sinclair/typebox").TBoolean;
        }>;
        lastName: import("@sinclair/typebox").TObject<{
            text: import("@sinclair/typebox").TString;
            lettersOnly: import("@sinclair/typebox").TBoolean;
        }>;
        middleName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            text: import("@sinclair/typebox").TString;
            lettersOnly: import("@sinclair/typebox").TBoolean;
        }>>;
        suffix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            text: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"X">, import("@sinclair/typebox").TLiteral<"IX">, import("@sinclair/typebox").TLiteral<"VIII">, import("@sinclair/typebox").TLiteral<"VII">, import("@sinclair/typebox").TLiteral<"VI">, import("@sinclair/typebox").TLiteral<"IV">, import("@sinclair/typebox").TLiteral<"V">, import("@sinclair/typebox").TLiteral<"III">, import("@sinclair/typebox").TLiteral<"II">, import("@sinclair/typebox").TLiteral<"Sr.">, import("@sinclair/typebox").TLiteral<"Jr.">, import("@sinclair/typebox").TLiteral<"Other">]>;
            explanation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>>;
    }>;
}>;
export declare const DerivedCitizen: import("@sinclair/typebox").TObject<{
    alienRegistrationNumber: import("@sinclair/typebox").TString;
    permanentResidentCardNumber: import("@sinclair/typebox").TString;
    citizenshipCertificateNumber: import("@sinclair/typebox").TObject<{
        text: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        notApplicable: import("@sinclair/typebox").TBoolean;
        notApplicableExplanation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    citizenshipCertificateName: import("@sinclair/typebox").TObject<{
        firstName: import("@sinclair/typebox").TObject<{
            text: import("@sinclair/typebox").TString;
            lettersOnly: import("@sinclair/typebox").TBoolean;
        }>;
        lastName: import("@sinclair/typebox").TObject<{
            text: import("@sinclair/typebox").TString;
            lettersOnly: import("@sinclair/typebox").TBoolean;
        }>;
        middleName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            text: import("@sinclair/typebox").TString;
            lettersOnly: import("@sinclair/typebox").TBoolean;
        }>>;
        suffix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            text: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"X">, import("@sinclair/typebox").TLiteral<"IX">, import("@sinclair/typebox").TLiteral<"VIII">, import("@sinclair/typebox").TLiteral<"VII">, import("@sinclair/typebox").TLiteral<"VI">, import("@sinclair/typebox").TLiteral<"IV">, import("@sinclair/typebox").TLiteral<"V">, import("@sinclair/typebox").TLiteral<"III">, import("@sinclair/typebox").TLiteral<"II">, import("@sinclair/typebox").TLiteral<"Sr.">, import("@sinclair/typebox").TLiteral<"Jr.">, import("@sinclair/typebox").TLiteral<"Other">]>;
            explanation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>>;
    }>;
    issueDate: import("@sinclair/typebox").TString;
}>;
export declare const ResidenceStatus: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"permanentResident">, import("@sinclair/typebox").TLiteral<"asylum/refugee">, import("@sinclair/typebox").TLiteral<"nonimmigrant">, import("@sinclair/typebox").TLiteral<"temporaryProtectedStatus">, import("@sinclair/typebox").TLiteral<"deferredActionForChildhoodArrivals">, import("@sinclair/typebox").TLiteral<"other">]>;
export declare const LegalResidencyDocument: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"i94">, import("@sinclair/typebox").TLiteral<"visaCard">, import("@sinclair/typebox").TLiteral<"i20">, import("@sinclair/typebox").TLiteral<"ds2019">, import("@sinclair/typebox").TLiteral<"Other">]>;
export declare const NonCitizen: import("@sinclair/typebox").TObject<{
    residenceStatus: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"permanentResident">, import("@sinclair/typebox").TLiteral<"asylum/refugee">, import("@sinclair/typebox").TLiteral<"nonimmigrant">, import("@sinclair/typebox").TLiteral<"temporaryProtectedStatus">, import("@sinclair/typebox").TLiteral<"deferredActionForChildhoodArrivals">, import("@sinclair/typebox").TLiteral<"other">]>;
    otherExplanation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    dateEnteredUS: import("@sinclair/typebox").TObject<{
        date: import("@sinclair/typebox").TString;
        estimated: import("@sinclair/typebox").TBoolean;
    }>;
    whereEnteredUS: import("@sinclair/typebox").TObject<{
        city: import("@sinclair/typebox").TString;
        stateOrTerritory: import("@sinclair/typebox").TString;
    }>;
    countriesOfCitizenship: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    alienRegistrationNumber: import("@sinclair/typebox").TObject<{
        text: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        notApplicable: import("@sinclair/typebox").TBoolean;
        notApplicableExplanation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    employmentAuthorizationCardExpiration: import("@sinclair/typebox").TObject<{
        date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        notApplicable: import("@sinclair/typebox").TBoolean;
        notApplicableExplanation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    legalResidency: import("@sinclair/typebox").TObject<{
        document: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"i94">, import("@sinclair/typebox").TLiteral<"visaCard">, import("@sinclair/typebox").TLiteral<"i20">, import("@sinclair/typebox").TLiteral<"ds2019">, import("@sinclair/typebox").TLiteral<"Other">]>>;
        title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        number: import("@sinclair/typebox").TObject<{
            text: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            notApplicable: import("@sinclair/typebox").TBoolean;
            notApplicableExplanation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
        issueDate: import("@sinclair/typebox").TString;
        expirationDate: import("@sinclair/typebox").TString;
        name: import("@sinclair/typebox").TObject<{
            firstName: import("@sinclair/typebox").TObject<{
                text: import("@sinclair/typebox").TString;
                lettersOnly: import("@sinclair/typebox").TBoolean;
            }>;
            lastName: import("@sinclair/typebox").TObject<{
                text: import("@sinclair/typebox").TString;
                lettersOnly: import("@sinclair/typebox").TBoolean;
            }>;
            middleName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                text: import("@sinclair/typebox").TString;
                lettersOnly: import("@sinclair/typebox").TBoolean;
            }>>;
            suffix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                text: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"X">, import("@sinclair/typebox").TLiteral<"IX">, import("@sinclair/typebox").TLiteral<"VIII">, import("@sinclair/typebox").TLiteral<"VII">, import("@sinclair/typebox").TLiteral<"VI">, import("@sinclair/typebox").TLiteral<"IV">, import("@sinclair/typebox").TLiteral<"V">, import("@sinclair/typebox").TLiteral<"III">, import("@sinclair/typebox").TLiteral<"II">, import("@sinclair/typebox").TLiteral<"Sr.">, import("@sinclair/typebox").TLiteral<"Jr.">, import("@sinclair/typebox").TLiteral<"Other">]>;
                explanation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>;
        }>;
    }>;
}>;
export declare const AdditionalCountryCitizenship: import("@sinclair/typebox").TObject<{
    country: import("@sinclair/typebox").TString;
    how: import("@sinclair/typebox").TString;
    when: import("@sinclair/typebox").TObject<{
        from: import("@sinclair/typebox").TObject<{
            date: import("@sinclair/typebox").TString;
            estimated: import("@sinclair/typebox").TBoolean;
        }>;
        to: import("@sinclair/typebox").TObject<{
            date: import("@sinclair/typebox").TString;
            estimated: import("@sinclair/typebox").TBoolean;
            present: import("@sinclair/typebox").TBoolean;
        }>;
    }>;
    issuedPassport: import("@sinclair/typebox").TBoolean;
    stillActive: import("@sinclair/typebox").TBoolean;
}>;
export declare const PVQSchema: import("@sinclair/typebox").TObject<{
    version: import("@sinclair/typebox").TNumber;
    generalInformation: import("@sinclair/typebox").TObject<{
        lastName: import("@sinclair/typebox").TObject<{
            text: import("@sinclair/typebox").TString;
            lettersOnly: import("@sinclair/typebox").TBoolean;
        }>;
        firstName: import("@sinclair/typebox").TObject<{
            text: import("@sinclair/typebox").TString;
            lettersOnly: import("@sinclair/typebox").TBoolean;
        }>;
        middleName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            text: import("@sinclair/typebox").TString;
            lettersOnly: import("@sinclair/typebox").TBoolean;
        }>>;
        suffix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            text: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"X">, import("@sinclair/typebox").TLiteral<"IX">, import("@sinclair/typebox").TLiteral<"VIII">, import("@sinclair/typebox").TLiteral<"VII">, import("@sinclair/typebox").TLiteral<"VI">, import("@sinclair/typebox").TLiteral<"IV">, import("@sinclair/typebox").TLiteral<"V">, import("@sinclair/typebox").TLiteral<"III">, import("@sinclair/typebox").TLiteral<"II">, import("@sinclair/typebox").TLiteral<"Sr.">, import("@sinclair/typebox").TLiteral<"Jr.">, import("@sinclair/typebox").TLiteral<"Other">]>;
            explanation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>>;
        pronouns: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        dateOfBirth: import("@sinclair/typebox").TObject<{
            date: import("@sinclair/typebox").TString;
            estimated: import("@sinclair/typebox").TBoolean;
            estimatedExplanation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        }>;
        placeOfBirth: import("@sinclair/typebox").TObject<{
            bornInUsa: import("@sinclair/typebox").TBoolean;
            city: import("@sinclair/typebox").TString;
            country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            stateOrTerritory: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            county: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
        ssn: import("@sinclair/typebox").TObject<{
            ssn: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            noSsn: import("@sinclair/typebox").TBoolean;
            noSsnExplanation: import("@sinclair/typebox").TString;
        }>;
        hadAdditionalNames: import("@sinclair/typebox").TBoolean;
        additionalNames: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            firstName: import("@sinclair/typebox").TObject<{
                text: import("@sinclair/typebox").TString;
                lettersOnly: import("@sinclair/typebox").TBoolean;
            }>;
            lastName: import("@sinclair/typebox").TObject<{
                text: import("@sinclair/typebox").TString;
                lettersOnly: import("@sinclair/typebox").TBoolean;
            }>;
            middleName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                text: import("@sinclair/typebox").TString;
                lettersOnly: import("@sinclair/typebox").TBoolean;
            }>>;
            suffix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                text: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"X">, import("@sinclair/typebox").TLiteral<"IX">, import("@sinclair/typebox").TLiteral<"VIII">, import("@sinclair/typebox").TLiteral<"VII">, import("@sinclair/typebox").TLiteral<"VI">, import("@sinclair/typebox").TLiteral<"IV">, import("@sinclair/typebox").TLiteral<"V">, import("@sinclair/typebox").TLiteral<"III">, import("@sinclair/typebox").TLiteral<"II">, import("@sinclair/typebox").TLiteral<"Sr.">, import("@sinclair/typebox").TLiteral<"Jr.">, import("@sinclair/typebox").TLiteral<"Other">]>;
                explanation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>;
            range: import("@sinclair/typebox").TObject<{
                from: import("@sinclair/typebox").TObject<{
                    date: import("@sinclair/typebox").TString;
                    estimated: import("@sinclair/typebox").TBoolean;
                }>;
                to: import("@sinclair/typebox").TObject<{
                    date: import("@sinclair/typebox").TString;
                    estimated: import("@sinclair/typebox").TBoolean;
                    present: import("@sinclair/typebox").TBoolean;
                }>;
            }>;
        }>>;
        contactInformation: import("@sinclair/typebox").TObject<{
            phoneNumbers: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                countryCode: import("@sinclair/typebox").TString;
                number: import("@sinclair/typebox").TString;
                extension: import("@sinclair/typebox").TString;
                type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"day">, import("@sinclair/typebox").TLiteral<"night">, import("@sinclair/typebox").TLiteral<"dayOrNight">, import("@sinclair/typebox").TLiteral<"extension">, import("@sinclair/typebox").TLiteral<"international">, import("@sinclair/typebox").TLiteral<"dsn">, import("@sinclair/typebox").TLiteral<"unknown">]>;
                location: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"cell">, import("@sinclair/typebox").TLiteral<"home">, import("@sinclair/typebox").TLiteral<"work">]>;
            }>>;
            emailAddresses: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                email: import("@sinclair/typebox").TString;
                type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"personal">, import("@sinclair/typebox").TLiteral<"work">]>;
            }>>;
        }>;
    }>;
    passport: import("@sinclair/typebox").TObject<{
        book: import("@sinclair/typebox").TObject<{
            hasItem: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"yes">, import("@sinclair/typebox").TLiteral<"no">, import("@sinclair/typebox").TLiteral<"dontKnow">]>;
            explanation: import("@sinclair/typebox").TString;
            number: import("@sinclair/typebox").TString;
            lastName: import("@sinclair/typebox").TObject<{
                text: import("@sinclair/typebox").TString;
                lettersOnly: import("@sinclair/typebox").TBoolean;
            }>;
            firstName: import("@sinclair/typebox").TObject<{
                text: import("@sinclair/typebox").TString;
                lettersOnly: import("@sinclair/typebox").TBoolean;
            }>;
            middleName: import("@sinclair/typebox").TObject<{
                text: import("@sinclair/typebox").TString;
                lettersOnly: import("@sinclair/typebox").TBoolean;
            }>;
            suffix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                text: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"X">, import("@sinclair/typebox").TLiteral<"IX">, import("@sinclair/typebox").TLiteral<"VIII">, import("@sinclair/typebox").TLiteral<"VII">, import("@sinclair/typebox").TLiteral<"VI">, import("@sinclair/typebox").TLiteral<"IV">, import("@sinclair/typebox").TLiteral<"V">, import("@sinclair/typebox").TLiteral<"III">, import("@sinclair/typebox").TLiteral<"II">, import("@sinclair/typebox").TLiteral<"Sr.">, import("@sinclair/typebox").TLiteral<"Jr.">, import("@sinclair/typebox").TLiteral<"Other">]>;
                explanation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>;
            issueDate: import("@sinclair/typebox").TString;
            expirationDate: import("@sinclair/typebox").TString;
            isMostRecent: import("@sinclair/typebox").TBoolean;
            isMostRecentExplanation: import("@sinclair/typebox").TString;
        }>;
        card: import("@sinclair/typebox").TObject<{
            hasItem: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"yes">, import("@sinclair/typebox").TLiteral<"no">, import("@sinclair/typebox").TLiteral<"dontKnow">]>;
            explanation: import("@sinclair/typebox").TString;
            number: import("@sinclair/typebox").TString;
            lastName: import("@sinclair/typebox").TObject<{
                text: import("@sinclair/typebox").TString;
                lettersOnly: import("@sinclair/typebox").TBoolean;
            }>;
            firstName: import("@sinclair/typebox").TObject<{
                text: import("@sinclair/typebox").TString;
                lettersOnly: import("@sinclair/typebox").TBoolean;
            }>;
            middleName: import("@sinclair/typebox").TObject<{
                text: import("@sinclair/typebox").TString;
                lettersOnly: import("@sinclair/typebox").TBoolean;
            }>;
            suffix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                text: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"X">, import("@sinclair/typebox").TLiteral<"IX">, import("@sinclair/typebox").TLiteral<"VIII">, import("@sinclair/typebox").TLiteral<"VII">, import("@sinclair/typebox").TLiteral<"VI">, import("@sinclair/typebox").TLiteral<"IV">, import("@sinclair/typebox").TLiteral<"V">, import("@sinclair/typebox").TLiteral<"III">, import("@sinclair/typebox").TLiteral<"II">, import("@sinclair/typebox").TLiteral<"Sr.">, import("@sinclair/typebox").TLiteral<"Jr.">, import("@sinclair/typebox").TLiteral<"Other">]>;
                explanation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>;
            issueDate: import("@sinclair/typebox").TString;
            expirationDate: import("@sinclair/typebox").TString;
            isMostRecent: import("@sinclair/typebox").TBoolean;
            isMostRecentExplanation: import("@sinclair/typebox").TString;
        }>;
    }>;
    usCitizenship: import("@sinclair/typebox").TObject<{
        status: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"citizenByBirth">, import("@sinclair/typebox").TLiteral<"citizenByBirthBornToParentsInForeignCountry">, import("@sinclair/typebox").TLiteral<"naturalizedCitizen">, import("@sinclair/typebox").TLiteral<"derivedCitizen">, import("@sinclair/typebox").TLiteral<"notACitizen">, import("@sinclair/typebox").TLiteral<"nationalByBirth">, import("@sinclair/typebox").TLiteral<"nationalByBirthBornToParentsInForeignCountry">]>;
        bornAbroad: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            document: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"FS-240">, import("@sinclair/typebox").TLiteral<"DS-1350">, import("@sinclair/typebox").TLiteral<"FS-545">, import("@sinclair/typebox").TLiteral<"N-560/N-561">, import("@sinclair/typebox").TLiteral<"Other">]>;
            formTitle: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            serialNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            serialNumberNotApplicableExplanation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            issueDate: import("@sinclair/typebox").TObject<{
                date: import("@sinclair/typebox").TString;
                estimated: import("@sinclair/typebox").TBoolean;
            }>;
            issuedInUS: import("@sinclair/typebox").TBoolean;
            issuedInCity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            issuedInCountry: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            name: import("@sinclair/typebox").TObject<{
                firstName: import("@sinclair/typebox").TObject<{
                    text: import("@sinclair/typebox").TString;
                    lettersOnly: import("@sinclair/typebox").TBoolean;
                }>;
                lastName: import("@sinclair/typebox").TObject<{
                    text: import("@sinclair/typebox").TString;
                    lettersOnly: import("@sinclair/typebox").TBoolean;
                }>;
                middleName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    text: import("@sinclair/typebox").TString;
                    lettersOnly: import("@sinclair/typebox").TBoolean;
                }>>;
                suffix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    text: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"X">, import("@sinclair/typebox").TLiteral<"IX">, import("@sinclair/typebox").TLiteral<"VIII">, import("@sinclair/typebox").TLiteral<"VII">, import("@sinclair/typebox").TLiteral<"VI">, import("@sinclair/typebox").TLiteral<"IV">, import("@sinclair/typebox").TLiteral<"V">, import("@sinclair/typebox").TLiteral<"III">, import("@sinclair/typebox").TLiteral<"II">, import("@sinclair/typebox").TLiteral<"Sr.">, import("@sinclair/typebox").TLiteral<"Jr.">, import("@sinclair/typebox").TLiteral<"Other">]>;
                    explanation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>>;
            }>;
            militaryInstallationName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        }>>;
        naturalizedCitizen: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            alienRegistrationNumber: import("@sinclair/typebox").TString;
            naturalizationCerfiticateNumber: import("@sinclair/typebox").TString;
            issueDate: import("@sinclair/typebox").TString;
            name: import("@sinclair/typebox").TObject<{
                firstName: import("@sinclair/typebox").TObject<{
                    text: import("@sinclair/typebox").TString;
                    lettersOnly: import("@sinclair/typebox").TBoolean;
                }>;
                lastName: import("@sinclair/typebox").TObject<{
                    text: import("@sinclair/typebox").TString;
                    lettersOnly: import("@sinclair/typebox").TBoolean;
                }>;
                middleName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    text: import("@sinclair/typebox").TString;
                    lettersOnly: import("@sinclair/typebox").TBoolean;
                }>>;
                suffix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    text: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"X">, import("@sinclair/typebox").TLiteral<"IX">, import("@sinclair/typebox").TLiteral<"VIII">, import("@sinclair/typebox").TLiteral<"VII">, import("@sinclair/typebox").TLiteral<"VI">, import("@sinclair/typebox").TLiteral<"IV">, import("@sinclair/typebox").TLiteral<"V">, import("@sinclair/typebox").TLiteral<"III">, import("@sinclair/typebox").TLiteral<"II">, import("@sinclair/typebox").TLiteral<"Sr.">, import("@sinclair/typebox").TLiteral<"Jr.">, import("@sinclair/typebox").TLiteral<"Other">]>;
                    explanation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>>;
            }>;
        }>>;
        derivedCitizen: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            alienRegistrationNumber: import("@sinclair/typebox").TString;
            permanentResidentCardNumber: import("@sinclair/typebox").TString;
            citizenshipCertificateNumber: import("@sinclair/typebox").TObject<{
                text: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                notApplicable: import("@sinclair/typebox").TBoolean;
                notApplicableExplanation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>;
            citizenshipCertificateName: import("@sinclair/typebox").TObject<{
                firstName: import("@sinclair/typebox").TObject<{
                    text: import("@sinclair/typebox").TString;
                    lettersOnly: import("@sinclair/typebox").TBoolean;
                }>;
                lastName: import("@sinclair/typebox").TObject<{
                    text: import("@sinclair/typebox").TString;
                    lettersOnly: import("@sinclair/typebox").TBoolean;
                }>;
                middleName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    text: import("@sinclair/typebox").TString;
                    lettersOnly: import("@sinclair/typebox").TBoolean;
                }>>;
                suffix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    text: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"X">, import("@sinclair/typebox").TLiteral<"IX">, import("@sinclair/typebox").TLiteral<"VIII">, import("@sinclair/typebox").TLiteral<"VII">, import("@sinclair/typebox").TLiteral<"VI">, import("@sinclair/typebox").TLiteral<"IV">, import("@sinclair/typebox").TLiteral<"V">, import("@sinclair/typebox").TLiteral<"III">, import("@sinclair/typebox").TLiteral<"II">, import("@sinclair/typebox").TLiteral<"Sr.">, import("@sinclair/typebox").TLiteral<"Jr.">, import("@sinclair/typebox").TLiteral<"Other">]>;
                    explanation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>>;
            }>;
            issueDate: import("@sinclair/typebox").TString;
        }>>;
        nonCitizen: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            residenceStatus: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"permanentResident">, import("@sinclair/typebox").TLiteral<"asylum/refugee">, import("@sinclair/typebox").TLiteral<"nonimmigrant">, import("@sinclair/typebox").TLiteral<"temporaryProtectedStatus">, import("@sinclair/typebox").TLiteral<"deferredActionForChildhoodArrivals">, import("@sinclair/typebox").TLiteral<"other">]>;
            otherExplanation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            dateEnteredUS: import("@sinclair/typebox").TObject<{
                date: import("@sinclair/typebox").TString;
                estimated: import("@sinclair/typebox").TBoolean;
            }>;
            whereEnteredUS: import("@sinclair/typebox").TObject<{
                city: import("@sinclair/typebox").TString;
                stateOrTerritory: import("@sinclair/typebox").TString;
            }>;
            countriesOfCitizenship: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
            alienRegistrationNumber: import("@sinclair/typebox").TObject<{
                text: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                notApplicable: import("@sinclair/typebox").TBoolean;
                notApplicableExplanation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>;
            employmentAuthorizationCardExpiration: import("@sinclair/typebox").TObject<{
                date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                notApplicable: import("@sinclair/typebox").TBoolean;
                notApplicableExplanation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>;
            legalResidency: import("@sinclair/typebox").TObject<{
                document: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"i94">, import("@sinclair/typebox").TLiteral<"visaCard">, import("@sinclair/typebox").TLiteral<"i20">, import("@sinclair/typebox").TLiteral<"ds2019">, import("@sinclair/typebox").TLiteral<"Other">]>>;
                title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                number: import("@sinclair/typebox").TObject<{
                    text: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    notApplicable: import("@sinclair/typebox").TBoolean;
                    notApplicableExplanation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>;
                issueDate: import("@sinclair/typebox").TString;
                expirationDate: import("@sinclair/typebox").TString;
                name: import("@sinclair/typebox").TObject<{
                    firstName: import("@sinclair/typebox").TObject<{
                        text: import("@sinclair/typebox").TString;
                        lettersOnly: import("@sinclair/typebox").TBoolean;
                    }>;
                    lastName: import("@sinclair/typebox").TObject<{
                        text: import("@sinclair/typebox").TString;
                        lettersOnly: import("@sinclair/typebox").TBoolean;
                    }>;
                    middleName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                        text: import("@sinclair/typebox").TString;
                        lettersOnly: import("@sinclair/typebox").TBoolean;
                    }>>;
                    suffix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                        text: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"X">, import("@sinclair/typebox").TLiteral<"IX">, import("@sinclair/typebox").TLiteral<"VIII">, import("@sinclair/typebox").TLiteral<"VII">, import("@sinclair/typebox").TLiteral<"VI">, import("@sinclair/typebox").TLiteral<"IV">, import("@sinclair/typebox").TLiteral<"V">, import("@sinclair/typebox").TLiteral<"III">, import("@sinclair/typebox").TLiteral<"II">, import("@sinclair/typebox").TLiteral<"Sr.">, import("@sinclair/typebox").TLiteral<"Jr.">, import("@sinclair/typebox").TLiteral<"Other">]>;
                        explanation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>>;
                }>;
            }>;
        }>>;
    }>;
    additionalCitizenships: import("@sinclair/typebox").TObject<{
        citizenOfAnotherCountry: import("@sinclair/typebox").TBoolean;
        countries: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            country: import("@sinclair/typebox").TString;
            how: import("@sinclair/typebox").TString;
            when: import("@sinclair/typebox").TObject<{
                from: import("@sinclair/typebox").TObject<{
                    date: import("@sinclair/typebox").TString;
                    estimated: import("@sinclair/typebox").TBoolean;
                }>;
                to: import("@sinclair/typebox").TObject<{
                    date: import("@sinclair/typebox").TString;
                    estimated: import("@sinclair/typebox").TBoolean;
                    present: import("@sinclair/typebox").TBoolean;
                }>;
            }>;
            issuedPassport: import("@sinclair/typebox").TBoolean;
            stillActive: import("@sinclair/typebox").TBoolean;
        }>>;
    }>;
    otherFederalEmployment: import("@sinclair/typebox").TObject<{}>;
    usMilitary: import("@sinclair/typebox").TObject<{}>;
    policeRecord: import("@sinclair/typebox").TObject<{}>;
    drugActivity: import("@sinclair/typebox").TObject<{}>;
    marijuana: import("@sinclair/typebox").TObject<{}>;
    priorInvestigations: import("@sinclair/typebox").TObject<{}>;
    itSystems: import("@sinclair/typebox").TObject<{}>;
    protectedInformation: import("@sinclair/typebox").TObject<{}>;
    associates: import("@sinclair/typebox").TObject<{}>;
    psychologicalHealth: import("@sinclair/typebox").TObject<{}>;
}>;
export type PVQ = Static<typeof PVQSchema>;
export { countries } from "./countries";
export { countryCodes } from "./countryCodes";
export { statesOrTerritories } from "./statesOrTerritories";
