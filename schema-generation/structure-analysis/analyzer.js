const DROPDOWN_VALUES_CSV = `
COUNTRY,AFG,Afghanistan
COUNTRY,XQZ,Akrotiri
COUNTRY,ALB,Albania
COUNTRY,DZA,Algeria
COUNTRY,ASM,American Samoa
COUNTRY,AND,Andorra
COUNTRY,AGO,Angola
COUNTRY,AIA,Anguilla
COUNTRY,ATA,Antarctica
COUNTRY,ATG,Antigua and Barbuda
COUNTRY,ARG,Argentina
COUNTRY,ARM,Armenia
COUNTRY,ABW,Aruba
COUNTRY,XAC,Ashmore and Cartier Islands
COUNTRY,AUS,Australia
COUNTRY,AUT,Austria
COUNTRY,AZE,Azerbaijan
COUNTRY,BHS,"Bahamas, The"
COUNTRY,BHR,Bahrain
COUNTRY,XBK,Baker Island
COUNTRY,BGD,Bangladesh
COUNTRY,BRB,Barbados
COUNTRY,XBI,Bassas da India
COUNTRY,BLR,Belarus
COUNTRY,BEL,Belgium
COUNTRY,BLZ,Belize
COUNTRY,BEN,Benin
COUNTRY,BMU,Bermuda
COUNTRY,BTN,Bhutan
COUNTRY,BOL,Bolivia
COUNTRY,BIH,Bosnia and Herzegovina
COUNTRY,BWA,Botswana
COUNTRY,BVT,Bouvet Island
COUNTRY,BRA,Brazil
COUNTRY,IOT,British Indian Ocean Territory
COUNTRY,VGB,British Virgin Islands
COUNTRY,BRN,Brunei
COUNTRY,BGR,Bulgaria
COUNTRY,BFA,Burkina Faso
COUNTRY,MMR,Burma
COUNTRY,BDI,Burundi
COUNTRY,CPV,Cabo Verde
COUNTRY,KHM,Cambodia
COUNTRY,CMR,Cameroon
COUNTRY,CAN,Canada
COUNTRY,CYM,Cayman Islands
COUNTRY,CAF,Central African Republic
COUNTRY,TCD,Chad
COUNTRY,CHL,Chile
COUNTRY,CHN,China
COUNTRY,CXR,Christmas Island
COUNTRY,CPT,Clipperton Island
COUNTRY,CCK,Cocos (Keeling) Islands
COUNTRY,COL,Colombia
COUNTRY,COM,Comoros
COUNTRY,COD,"Congo, Democratic Republic of the"
COUNTRY,COG,"Congo, Republic of the"
COUNTRY,COK,Cook Islands
COUNTRY,XCS,Coral Sea Islands
COUNTRY,CRI,Costa Rica
COUNTRY,CIV,Cote d'Ivoire
COUNTRY,HRV,Croatia
COUNTRY,CUB,Cuba
COUNTRY,CUW,Curacao
COUNTRY,CYP,Cyprus
COUNTRY,CZE,Czechia
COUNTRY,DNK,Denmark
COUNTRY,XXD,Dhekelia
COUNTRY,DJI,Djibouti
COUNTRY,DMA,Dominica
COUNTRY,DOM,Dominican Republic
COUNTRY,ECU,Ecuador
COUNTRY,EGY,Egypt
COUNTRY,SLV,El Salvador
COUNTRY,GNQ,Equatorial Guinea
COUNTRY,ERI,Eritrea
COUNTRY,EST,Estonia
COUNTRY,SWZ,Eswatini
COUNTRY,ETH,Ethiopia
COUNTRY,XEU,Europa Island
COUNTRY,FLK,Falkland Islands (Islas Malvinas)
COUNTRY,FRO,Faroe Islands
COUNTRY,FJI,Fiji
COUNTRY,FIN,Finland
COUNTRY,FRA,France
COUNTRY,GUF,French Guiana
COUNTRY,PYF,French Polynesia
COUNTRY,ATF,French Southern and Antarctic Lands
COUNTRY,GAB,Gabon
COUNTRY,GMB,"Gambia, The"
COUNTRY,XGZ,Gaza Strip
COUNTRY,GEO,Georgia
COUNTRY,DEU,Germany
COUNTRY,GHA,Ghana
COUNTRY,GIB,Gibraltar
COUNTRY,XGL,Glorioso Islands
COUNTRY,GRC,Greece
COUNTRY,GRL,Greenland
COUNTRY,GRD,Grenada
COUNTRY,GLP,Guadeloupe
COUNTRY,GUM,Guam
COUNTRY,GTM,Guatemala
COUNTRY,GGY,Guernsey
COUNTRY,GIN,Guinea
COUNTRY,GNB,Guinea-Bissau
COUNTRY,GUY,Guyana
COUNTRY,HTI,Haiti
COUNTRY,HMD,Heard Island and McDonald Islands
COUNTRY,VAT,Holy See (Vatican City)
COUNTRY,HND,Honduras
COUNTRY,HKG,Hong Kong
COUNTRY,XHO,Howland Island
COUNTRY,HUN,Hungary
COUNTRY,ISL,Iceland
COUNTRY,IND,India
COUNTRY,IDN,Indonesia
COUNTRY,IRN,Iran
COUNTRY,IRQ,Iraq
COUNTRY,IRL,Ireland
COUNTRY,IMN,Isle of Man
COUNTRY,ISR,Israel
COUNTRY,ITA,Italy
COUNTRY,JAM,Jamaica
COUNTRY,XJM,Jan Mayen
COUNTRY,JPN,Japan
COUNTRY,XJV,Jarvis Island
COUNTRY,JEY,Jersey
COUNTRY,XJA,Johnston Atoll
COUNTRY,JOR,Jordan
COUNTRY,XJN,Juan de Nova Island
COUNTRY,KAZ,Kazakhstan
COUNTRY,KEN,Kenya
COUNTRY,XKR,Kingman Reef
COUNTRY,KIR,Kiribati
COUNTRY,PRK,"Korea, North"
COUNTRY,KOR,"Korea, South"
COUNTRY,XKS,Kosovo
COUNTRY,KWT,Kuwait
COUNTRY,KGZ,Kyrgyzstan
COUNTRY,LAO,Laos
COUNTRY,LVA,Latvia
COUNTRY,LBN,Lebanon
COUNTRY,LSO,Lesotho
COUNTRY,LBR,Liberia
COUNTRY,LBY,Libya
COUNTRY,LIE,Liechtenstein
COUNTRY,LTU,Lithuania
COUNTRY,LUX,Luxembourg
COUNTRY,MAC,Macau
COUNTRY,MDG,Madagascar
COUNTRY,MWI,Malawi
COUNTRY,MYS,Malaysia
COUNTRY,MDV,Maldives
COUNTRY,MLI,Mali
COUNTRY,MLT,Malta
COUNTRY,MHL,Marshall Islands
COUNTRY,MTQ,Martinique
COUNTRY,MRT,Mauritania
COUNTRY,MUS,Mauritius
COUNTRY,MYT,Mayotte
COUNTRY,MEX,Mexico
COUNTRY,FSM,"Micronesia, Federated States of"
COUNTRY,XMW,Midway Islands
COUNTRY,MDA,Moldova
COUNTRY,MCO,Monaco
COUNTRY,MNG,Mongolia
COUNTRY,MNE,Montenegro
COUNTRY,MSR,Montserrat
COUNTRY,MAR,Morocco
COUNTRY,MOZ,Mozambique
COUNTRY,NAM,Namibia
COUNTRY,NRU,Nauru
COUNTRY,XNV,Navassa Island
COUNTRY,NPL,Nepal
COUNTRY,NLD,Netherlands
COUNTRY,NCL,New Caledonia
COUNTRY,NZL,New Zealand
COUNTRY,NIC,Nicaragua
COUNTRY,NER,Niger
COUNTRY,NGA,Nigeria
COUNTRY,NIU,Niue
COUNTRY,NFK,Norfolk Island
COUNTRY,MKD,North Macedonia
COUNTRY,MNP,Northern Mariana Islands
COUNTRY,NOR,Norway
COUNTRY,OMN,Oman
COUNTRY,PAK,Pakistan
COUNTRY,PLW,Palau
COUNTRY,XPL,Palmyra Atoll
COUNTRY,PAN,Panama
COUNTRY,PNG,Papua New Guinea
COUNTRY,XPR,Paracel Islands
COUNTRY,PRY,Paraguay
COUNTRY,PER,Peru
COUNTRY,PHL,Philippines
COUNTRY,PCN,Pitcairn Islands
COUNTRY,POL,Poland
COUNTRY,PRT,Portugal
COUNTRY,PRI,Puerto Rico
COUNTRY,QAT,Qatar
COUNTRY,REU,Reunion
COUNTRY,ROU,Romania
COUNTRY,RUS,Russia
COUNTRY,RWA,Rwanda
COUNTRY,BLM,Saint Barthelemy
COUNTRY,SHN,"Saint Helena, Ascension, and Tristan da Cunha"
COUNTRY,KNA,Saint Kitts and Nevis
COUNTRY,LCA,Saint Lucia
COUNTRY,MAF,Saint Martin
COUNTRY,SPM,Saint Pierre and Miquelon
COUNTRY,VCT,Saint Vincent and the Grenadines
COUNTRY,WSM,Samoa
COUNTRY,SMR,San Marino
COUNTRY,STP,Sao Tome and Principe
COUNTRY,SAU,Saudi Arabia
COUNTRY,SEN,Senegal
COUNTRY,SRB,Serbia
COUNTRY,SYC,Seychelles
COUNTRY,SLE,Sierra Leone
COUNTRY,SGP,Singapore
COUNTRY,SXM,Sint Maarten
COUNTRY,SVK,Slovakia
COUNTRY,SVN,Slovenia
COUNTRY,SLB,Solomon Islands
COUNTRY,SOM,Somalia
COUNTRY,ZAF,South Africa
COUNTRY,SGS,South Georgia and the Islands
COUNTRY,SSD,South Sudan
COUNTRY,ESP,Spain
COUNTRY,XSP,Spratly Islands
COUNTRY,LKA,Sri Lanka
COUNTRY,SDN,Sudan
COUNTRY,SUR,Suriname
COUNTRY,XSV,Svalbard
COUNTRY,SWE,Sweden
COUNTRY,CHE,Switzerland
COUNTRY,SYR,Syria
COUNTRY,TWN,Taiwan
COUNTRY,TJK,Tajikistan
COUNTRY,TZA,Tanzania
COUNTRY,THA,Thailand
COUNTRY,TLS,Timor-Leste
COUNTRY,TGO,Togo
COUNTRY,TKL,Tokelau
COUNTRY,TON,Tonga
COUNTRY,TTO,Trinidad and Tobago
COUNTRY,XTR,Tromelin Island
COUNTRY,TUN,Tunisia
COUNTRY,TUR,Turkey (Turkiye)
COUNTRY,TKM,Turkmenistan
COUNTRY,TCA,Turks and Caicos Islands
COUNTRY,TUV,Tuvalu
COUNTRY,UGA,Uganda
COUNTRY,UKR,Ukraine
COUNTRY,ARE,United Arab Emirates
COUNTRY,GBR,United Kingdom
COUNTRY,USA,United States
COUNTRY,URY,Uruguay
COUNTRY,UZB,Uzbekistan
COUNTRY,VUT,Vanuatu
COUNTRY,VEN,Venezuela
COUNTRY,VNM,Vietnam
COUNTRY,VIR,Virgin Islands
COUNTRY,XWK,Wake Island
COUNTRY,WLF,Wallis and Futuna
COUNTRY,XWB,West Bank
COUNTRY,WI,Western Sahara
COUNTRY,YEM,Yemen
COUNTRY,ZMB,Zambia
COUNTRY,ZWE,Zimbabwe
STATE_OR_TERRITORY,AL,Alabama
STATE_OR_TERRITORY,AK,Alaska
STATE_OR_TERRITORY,AS,American Samoa
STATE_OR_TERRITORY,AZ,Arizona
STATE_OR_TERRITORY,AR,Arkansas
STATE_OR_TERRITORY,CA,California
STATE_OR_TERRITORY,CO,Colorado
STATE_OR_TERRITORY,CT,Connecticut
STATE_OR_TERRITORY,DE,Delaware
STATE_OR_TERRITORY,DC,District of Columbia
STATE_OR_TERRITORY,FL,Florida
STATE_OR_TERRITORY,GA,Georgia
STATE_OR_TERRITORY,GU,Guam
STATE_OR_TERRITORY,HI,Hawaii
STATE_OR_TERRITORY,ID,Idaho
STATE_OR_TERRITORY,IL,Illinois
STATE_OR_TERRITORY,IN,Indiana
STATE_OR_TERRITORY,IA,Iowa
STATE_OR_TERRITORY,KS,Kansas
STATE_OR_TERRITORY,KY,Kentucky
STATE_OR_TERRITORY,LA,Louisiana
STATE_OR_TERRITORY,ME,Maine
STATE_OR_TERRITORY,MD,Maryland
STATE_OR_TERRITORY,MA,Massachusetts
STATE_OR_TERRITORY,MI,Michigan
STATE_OR_TERRITORY,MN,Minnesota
STATE_OR_TERRITORY,MS,Mississippi
STATE_OR_TERRITORY,MO,Missouri
STATE_OR_TERRITORY,MT,Montana
STATE_OR_TERRITORY,NE,Nebraska
STATE_OR_TERRITORY,NV,Nevada
STATE_OR_TERRITORY,NH,New Hampshire
STATE_OR_TERRITORY,NJ,New Jersey
STATE_OR_TERRITORY,NM,New Mexico
STATE_OR_TERRITORY,NY,New York
STATE_OR_TERRITORY,NC,North Carolina
STATE_OR_TERRITORY,ND,North Dakota
STATE_OR_TERRITORY,MP,Northern Mariana Islands
STATE_OR_TERRITORY,OH,Ohio
STATE_OR_TERRITORY,OK,Oklahoma
STATE_OR_TERRITORY,OR,Oregon
STATE_OR_TERRITORY,PA,Pennsylvania
STATE_OR_TERRITORY,PR,Puerto Rico
STATE_OR_TERRITORY,RI,Rhode Island
STATE_OR_TERRITORY,SC,South Carolina
STATE_OR_TERRITORY,SD,South Dakota
STATE_OR_TERRITORY,TN,Tennessee
STATE_OR_TERRITORY,TX,Texas
STATE_OR_TERRITORY,VI,U.S. Virgin Islands
STATE_OR_TERRITORY,UT,Utah
STATE_OR_TERRITORY,VT,Vermont
STATE_OR_TERRITORY,VA,Virginia
STATE_OR_TERRITORY,WA,Washington
STATE_OR_TERRITORY,WV,West Virginia
STATE_OR_TERRITORY,WI,Wisconsin
STATE_OR_TERRITORY,WY,Wyoming
TELEPHONE_TYPES,Day,
TELEPHONE_TYPES,Night,
TELEPHONE_TYPES,Both,
TELEPHONE_TYPES,Extension,
TELEPHONE_TYPES,International,
TELEPHONE_TYPES,DSN,
TELEPHONE_TYPES,I don't know,
EMAIL_TYPES,Personal,
EMAIL_TYPES,Work,
EMAIL_TYPES,I don't know,
SUFFIX,Jr.,
SUFFIX,Sr.,
SUFFIX,II,
SUFFIX,III,
SUFFIX,IV,
SUFFIX,V,
SUFFIX,VI,
SUFFIX,VII,
SUFFIX,VIII,
SUFFIX,IX,
SUFFIX,X,
SUFFIX,Other,
SUFFIX,None,
CITIZENSHIP_STATUS,A U.S. citizen by birth in the U.S. or a U.S. territory.,
CITIZENSHIP_STATUS,"A U.S. citizen by birth, born to U.S. parent(s), in a foreign country.",
CITIZENSHIP_STATUS,A naturalized U.S. citizen.,
CITIZENSHIP_STATUS,A derived U.S. citizen.,
CITIZENSHIP_STATUS,Not a U.S. citizen.,
CITIZENSHIP_STATUS,A U.S. national by birth in the U.S. or a U.S. territory.,
CITIZENSHIP_STATUS,"A U.S. national by birth, born to U.S. parent(s), in a foreign country.",
US_CIT_BORNABROAD_DOC,Form FS-240 (Consular Report of Birth Abroad),Form FS-240
US_CIT_BORNABROAD_DOC,Form DS-1350 (Certificate of Report of Birth),Form DS-1350 
US_CIT_BORNABROAD_DOC,Form FS-545 (Certificate of Birth Abroad),Form FS-545
US_CIT_BORNABROAD_DOC,Form N-560 or Form N-561 (Certificate of Citizenship),Form N-560 or Form N-561 
US_CIT_BORNABROAD_DOC,Other,
RESIDENCY_STATUS,Permanent Resident,
RESIDENCY_STATUS,Asylee/Refugee,
RESIDENCY_STATUS,Nonimmigrant,
RESIDENCY_STATUS,Temporary Protected Status (TPS),Temporary Protected Status
RESIDENCY_STATUS,Deferred Action for Childhood Arrivals (DACA),Deferred Action for Childhood Arrivals 
RESIDENCY_STATUS,Other,
DOC_VERIFY_LEGALRESIDENCY,Form I-94 (Arrival/Departure Record),Form I-94 
DOC_VERIFY_LEGALRESIDENCY,U.S. Visa Card (nonimmigrant visa),U.S. Visa Card
DOC_VERIFY_LEGALRESIDENCY,Form I-20 (Student Exchange Visitor Program (SEVP)),Form I-20 
DOC_VERIFY_LEGALRESIDENCY,"Form DS-2019 (""J"" Exchange Visitor Status)",Form DS-2019 
DOC_VERIFY_LEGALRESIDENCY,Other,
TRAVEL_DURATION,Less than 24 hours,
TRAVEL_DURATION,1-7 days,
TRAVEL_DURATION,8-14 days,
TRAVEL_DURATION,15-30 days,
TRAVEL_DURATION,Over 30 days,
TRAVEL_DURATION,Many short trips,
TRAVEL_PURPOSE,Business or professional conference (This does not include U.S. Government business or military assignments.),Business or professional conference
TRAVEL_PURPOSE,Volunteer activity,
TRAVEL_PURPOSE,Education,
TRAVEL_PURPOSE,Tourism,
TRAVEL_PURPOSE,"Trade show, conference, or seminar (not associated with your profession)","Trade show, conference, or seminar "
TRAVEL_PURPOSE,Visit with family or friends,
TRAVEL_PURPOSE,Other,
TEMPORARY_LIVING,Extended Travel,
TEMPORARY_LIVING,Business,
TEMPORARY_LIVING,School,
TEMPORARY_LIVING,Military Training,
TEMPORARY_LIVING,Military Deployment,
TEMPORARY_LIVING,Other,
SCHOOL_TYPE,Vocational/Technical/Trade School,
SCHOOL_TYPE,College/University/Military Academy,
SCHOOL_TYPE,High School,
SCHOOL_TYPE,Other,
LEARNING_TYPE,In-person,
LEARNING_TYPE,"Not in-person (for example, correspondence, online, extension, other similar distance learning education)",Not in-person 
LEARNING_TYPE,Combination of in-person and not in-person,
DEGREE_TYPE,Associate's degree,
DEGREE_TYPE,Bachelor's degree,
DEGREE_TYPE,Master's degree,
DEGREE_TYPE,Doctoral degree,
DEGREE_TYPE,"Professional degree (for example, MD, JD, DVM)",Professional degree 
DEGREE_TYPE,High School diploma,
DEGREE_TYPE,Other,
SCHOOL_RELATIONSHIP,Instructor,
SCHOOL_RELATIONSHIP,Counselor,
SCHOOL_RELATIONSHIP,Friend,
SCHOOL_RELATIONSHIP,Schoolmate,
SCHOOL_RELATIONSHIP,Other,
EMPLOYMENT_ACTIVITY,"U.S. Military or Uniformed Service (U.S. Army, Navy, Marine, Coast Guard, Air Force, Space Force, USPHS, or NOAA)",U.S. Military or Uniformed Service 
EMPLOYMENT_ACTIVITY,Other Federal Employment,
EMPLOYMENT_ACTIVITY,Federal Contractor,
EMPLOYMENT_ACTIVITY,State Government Employment,
EMPLOYMENT_ACTIVITY,Non-government Employment (do not include self-employment),Non-government Employment 
EMPLOYMENT_ACTIVITY,Self-employed,
EMPLOYMENT_ACTIVITY,Unemployed,
US_MILITARY_SERVICE_BRANCH,Air National Guard,
US_MILITARY_SERVICE_BRANCH,Army National Guard,
US_MILITARY_SERVICE_BRANCH,National Oceanic and Atmospheric Administration Commissioned Officer Corps,
US_MILITARY_SERVICE_BRANCH,U.S. Air Force,
US_MILITARY_SERVICE_BRANCH,U.S. Army,
US_MILITARY_SERVICE_BRANCH,U.S. Coast Guard,
US_MILITARY_SERVICE_BRANCH,U.S. Marine Corps,
US_MILITARY_SERVICE_BRANCH,U.S. Navy,
US_MILITARY_SERVICE_BRANCH,U.S. Public Health Service Commissioned Corps,
US_MILITARY_SERVICE_BRANCH,U.S. Space Force,
MILITARY_DUTY_STATUS,Active Duty,
MILITARY_DUTY_STATUS,Active Reserve/Guard,
MILITARY_DUTY_STATUS,Traditional Reservist/Guardsman,
MILITARY_DUTY_STATUS,Inactive Reserves/Individual Ready Reserves,
MILITARY_DUTY_STATUS,Retired Reserve,
MILITARY_DUTY_STATUS,Other,
MILITARY_DISCIPLINE_ACTION,Letter of Admonishment,
MILITARY_DISCIPLINE_ACTION,Letter of Reprimand,
MILITARY_DISCIPLINE_ACTION,Article 15 (of the UCMJ),Article 15
MILITARY_DISCIPLINE_ACTION,Court-martial,
MILITARY_DISCIPLINE_ACTION,Other,
MILITARY_DISCIPLINE_SENTENCE,Reduction in rank,
MILITARY_DISCIPLINE_SENTENCE,Forfeiture of pay,
MILITARY_DISCIPLINE_SENTENCE,Suspended from duty,
MILITARY_DISCIPLINE_SENTENCE,Detention,
MILITARY_DISCIPLINE_SENTENCE,Restrictions,
MILITARY_DISCIPLINE_SENTENCE,Extra duties,
MILITARY_DISCIPLINE_SENTENCE,Correctional Custody,
MILITARY_DISCIPLINE_SENTENCE,Confinement,
MILITARY_DISCIPLINE_SENTENCE,Other,
CIV_MILITARY_VALUE,Civilian,
CIV_MILITARY_VALUE,Military,
DISCIPLINE_VALUE,Written Warning,
DISCIPLINE_VALUE,Official Counseling,
DISCIPLINE_VALUE,Official Reprimand,
DISCIPLINE_VALUE,Suspended,
DISCIPLINE_VALUE,Demoted - Reduction in grade,
DISCIPLINE_VALUE,Demoted - Reduction in pay,
DISCIPLINE_VALUE,"Removed from position, but not from employment",
DISCIPLINE_VALUE,Other,
MILITARY_DISCHARGE_TYPE,Honorable Discharge,
MILITARY_DISCHARGE_TYPE,General Discharge Under Honorable Conditions (this is not an Honorable Discharge),
MILITARY_DISCHARGE_TYPE,Other Than Honorable Discharge,
MILITARY_DISCHARGE_TYPE,Dismissal,
MILITARY_DISCHARGE_TYPE,Bad Conduct Discharge,
MILITARY_DISCHARGE_TYPE,Dishonorable Discharge,
MILITARY_DISCHARGE_TYPE,"Other Type of Separation (Entry-Level Separation, Medical Separation, Separation for Convenience of the Government)",Other Type of Separation
COURT_MARTIAL_TYPE,Summary,
COURT_MARTIAL_TYPE,Special,
COURT_MARTIAL_TYPE,General,
CRIMINAL_OUTCOME,Not guilty,
CRIMINAL_OUTCOME,Nolle Prosequi,
CRIMINAL_OUTCOME,Charge dismissed or disposed of,
CRIMINAL_OUTCOME,Charge dismissed or disposed of after a deferred adjudication or deferred judgment (not applicable for military under the UCMJ),Charge dismissed or disposed of after a deferred adjudication or deferred judgment
CRIMINAL_OUTCOME,Guilty,
CRIMINAL_OUTCOME,On trial,
CRIMINAL_OUTCOME,Awaiting trial,
CRIMINAL_OUTCOME,Other,
NON_US_GOV_SERVICE,Military or Armed Forces,
NON_US_GOV_SERVICE,Intelligence Service,
NON_US_GOV_SERVICE,Diplomatic Service,
NON_US_GOV_SERVICE,Security Service,
NON_US_GOV_SERVICE,Militia,
NON_US_GOV_SERVICE,Other Defense Force,
NON_US_GOV_SERVICE,Other Government Force,
NON_US_GOV_SERVICE,Other,
FREQUENCY_VALUE,Daily,
FREQUENCY_VALUE,Weekly,
FREQUENCY_VALUE,Monthly,
FREQUENCY_VALUE,Quarterly,
FREQUENCY_VALUE,Annually,
FREQUENCY_VALUE,Other,
CHARGE_CATEGORY,Infraction or Violation,
CHARGE_CATEGORY,Summary offense,
CHARGE_CATEGORY,Misdemeanor offense,
CHARGE_CATEGORY,Felony offense,
CHARGE_CATEGORY,Other,
CRIMINAL_SENTENCE,Fined,
CRIMINAL_SENTENCE,Community Service,
CRIMINAL_SENTENCE,Imprisonment,
CRIMINAL_SENTENCE,Probation,
CRIMINAL_SENTENCE,Counseling/Treatment/Training,
CRIMINAL_SENTENCE,Other,
DOMESTIC_VIOLENCE,Spouse,
DOMESTIC_VIOLENCE,Former spouse,
DOMESTIC_VIOLENCE,Co-habitant,
DOMESTIC_VIOLENCE,Former cohabitant,
DOMESTIC_VIOLENCE,Person you were dating,
DOMESTIC_VIOLENCE,Former person you were dating,
DOMESTIC_VIOLENCE,Domestic partner,
DOMESTIC_VIOLENCE,Former domestic partner,
DOMESTIC_VIOLENCE,Parent,
DOMESTIC_VIOLENCE,Child,
DOMESTIC_VIOLENCE,Sibling,
DOMESTIC_VIOLENCE,Grandparent,
DOMESTIC_VIOLENCE,In-law,
DOMESTIC_VIOLENCE,Other,
DRUG_TYPE,Cocaine or crack cocaine (such as rock or freebase),Cocaine or crack cocaine
DRUG_TYPE,"Stimulants (such as amphetamines, speed, crystal meth, or ecstasy)",Stimulants
DRUG_TYPE,"Depressants (such as barbiturates, methaqualone, or tranquilizers)",Depressants
DRUG_TYPE,Ketamine (such as special K or jet),Ketamine
DRUG_TYPE,"Narcotics (such as opium, morphine, codeine, or heroin)",Narcotics
DRUG_TYPE,"Hallucinogenic (such as LSD, PCP, or mushrooms)",Hallucinogenic
DRUG_TYPE,Steroids (such as the clear or juice),Steroids
DRUG_TYPE,Inhalants (such as toluene or amyl nitrate),Inhalants
DRUG_TYPE,Other,
PUBLIC_SAFETY_JOB,Police/law enforcement officer,
PUBLIC_SAFETY_JOB,Parole/probation officer,
PUBLIC_SAFETY_JOB,911 dispatcher,
PUBLIC_SAFETY_JOB,Correction officer,
PUBLIC_SAFETY_JOB,Lawyer,
PUBLIC_SAFETY_JOB,Court official,
PUBLIC_SAFETY_JOB,Firefighter,
PUBLIC_SAFETY_JOB,EMS,
PUBLIC_SAFETY_JOB,Medical and health services member,
PUBLIC_SAFETY_JOB,Emergency response team member,
PUBLIC_SAFETY_JOB,Other,
COUNSELING_ORDERED_BY,Employer,
COUNSELING_ORDERED_BY,Military Commander,
COUNSELING_ORDERED_BY,Medical Professional,
COUNSELING_ORDERED_BY,Mental Health Professional,
COUNSELING_ORDERED_BY,Court Official/Judge,
COUNSELING_ORDERED_BY,Other,
COUNSELING_VOLUNTARY,Employer,
COUNSELING_VOLUNTARY,Military Commander,
COUNSELING_VOLUNTARY,Employee Assistance Program,
COUNSELING_VOLUNTARY,Medical Professional,
COUNSELING_VOLUNTARY,Mental Health Professional,
COUNSELING_VOLUNTARY,Other,
COUNSELING_VOLUNTARY,No,
INVESTIGATING_AGENCY,CIA,Central Intelligence Agency (CIA)
INVESTIGATING_AGENCY,AFOSI,DoD - Air Force Office of Special Investigations (AFOSI)
INVESTIGATING_AGENCY,DCSA,DoD - Defense Counterintelligence and Security Agency (DCSA)
INVESTIGATING_AGENCY,DIA,DoD - Defense Intelligence Agency (DIA)
INVESTIGATING_AGENCY,NGA,DoD - National Geospatial-Intelligence Agency (NGA)
INVESTIGATING_AGENCY,NRO,DoD - National Reconnaissance Office (NRO)
INVESTIGATING_AGENCY,NSA,DoD - National Security Agency (NSA)
INVESTIGATING_AGENCY,CBP,DHS - Customs and Border Protection (CBP)
INVESTIGATING_AGENCY,FEMA,DHS � Federal Emergency Management Agency (FEMA)
INVESTIGATING_AGENCY,DHS-HQ,DHS - Headquarters (DHS-HQ)
INVESTIGATING_AGENCY,ICE,DHS - Immigration and Customs Enforcement (ICE)
INVESTIGATING_AGENCY,TSA,DHS � Transportation Security Agency (TSA)
INVESTIGATING_AGENCY,USCG,DHS � U.S. Coast Guard (USCG)
INVESTIGATING_AGENCY,USCIS,DHS � U.S. Customs and Immigration Service (USCIS)
INVESTIGATING_AGENCY,USSS,DHS - U.S. Secret Service (USSS)
INVESTIGATING_AGENCY,ATF,"DOJ - Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF)"
INVESTIGATING_AGENCY,FBI,DOJ - Federal Bureau of Investigation (FBI)
INVESTIGATING_AGENCY,DoS,Department of State (DoS)
INVESTIGATING_AGENCY,BEP,Treasury � Bureau of Engraving and Printing
INVESTIGATING_AGENCY,BFS,Treasury � Bureau of Fiscal Services
INVESTIGATING_AGENCY,MCC,Millennium Challenge Corporation
INVESTIGATING_AGENCY,OPM,Office of Personnel Management (OPM)
INVESTIGATING_AGENCY,TVA,Tennessee Valley Authority (TVA)
INVESTIGATING_AGENCY,USAID,U.S. Agency for International Development (USAID)
INVESTIGATING_AGENCY,USPC,U.S. Peace Corps (USPC)
INVESTIGATING_AGENCY,USPIS,U.S. Postal Inspection Service (USPIS)
INVESTIGATING_AGENCY,Other,
INVESTIGATING_AGENCY,I don't know,
CLEARANCE_SUSPENSION_OUTCOME,Security clearance is still suspended,
CLEARANCE_SUSPENSION_OUTCOME,Security clearance was reinstated,
CLEARANCE_SUSPENSION_OUTCOME,Security clearance was revoked,
CLEARANCE_SUSPENSION_OUTCOME,Other,
PIV_SUSPENSION_OUTCOME,PIV Credential is still suspended,
PIV_SUSPENSION_OUTCOME,PIV Credential was reinstated/reissued,
PIV_SUSPENSION_OUTCOME,PIV Credential was revoked,
PIV_SUSPENSION_OUTCOME,Other,
FEDERAL_DEBT_TYPE,Student loan,
FEDERAL_DEBT_TYPE,Home mortgage loan,
FEDERAL_DEBT_TYPE,Over payment of benefits,
FEDERAL_DEBT_TYPE,Other,
FEDERAL_NONTAX_ACTIVITY,I've increased my withholdings.,
FEDERAL_NONTAX_ACTIVITY,I'm on a payment plan.,
FEDERAL_NONTAX_ACTIVITY,My wages are being garnished.,
FEDERAL_NONTAX_ACTIVITY,"I'm using a credit counseling service, debt consolidation service, or other similar service to resolve this debt.",
FEDERAL_NONTAX_ACTIVITY,I paid this debt.,
FEDERAL_NONTAX_ACTIVITY,Other,
FEDERAL_NONTAX_ACTIVITY,None,
FEDERAL_TAX_ACTIVITY,I'm on an IRS short term payment plan (paying in 180 days or less).,I'm on an IRS short term payment plan.
FEDERAL_TAX_ACTIVITY,I'm on an IRS long-term payment plan (installment agreement--I pay monthly).,I'm on an IRS long-term payment plan.
FEDERAL_TAX_ACTIVITY,I've increased my withholdings.,
FEDERAL_TAX_ACTIVITY,The IRS temporarily delayed collecting my taxes due to financial hardship.,
FEDERAL_TAX_ACTIVITY,My wages are being garnished.,
FEDERAL_TAX_ACTIVITY,I'm using a credit counseling service debt consolidation service or other similar service to resolve my tax debt.,
FEDERAL_TAX_ACTIVITY,Other,
FEDERAL_TAX_ACTIVITY,None,
LOCATION_IT_SYSTEM,Home address,
LOCATION_IT_SYSTEM,Work address,
LOCATION_IT_SYSTEM,Other,
IT_TYPES,Classified Information,
IT_TYPES,Personally Identifiable Information,
IT_TYPES,Proprietary Information,
IT_TYPES,Other,
IT_FREQUENCY_VALUES,1,
IT_FREQUENCY_VALUES,2,
IT_FREQUENCY_VALUES,3-5,
IT_FREQUENCY_VALUES,6-10,
IT_FREQUENCY_VALUES,Other,
IT_DISCIPLINE,Workplace disciplinary or administrative actions.,
IT_DISCIPLINE,Civil actions,
IT_DISCIPLINE,Criminal actions,
IT_DISCIPLINE,Other,
IT_DISCIPLINE,No actions taken,
IT_DISCIPLINE,Security Violation or Infraction,
RELATIONSHIP_STATUS,Single (never in a civil marriage civil union domestic partnership or common law marriage),Single 
RELATIONSHIP_STATUS,In a civil marriage civil union domestic partnership or common law marriage,
RELATIONSHIP_STATUS,In a committed spouse-like relationship,
RELATIONSHIP_STATUS,Legally separated,
RELATIONSHIP_STATUS,Annulled,
RELATIONSHIP_STATUS,Divorced/Dissolved,
RELATIONSHIP_STATUS,Widowed,
RELATIONSHIP_STATUS,Common/co-parent,
NATURALIZED_DOC,Form N-550 or Form N-570 (Certificate of Naturalization),Form N-550 or Form N-570 
NATURALIZED_DOC,Form I-551 (Permanent Resident Card/Resident Alien Card),Form I-551 
NATURALIZED_DOC,Form I-551 (Machine Readable Immigrant Visa (MRIV)),Form I-551
NATURALIZED_DOC,Other,
DERIVED_DOC,Certificate of Citizenship (Form N-560 or Form N-561),Certificate of Citizenship
DERIVED_DOC,Permanent Resident Card/Resident Alien Card (Form I-551),Permanent Resident Card/Resident Alien Card 
DERIVED_DOC,Machine Readable Immigrant Visa (MRIV),Machine Readable Immigrant Visa 
DERIVED_DOC,Other,
NON_US_CIT_DOC,I-551 Permanent Resident,
NON_US_CIT_DOC,I-766 Employment Authorization,
NON_US_CIT_DOC,Machine Readable Immigrant Visa (MRIV),Machine Readable Immigrant Visa 
NON_US_CIT_DOC,I-94 Arrival-Departure Record,
NON_US_CIT_DOC,U.S. Visa (Red foil number),U.S. Visa 
NON_US_CIT_DOC,I-20 Certificate of Eligibility for Non-Immigrant-F1-Student,
NON_US_CIT_DOC,DS-2019 Certificate of Eligibility of Exchange Visitor-J1-Status,
NON_US_CIT_DOC,Other,
OTHER_NAMES,Name prior to marriage,
OTHER_NAMES,Former married name,
OTHER_NAMES,Nickname,
OTHER_NAMES,Alias,
OTHER_NAMES,Former legal name,
OTHER_NAMES,Other,
RELATIVES,Parent,
RELATIVES,Step parent,
RELATIVES,Foster parent,
RELATIVES,Child (including adopted/foster),Child 
RELATIVES,Stepchild,
RELATIVES,Sibling,
RELATIVES,Step Sibling,
RELATIVES,Half Sibling,
RELATIVES,Parent-in-law,
RELATIVES,Guardian,
CONTACT_METHOD,In-person,
CONTACT_METHOD,Telephone,
CONTACT_METHOD,Electronic means (for example email texting chat rooms),Electronic means 
CONTACT_METHOD,Written correspondence,
CONTACT_METHOD,Other,
CONTACT_METHOD,None,
BANKRUPTCY  ,Chapter 7 (Liquidation),Chapter 7
BANKRUPTCY  ,Chapter 11 (Reorganization),Chapter 11 
BANKRUPTCY  ,Chapter 12 (Adjustment of Debts of a Family Farmer with Regular Annual Income),Chapter 12
BANKRUPTCY  ,Chapter 13 (Adjustment of Debts of an Individual with Regular Annual Income),Chapter 13 
BANKRUPTCY  ,Chapter 15 (Ancillary and Other Cross-Border Cases),Chapter 15 
EVICTING_ENTITY,Company,
EVICTING_ENTITY,Government Agency,
EVICTING_ENTITY,Individual,
EVICTING_ENTITY,Other,
LIEN_PROPERTY,Home (primary residence),Home
LIEN_PROPERTY,Vehicle,
LIEN_PROPERTY,Boat/Plane,
LIEN_PROPERTY,"Real estate, land, property (other than your primary residence)","Real estate, land, property "
LIEN_PROPERTY,Jewelry,
LIEN_PROPERTY,All of my property,
LIEN_PROPERTY,You (a general lien against you as an individual),You
LIEN_PROPERTY,Other personal property,
LIEN_REASON,Fulfill a home loan agreement (mortgage lien),Fulfill a home loan agreement
LIEN_REASON,Fulfill an auto loan agreement (auto lien),Fulfill an auto loan agreement
LIEN_REASON,Pay a civil judgment (judgment lien),Pay a civil judgment 
LIEN_REASON,Pay Federal taxes (tax lien),Pay Federal taxes 
LIEN_REASON,Pay state taxes (tax lien),Pay state taxes
LIEN_REASON,Pay local taxes (tax lien),Pay local taxes
LIEN_REASON,Pay child support,
LIEN_REASON,Pay alimony,
LIEN_REASON,Pay for medical services after receiving a personal injury award,
LIEN_REASON,Pay a credit card company,
LIEN_REASON,Pay attorney fees,
LIEN_REASON,Pay condominium or homeowner's association fees,
LIEN_REASON,"Pay a mechanic, laborer, or material provider (i.e., contractor's lien, mechanic's lien, construction lien)","Pay a mechanic, laborer, or material provider "
LIEN_REASON,Pay an employee's salary,
LIEN_REASON,Pay for jewelry,
LIEN_REASON,Pay for storage unit,
LIEN_REASON,Pay for parking garage,
LIEN_REASON,Other,
FORECLOSURE_PROPERTY,Primary residence,
FORECLOSURE_PROPERTY,Secondary residence,
FORECLOSURE_PROPERTY,Residence that I cosigned for or was guarantor for,
FORECLOSURE_PROPERTY,Plot of land,
FORECLOSURE_PROPERTY,Rental property,
FORECLOSURE_PROPERTY,Commercial property,
FORECLOSURE_PROPERTY,Other,
REPOSSESSED_PROPERTY,"Vehicle (automobile, motorcycle, recreational vehicle)",Vehicle
REPOSSESSED_PROPERTY,"Rent-to-own items (e.g., appliances, electronics, furniture, jewelry, etc.)",Rent-to-own items 
REPOSSESSED_PROPERTY,Other personal property,
ITEMS_SEIZED,Wages,
ITEMS_SEIZED,Benefits,
ITEMS_SEIZED,Other assets,
TAX_TYPE,State taxes,
TAX_TYPE,"Property tax (for example, real estate property)",Property tax 
TAX_TYPE,"Personal property tax (for example, for a car or boat)",Personal property tax 
TAX_TYPE,Other,
TAX_ACTIVITY,I'm on a payment plan.,
TAX_ACTIVITY,My wages are being garnished.,
TAX_ACTIVITY,"I'm using a credit counseling service, debt consolidation service, or other similar service to help resolve my debt.",
TAX_ACTIVITY,Other,
TAX_ACTIVITY,None,
TRAVEL_CARD_DISCIPLINE,Travel/credit card withdrawn,
TRAVEL_CARD_DISCIPLINE,Additional training or counseling,
TRAVEL_CARD_DISCIPLINE,Verbal reprimand/admonishment/warning,
TRAVEL_CARD_DISCIPLINE,Written reprimand/admonishment/counseling/warning,
TRAVEL_CARD_DISCIPLINE,Temporary Pay Cut,
TRAVEL_CARD_DISCIPLINE,Wage Garnishment,
TRAVEL_CARD_DISCIPLINE,Suspended,
TRAVEL_CARD_DISCIPLINE,Demoted,
TRAVEL_CARD_DISCIPLINE,Terminated/Fired/Dismissed/Discharged (military),Terminated/Fired/Dismissed/Discharged
TRAVEL_CARD_DISCIPLINE,Criminal action,
TRAVEL_CARD_DISCIPLINE,UCMJ action,
TRAVEL_CARD_DISCIPLINE,Other,
TRAVEL_CARD_ACTIVITY,I paid all unauthorized expenses.,
TRAVEL_CARD_ACTIVITY,I am successfully meeting the terms of a payment plan.,
TRAVEL_CARD_ACTIVITY,I have my pay garnished.,
TRAVEL_CARD_ACTIVITY,"I'm using a credit counseling service, debt consolidation service, or other similar service to resolve this financial obligation.",
TRAVEL_CARD_ACTIVITY,I completed additional training or counseling.,
TRAVEL_CARD_ACTIVITY,I'm using my agency's or employer's Employee Assistance Program (EAP).,I'm using my agency's or employer's Employee Assistance Program.
TRAVEL_CARD_ACTIVITY,Other,
TRAVEL_CARD_ACTIVITY,None,
CIVIL_COURT_OUTCOME,I was awarded damages,
CIVIL_COURT_OUTCOME,I was awarded restitution,
CIVIL_COURT_OUTCOME,I was awarded other remedies,
CIVIL_COURT_OUTCOME,I had to pay damages,
CIVIL_COURT_OUTCOME,I had to make restitution,
CIVIL_COURT_OUTCOME,I had to do other remedies,
CIVIL_COURT_OUTCOME,Other,
FOREIGN_NATIONAL_RELATIONSHIP,Friend,
FOREIGN_NATIONAL_RELATIONSHIP,Schoolmate,
FOREIGN_NATIONAL_RELATIONSHIP,Neighbor,
FOREIGN_NATIONAL_RELATIONSHIP,Work Associate,
FOREIGN_NATIONAL_RELATIONSHIP,Landlord,
FOREIGN_NATIONAL_RELATIONSHIP,Other,
FOREIGN_NATIONAL_WORK,Military or Armed Forces,
FOREIGN_NATIONAL_WORK,Security Service,
FOREIGN_NATIONAL_WORK,Intelligence Service,
FOREIGN_NATIONAL_WORK,Other Government Agency,
FOREIGN_NATIONAL_WORK,Defense Industry,
FOREIGN_NATIONAL_WORK,"Foreign Movement (such as a social, political, or religious movement)",Foreign Movement 
FOREIGN_NATIONAL_WORK,They are not associated with any of the above.,
FAMILY_FOREIGN_INTEREST,Myself,
FAMILY_FOREIGN_INTEREST,"Spouse or legally recognized partner from a civil marriage, civil union, domestic partnership, or common law marriage",
FAMILY_FOREIGN_INTEREST,"Person with whom you're in a committed, spouse-like relationship",
FAMILY_FOREIGN_INTEREST,Dependent children,
COOWNER_FOREIGN_FINANCIAL,Yourself,
COOWNER_FOREIGN_FINANCIAL,"Spouse or legally recognized partner from a civil marriage, civil union, domestic partnership, or common law marriage",
COOWNER_FOREIGN_FINANCIAL,Person with whom you're in a committed or spouse-like relationship,
COOWNER_FOREIGN_FINANCIAL,Dependent children,
COOWNER_FOREIGN_FINANCIAL,Other relative,
COOWNER_FOREIGN_FINANCIAL,Friend,
COOWNER_FOREIGN_FINANCIAL,Business Associate,
COOWNER_FOREIGN_FINANCIAL,Other,
COOWNER_FOREIGN_FINANCIAL,Common/co-parent,
FOREIGN_FINANCIAL_INTEREST,Stocks,
FOREIGN_FINANCIAL_INTEREST,Bonds,
FOREIGN_FINANCIAL_INTEREST,Ownership of corporate entities,
FOREIGN_FINANCIAL_INTEREST,Corporate interests held in specific geographical or economic sectors,
FOREIGN_FINANCIAL_INTEREST,Exchange traded funds (ETFs) held in specific geographical or economic sectors,
FOREIGN_FINANCIAL_INTEREST,Real estate in a foreign country,
FOREIGN_FINANCIAL_INTEREST,Other Property (non-real estate),
FOREIGN_FINANCIAL_INTEREST,Investments,
FOREIGN_FINANCIAL_INTEREST,Bank Account,
FOREIGN_FINANCIAL_INTEREST,Other (Do not list financial interests in companies or diversified mutual funds or diversified ETFs that are publicly traded on a U.S. exchange.),
REAL_ESTATE,Home,
REAL_ESTATE,Business,
REAL_ESTATE,Land,
REAL_ESTATE,Other,
INTEREST_ACQUIRED,Bought it,
INTEREST_ACQUIRED,It was a gift,
INTEREST_ACQUIRED,Inherited it,
INTEREST_ACQUIRED,Other,
INTEREST_RELINQUISHED,Sold it,
INTEREST_RELINQUISHED,Lost it,
INTEREST_RELINQUISHED,Gave it away,
INTEREST_RELINQUISHED,Other,
CONTROLLER_FOREIGN_FINANCIAL,Company or organization controlled,
CONTROLLER_FOREIGN_FINANCIAL,Another person controlled (other than the owner or co-owner),
CONTROLLER_FOREIGN_FINANCIAL,No one controlled this foreign financial interest on the owner or co-owner's behalf,
CONTROLLER_FOREIGN_FINANCIAL,Other,
FOREIGN_BENEFIT,Educational,
FOREIGN_BENEFIT,Medical,
FOREIGN_BENEFIT,Retirement,
FOREIGN_BENEFIT,Social Welfare,
FOREIGN_BENEFIT,Other,
IMMEDIATE_FAMILY,Myself,
IMMEDIATE_FAMILY,"Spouse or legally recognized partner from a civil marriage, civil union, domestic partnership, or common law marriage",
IMMEDIATE_FAMILY,"Person with whom you're in a committed, spouse-like relationship",
IMMEDIATE_FAMILY,Parent,
IMMEDIATE_FAMILY,Stepparent,
IMMEDIATE_FAMILY,Child (including adopted/foster),
IMMEDIATE_FAMILY,Stepchild,
IMMEDIATE_FAMILY,Sibling,
IMMEDIATE_FAMILY,Stepsibling,
IMMEDIATE_FAMILY,Half-sibling,
IMMEDIATE_FAMILY,Parent-in-law,
IMMEDIATE_FAMILY,Guardian,
ROLE_BUSINESS_VENTURE,I owned the business,
ROLE_BUSINESS_VENTURE,I co-owned the business,
ROLE_BUSINESS_VENTURE,I was a business consultant,
ROLE_BUSINESS_VENTURE,I provided financial support,
ROLE_BUSINESS_VENTURE,Other,
FOREIGN_AGENCY_VALUE,Military or Armed Forces,
FOREIGN_AGENCY_VALUE,Intelligence Service,
FOREIGN_AGENCY_VALUE,Security Service,
FOREIGN_AGENCY_VALUE,Diplomatic Service,
FOREIGN_AGENCY_VALUE,Embassy,
FOREIGN_AGENCY_VALUE,Consulate,
FOREIGN_AGENCY_VALUE,Other,
FOREIGN_AGENCY_VALUE,I don't know,
SPONSOR_FOREIGNNATIONAL_REASON,So they could attend school in the U.S.,
SPONSOR_FOREIGNNATIONAL_REASON,So they could work in the U.S.,
SPONSOR_FOREIGNNATIONAL_REASON,So they could pursue permanent U.S. residency,
SPONSOR_FOREIGNNATIONAL_REASON,Other,
CRIMINAL_OUTCOMES_ONEYEARPLUS,Not guilty,
CRIMINAL_OUTCOMES_ONEYEARPLUS,Nolle Prosequi,
CRIMINAL_OUTCOMES_ONEYEARPLUS,Charge dismissed or disposed of,
CRIMINAL_OUTCOMES_ONEYEARPLUS,Guilty,
CRIMINAL_OUTCOMES_ONEYEARPLUS,Other,
FEDERAL_AGENCY,ABMC,American Battle Monuments Commission
FEDERAL_AGENCY,ACCESS,Architectural and Transportation Barriers Compliance Board 
FEDERAL_AGENCY,ACFR,Administrative Committee of the Federal Register
FEDERAL_AGENCY,ACHP,Advisory Council on Historic Preservation
FEDERAL_AGENCY,ACUS,Administrative Conference of the United States
FEDERAL_AGENCY,ADF,African Development Foundation
FEDERAL_AGENCY,AMICC,Arthritis and Musculoskeletal Interagency Coordinating Committee
FEDERAL_AGENCY,AMTRAK,National Railroad Passenger Corporation 
FEDERAL_AGENCY,ARC,Appalachian Regional Commission
FEDERAL_AGENCY,ARCTIC,Arctic Research Commission
FEDERAL_AGENCY,BBG,Broadcasting Board of Governors 
FEDERAL_AGENCY,BMGS,Barry M. Goldwater Scholarship and Excellence in Education Foundation
FEDERAL_AGENCY,CAOC,Chief Acquisition Officers Council
FEDERAL_AGENCY,CCJJ,Coordinating Council on Juvenile Justice and Delinquency Prevention
FEDERAL_AGENCY,CCR,Commission on Civil Rights
FEDERAL_AGENCY,CEA,United States Council of Economic Advisers
FEDERAL_AGENCY,CFA,Commission of Fine Arts
FEDERAL_AGENCY,CFI,Committee on Foreign Investments in the United States
FEDERAL_AGENCY,CFOC,Chief Financial Officers Council
FEDERAL_AGENCY,CFTC,Commodity Futures Trading Commission
FEDERAL_AGENCY,CHCOC,Chief Human Capital Officers Council
FEDERAL_AGENCY,CIA,Central Intelligence Agency 
FEDERAL_AGENCY,CIOC,Chief Information Officers Council
FEDERAL_AGENCY,CIRF,Commission on International Religious Freedom
FEDERAL_AGENCY,CITA,Committee for the Implementation of Textile Agreements
FEDERAL_AGENCY,CNCS,Corporation for National and Community Service
FEDERAL_AGENCY,COMP,Office of Compliance
FEDERAL_AGENCY,CPSC,Consumer Product Safety Commission 
FEDERAL_AGENCY,CSAC,Citizens' Stamp Advisory Committee
FEDERAL_AGENCY,CSHIB,Chemical Safety and Hazard Investigation Board
FEDERAL_AGENCY,CSOSA,Court Services and Offender Supervision Agency for the District of Columbia
FEDERAL_AGENCY,DEA,Drug Enforcement Administration
FEDERAL_AGENCY,DENALI,Denali Commission
FEDERAL_AGENCY,DFC,U.S. International Development Finance Corporation
FEDERAL_AGENCY,DHS,Department of Homeland Security 
FEDERAL_AGENCY,DIA,Defense Intelligence Agency
FEDERAL_AGENCY,DNFSB,Defense Nuclear Facilities Safety Board
FEDERAL_AGENCY,DNI,Office of the Director of National Intelligence
FEDERAL_AGENCY,DOC,Department of Commerce 
FEDERAL_AGENCY,DOD,Department of Defense 
FEDERAL_AGENCY,DOE,Department of Energy 
FEDERAL_AGENCY,DOI,Department of the Interior 
FEDERAL_AGENCY,DOJ,Department of Justice 
FEDERAL_AGENCY,DOL,Department of Labor 
FEDERAL_AGENCY,DOT,Department of Transportation 
FEDERAL_AGENCY,DRBC,Delaware River Basin Commission
FEDERAL_AGENCY,EAC,United States Election Assistance Commission
FEDERAL_AGENCY,ED,Department of Education 
FEDERAL_AGENCY,EEOC,Equal Employment Opportunity Commission 
FEDERAL_AGENCY,EIBUS,Export-Import Bank of the United States
FEDERAL_AGENCY,EOP,Executive Office of the President
FEDERAL_AGENCY,EPA,Environmental Protection Agency 
FEDERAL_AGENCY,ESC,Endangered Species Committee
FEDERAL_AGENCY,FAC,Federal Advisory Committees
FEDERAL_AGENCY,FASAB,Federal Accounting Standards Advisory Board
FEDERAL_AGENCY,FBI,Federal Bureau of Investigation
FEDERAL_AGENCY,FCA,Farm Credit Administration
FEDERAL_AGENCY,FCC,Federal Communications Commission 
FEDERAL_AGENCY,FCIC,Financial Crisis Inquiry Commission
FEDERAL_AGENCY,FCSIC,Farm Credit System Insurance Corporation
FEDERAL_AGENCY,FDIC,Federal Deposit Insurance Corporation 
FEDERAL_AGENCY,FEB,Federal Executive Boards
FEDERAL_AGENCY,FEC,Federal Election Commission 
FEDERAL_AGENCY,FERC,Federal Energy Regulatory Commission
FEDERAL_AGENCY,FFB,Federal Financing Bank
FEDERAL_AGENCY,FFIEC,Federal Financial Institutions Examination Council
FEDERAL_AGENCY,FGDC,Federal Geographic Data Committee
FEDERAL_AGENCY,FHRA,Federal Housing Finance Agency
FEDERAL_AGENCY,FICE,Federal Interagency Committee on Education
FEDERAL_AGENCY,FICMNEW,Federal Interagency Committee for the Management of Noxious and Exotic Weeds
FEDERAL_AGENCY,FICSP,Federal Interagency Council on Statistical Policy
FEDERAL_AGENCY,FLCTT,Federal Laboratory Consortium for Technology Transfer
FEDERAL_AGENCY,FLICC,Federal Library and Information Center Committee
FEDERAL_AGENCY,FLRA,Federal Labor Relations Authority
FEDERAL_AGENCY,FMC,Federal Maritime Commission
FEDERAL_AGENCY,FMCS,Federal Mediation and Conciliation Service
FEDERAL_AGENCY,FMSHRC,Federal Mine Safety and Health Review Commission
FEDERAL_AGENCY,FRS,Federal Reserve System
FEDERAL_AGENCY,FRTIB,Federal Retirement Thrift Investment Board
FEDERAL_AGENCY,FTC,Federal Trade Commission 
FEDERAL_AGENCY,GSA,General Services Administration 
FEDERAL_AGENCY,HELSINKI,Commission on Security and Cooperation in Europe 
FEDERAL_AGENCY,HHS,Department of Health and Human Services 
FEDERAL_AGENCY,HMM,United States Holocaust Memorial Museum
FEDERAL_AGENCY,HSTSF,Harry S. Truman Scholarship Foundation
FEDERAL_AGENCY,HUD,Department of Housing and Urban Development 
FEDERAL_AGENCY,IACB,Indian Arts and Crafts Board
FEDERAL_AGENCY,IADRWG,Interagency Alternative Dispute Resolution Working Group
FEDERAL_AGENCY,IAF,Inter-American Foundation
FEDERAL_AGENCY,IBB,International Broadcasting Bureau 
FEDERAL_AGENCY,ICH,Interagency Council on Homelessness
FEDERAL_AGENCY,ICPRB,Interstate Commission on the Potomac River Basin
FEDERAL_AGENCY,IMCNHCC,Illinois and Michigan Canal National Heritage Corridor Commission
FEDERAL_AGENCY,IMLS,Institute of Museum and Library Services
FEDERAL_AGENCY,ITC,United States International Trade Commission
FEDERAL_AGENCY,JBEA,Joint Board for the Enrollment of Actuaries
FEDERAL_AGENCY,JFSP,Joint Fire Science Program
FEDERAL_AGENCY,JMMFF,James Madison Memorial Fellowship Foundation
FEDERAL_AGENCY,JUSFC,Japan-United States Friendship Commission
FEDERAL_AGENCY,JWFFSB,J. William Fulbright Foreign Scholarship Board
FEDERAL_AGENCY,LSC,Legal Services Corporation
FEDERAL_AGENCY,MBCC,Migratory Bird Conservation Commission
FEDERAL_AGENCY,MCC,Millennium Challenge Corporation
FEDERAL_AGENCY,MKUF,Morris K. Udall Foundation: Scholarship and Excellence in National Environmental Policy
FEDERAL_AGENCY,MMC,Marine Mammal Commission
FEDERAL_AGENCY,MRC,Mississippi River Commission
FEDERAL_AGENCY,MSPB,Merit Systems Protection Board
FEDERAL_AGENCY,NARA,National Archives and Records Administration 
FEDERAL_AGENCY,NASA,National Aeronautics and Space Administration 
FEDERAL_AGENCY,NBCFM,National Bipartisan Commission on the Future of Medicare
FEDERAL_AGENCY,NCD,National Council on Disability
FEDERAL_AGENCY,NCFRR,National Commission on Fiscal Responsibility and Reform
FEDERAL_AGENCY,NCPC,National Capital Planning Commission
FEDERAL_AGENCY,NCUA,National Credit Union Administration 
FEDERAL_AGENCY,NEA,National Endowment for the Arts
FEDERAL_AGENCY,NEH,National Endowment for the Humanities
FEDERAL_AGENCY,NGA,National Geospatial-Intelligence Agency
FEDERAL_AGENCY,NIGC,National Indian Gaming Commission
FEDERAL_AGENCY,NLRB,National Labor Relations Board 
FEDERAL_AGENCY,NMB,National Mediation Board
FEDERAL_AGENCY,NPF,National Park Foundation
FEDERAL_AGENCY,NPPC,Northwest Power Planning Council
FEDERAL_AGENCY,NRC,Nuclear Regulatory Commission 
FEDERAL_AGENCY,NRO,National Reconnaissance Office
FEDERAL_AGENCY,NSA,National Security Agency
FEDERAL_AGENCY,NSF,National Science Foundation 
FEDERAL_AGENCY,NTSB,National Transportation Safety Board
FEDERAL_AGENCY,NWTRB,Nuclear Waste Technical Review Board
FEDERAL_AGENCY,OGE,Office of Government Ethics
FEDERAL_AGENCY,OMB,Office of Management and Budget
FEDERAL_AGENCY,ONCIX,Office of the National Counterintelligence Executive
FEDERAL_AGENCY,OPIC,Overseas Private Investment Corporation
FEDERAL_AGENCY,OPM,Office of Personnel Management
FEDERAL_AGENCY,OSC,Office of Special Counsel
FEDERAL_AGENCY,OSHRC,Occupational Safety and Health Review Commission
FEDERAL_AGENCY,OVP,Office of the Vice President
FEDERAL_AGENCY,PBGC,Pension Benefit Guaranty Corporation
FEDERAL_AGENCY,PCC,Panama Canal Commission
FEDERAL_AGENCY,PEACE,Peace Corps
FEDERAL_AGENCY,PRC,Postal Regulatory Commission
FEDERAL_AGENCY,PRESIDIO,Presidio Trust
FEDERAL_AGENCY,RISC,Regulatory Information Service Center
FEDERAL_AGENCY,RRB,Railroad Retirement Board
FEDERAL_AGENCY,SBA,Small Business Administration 
FEDERAL_AGENCY,SEC,Securities and Exchange Commission 
FEDERAL_AGENCY,SJI,State Justice Institute
FEDERAL_AGENCY,SMITH,Smithsonian Institution
FEDERAL_AGENCY,SRBC,Susquehanna River Basin Commission
FEDERAL_AGENCY,SSA,Social Security Administration 
FEDERAL_AGENCY,SSAB,Social Security Advisory Board
FEDERAL_AGENCY,SSS,Selective Service System
FEDERAL_AGENCY,STATE,Department of State 
FEDERAL_AGENCY,TAP,Taxpayer Advocacy Panel
FEDERAL_AGENCY,TDA,U.S. Trade and Development Agency
FEDERAL_AGENCY,TREAS,Department of the Treasury
FEDERAL_AGENCY,TVA,Tennessee Valley Authority
FEDERAL_AGENCY,USA,US Army
FEDERAL_AGENCY,USAF,US Air Force
FEDERAL_AGENCY,USAID,United States Agency for International Development
FEDERAL_AGENCY,USAOC,U.S. AbilityOne Commission
FEDERAL_AGENCY,USCG,US Coast Guard
FEDERAL_AGENCY,USDA,Department of Agriculture 
FEDERAL_AGENCY,USIP,United States Institute of Peace
FEDERAL_AGENCY,USMC,US Marine Corps
FEDERAL_AGENCY,USN,US Navy
FEDERAL_AGENCY,USPS,United States Postal Service 
FEDERAL_AGENCY,USSF,United States Space Force 
FEDERAL_AGENCY,USTR,United States Office of the Trade Representative
FEDERAL_AGENCY,USUN,United States Mission to the United Nations
FEDERAL_AGENCY,VA,Department of Veterans Affairs 
FEDERAL_AGENCY,VDNC,Veterans Day National Committee
FEDERAL_AGENCY,VEF,Vietnam Educational Foundation
FEDERAL_AGENCY,WHCPS,White House Commission on Presidential Scholars: Presidential Scholars Program
FEDERAL_AGENCY,WHMO,White House Military Office
FEDERAL_AGENCY,AOC,Architect of the Capitol
FEDERAL_AGENCY,CBO,Congressional Budget Office 
FEDERAL_AGENCY,CRS,Congressional Research Service
FEDERAL_AGENCY,GAO,Government Accountability Office 
FEDERAL_AGENCY,GPO,Government Printing Office 
FEDERAL_AGENCY,H-ADM,Committee on House Administration
FEDERAL_AGENCY,H-AGR,House Committee on Agriculture
FEDERAL_AGENCY,H-APP,House Committee on Appropriations
FEDERAL_AGENCY,H-ARM,House Armed Services Committee
FEDERAL_AGENCY,H-BUD,House Committee on the Budget
FEDERAL_AGENCY,H-CAO,House Office of the Chief Administrative Officer
FEDERAL_AGENCY,H-CHAP,House Office of the Chaplain
FEDERAL_AGENCY,H-CLRK,House Office of the Clerk
FEDERAL_AGENCY,H-EC,House Committee on Ethics
FEDERAL_AGENCY,H-EDW,House Education and the Workforce Committee
FEDERAL_AGENCY,H-E_C,House Energy and Commerce Committee
FEDERAL_AGENCY,H-FIN,House Committee on Financial Services
FEDERAL_AGENCY,H-FOR,House Committee on Foreign Affairs
FEDERAL_AGENCY,H-HIST,House Office of the Historian
FEDERAL_AGENCY,H-HLS,House Committee on Homeland Security
FEDERAL_AGENCY,H-JUD,House Judiciary Committee
FEDERAL_AGENCY,H-LDRS,House Leadership
FEDERAL_AGENCY,H-LRC,House Office of the Law Revision Counsel
FEDERAL_AGENCY,H-NAT,House Committee on Natural Resources
FEDERAL_AGENCY,H-OGR,House Committee on Oversight and Government Reform
FEDERAL_AGENCY,H-OIG,House Office of the Inspector General
FEDERAL_AGENCY,H-OLC,House Office of the Legislative Counsel
FEDERAL_AGENCY,H-PAR,House Office of the Parliamentarian
FEDERAL_AGENCY,H-RUL,House Committee on Rules
FEDERAL_AGENCY,H-SAA,House Office of the Sergeant at Arms
FEDERAL_AGENCY,H-SCI,"House Committee on Science, Space, and Technology"
FEDERAL_AGENCY,H-SMB,House Committee on Small Business
FEDERAL_AGENCY,H-T_I,House Transportation and Infrastructure Committee
FEDERAL_AGENCY,H-VET,House Committee on Veterans� Affairs
FEDERAL_AGENCY,H-W_M,House Committee on Ways and Means
FEDERAL_AGENCY,HPSCI,House Permanent Select Committee on Intelligence
FEDERAL_AGENCY,J-JCP,Joint Committee on Printing
FEDERAL_AGENCY,J-JCT,Joint Committee on Taxation
FEDERAL_AGENCY,J-JEC,Joint Economic Committee 
FEDERAL_AGENCY,JCLDS,Joint Committee on the Library
FEDERAL_AGENCY,LOC,Library of Congress
FEDERAL_AGENCY,MACPAC,Medicaid and CHIP Payment and Access Commission
FEDERAL_AGENCY,MedPAC,Medicare Payment Advisory Commission
FEDERAL_AGENCY,OWLC,Open World Leadership Center
FEDERAL_AGENCY,S-AGE,Senate Special Committee on Aging
FEDERAL_AGENCY,S-AGR,"Senate Committee on Agriculture, Nutrition, and Forestry"
FEDERAL_AGENCY,S-APP,Senate Committee on Appropriations
FEDERAL_AGENCY,S-ARM,Senate Committee on Armed Services
FEDERAL_AGENCY,S-BNK,"Senate Committee on Banking, Housing, and Urban Affairs"
FEDERAL_AGENCY,S-BUD,Senate Budget Committee
FEDERAL_AGENCY,S-CHAP,Senate Office of the Chaplain
FEDERAL_AGENCY,S-COE,Senate Select Committee on Ethics
FEDERAL_AGENCY,S-CST,"Senate Committee on Commerce, Science, and Transportation"
FEDERAL_AGENCY,S-ENR,Senate Committee on Energy and Natural Resources
FEDERAL_AGENCY,S-EPW,Senate Committee on Environment and Public Works
FEDERAL_AGENCY,S-FIN,Senate Committee on Finance
FEDERAL_AGENCY,S-FOR,Senate Committee on Foreign Relations
FEDERAL_AGENCY,S-HELP,"Senate Committee on Health, Education, Labor, and Pensions"
FEDERAL_AGENCY,S-HSG,Senate Committee on Homeland Security and Governmental Affairs
FEDERAL_AGENCY,S-IND,Senate Committee on Indian Affairs
FEDERAL_AGENCY,S-JUD,"Senate Committee on the Judiciary"""
FEDERAL_AGENCY,S-LDRS,Senate Leadership
FEDERAL_AGENCY,S-MAJSEC,Senate Office of the Secretary for the Majority
FEDERAL_AGENCY,S-MINSEC,Senate Office of the Secretary for the Minority
FEDERAL_AGENCY,S-PAR,Senate Office of the Parliamentarian
FEDERAL_AGENCY,S-R_A,Senate Committee on Rules and Administration
FEDERAL_AGENCY,S-SAA,Senate Office of the Sergeant at Arms
FEDERAL_AGENCY,S-SEC,Office of the Secretary of the Senate
FEDERAL_AGENCY,S-SMB,Senate Committee on Small Business and Entrepreneurship
FEDERAL_AGENCY,S-VET,Senate Committee on Veterans� Affairs
FEDERAL_AGENCY,SCPS,Stennis Center for Public Service
FEDERAL_AGENCY,SSCI,Senate Select Committee on Intelligence
FEDERAL_AGENCY,USBG,U.S. Botanic Garden
FEDERAL_AGENCY,USCO,Copyright Office
FEDERAL_AGENCY,USCP,U.S. Capitol Police
FEDERAL_AGENCY,OtherUSG,Other United State Federal Government
FEDERAL_AGENCY,SLT,"State, Local, Tribal Government"
YES_NO_DONTKNOW,Yes,
YES_NO_DONTKNOW,No,
YES_NO_DONTKNOW,I don't know,
YES_NO_NOTAPPLICABLE,Yes,
YES_NO_NOTAPPLICABLE,No,
YES_NO_NOTAPPLICABLE,Not applicable,
`.trim();

function parseCSV(csvText) {
    const rows = [];
    let currentRow = [];
    let currentValue = '';
    let insideQuotes = false;

    for (let i = 0; i < csvText.length; i++) {
        const char = csvText[i];
        const nextChar = csvText[i + 1];

        if (char === '"') {
            if (insideQuotes && nextChar === '"') {
                // Handle escaped quotes ("") inside quoted values
                currentValue += '"';
                i++; // Skip next quote
            } else {
                // Toggle quote state
                insideQuotes = !insideQuotes;
            }
        } else if (char === ',' && !insideQuotes) {
            // End of field
            currentRow.push(currentValue.trim());
            currentValue = '';
        } else if (char === '\n' && !insideQuotes) {
            // End of row
            currentRow.push(currentValue.trim());
            rows.push(currentRow);
            currentRow = [];
            currentValue = '';
        } else {
            currentValue += char;
        }
    }

    // Handle last value
    if (currentValue || currentRow.length > 0) {
        currentRow.push(currentValue.trim());
        rows.push(currentRow);
    }

    return rows;
}

const DROPDOWN_VALUES = {};
for (const row of parseCSV(DROPDOWN_VALUES_CSV)) {
    const listName = row[0];
    const value = row[1];
    if (!DROPDOWN_VALUES[listName]) {
        DROPDOWN_VALUES[listName] = [];
    }
    DROPDOWN_VALUES[listName].push(value);
}


function coalesce(s, defaultValue) {
    if (s == null || s.trim().length == 0) {
        return defaultValue;
    } else {
        return s;
    }
}

function parseSection(rawSection) {
    const match = /^([0-9]+)_([a-zA-Z]+)/.exec(rawSection);
    console.assert(match != null, "Bogus section name: %s", rawSection);
    return [Number(match[1]), match[2]];
}

function recursiveSet(context, path, value) {
    const parts = path.split('.');
    const key = parts[0];

    if (parts.length === 1) {
        context[key] = value;
        return;
    }

    if (!context[key] || typeof context[key] !== 'object') {
        context[key] = {};
    }

    recursiveSet(context[key], parts.slice(1).join('.'), value);
}

function parseDelimitedString(s, delimiter) {
    const trimmed = s.trim();
    if (trimmed.length == 0) {
        return [];
    }
    return trimmed.split(delimiter).map(part => part.trim());
}

function parseRow(row) {
    console.assert(row.length >= 11, "BAD ROW, not enough columns row=%o colCount=%s", row, row.length);
    row = row.map(s => s.trim());
    const section = row[1];
    const checkboxes = parseDelimitedString(row[6], "|");
    const dropdownList = row[7];
    const groupPath = parseDelimitedString(row[10], '.');
    const propertyName = row[11];

    console.assert(propertyName, "BAD ROW, no property name row=%o", row);

    const output = {
        "part": row[0],
        "section": section,
        "questionText": row[4],
        "dataType": row[5],
        "checkboxes": checkboxes,
        "dropdownList": dropdownList,
        "groupPath": groupPath,
        "propertyName": propertyName
    };

    if (section == "generalInformation") {
        console.debug("ROW raw=%o parsed=%o", row, output);
    }

    return output;

}

TYPE_PATTERNS = {
    "text": null,
    "date": "\\d{4}-\\d{2}-\\d{2}",
    "number": "^\\d+(\\.\\d+)?$",
    "month": "\\d{4}-\\d{2}"
};

function generateSimpleProperty(row) {
    const dataType = row.dataType;
    let simpleProp = {
        "type": "object",
        "properties": {
            "value": {
                "type": "string"
            },
        },
        "required": ["value"]
    };

    simpleProp["description"] = "Question text: " + row.questionText;
    const pattern = TYPE_PATTERNS[dataType];
    if (pattern) {
        simpleProp.pattern = pattern;
    }
    for (let checkbox of row.checkboxes) {
        simpleProp.properties[checkbox] = {
            "type": "boolean"
        };
    }

    if (dataType == "dropdown") {
        const valuesList = DROPDOWN_VALUES[row.dropdownList];
        if (valuesList) {
            simpleProp.properties.value.enum = valuesList;
        } else {
            console.warn("unknown dropdown list list=%s row=%o", valuesList, row);
        }
    }
    return simpleProp;
}

function stripPrefix(prefix, value) {
    console.assert(prefix != null, "stripPrefix: prefix is null");
    console.assert(typeof value == "string", "stripPrefix: value is not a string");
    console.assert(value.startsWith(prefix), "stripPrefix: bogus input prefix='%s' value='%s'", prefix, value);

    return value.substring(prefix.length);
}

function substringBefore(s, delim, defaultValue) {
    const p = s.indexOf(delim);
    if (p < 0) {
        return defaultValue;
    } else {
        return s.substring(0, p);
    }
}

function processQuestions(contextObj, contextDepth, questions) {
    console.debug("Called processQuestions contextObj=%o contextDepth=%s questions=%o", 
        contextObj, contextDepth, questions);
    const nestedQuestions = [];

    for (const q of questions) {
        const propName = q.propertyName;
        const groupPath = q.groupPath.slice(contextDepth);
        if (groupPath.length == 0) {
            let prop = generateSimpleProperty(q);
            contextObj.properties[propName] = prop;
            contextObj.required.push(propName);
        } else {
            nestedQuestions.push(q);
        }
    }

    const arrayProps = Map.groupBy(nestedQuestions, 
        q => q.groupPath.slice(contextDepth)[0]);
    for (const arrayPropName of arrayProps.keys()) {
        const children = arrayProps.get(arrayPropName);
        const prop = {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {},
                "required": []
            }
        };
        contextObj.properties[arrayPropName] = prop;
        contextObj.required.push(arrayPropName);

        processQuestions(prop.items, contextDepth + 1, children);
    }
}

function generateSchema(rawCsv) {
    console.groupCollapsed("Parsing CSV");
    const allQuestions = parseCSV(rawCsv)
        .slice(1) // skip the header row
        .map(parseRow)
        .filter(q => q.propertyName != "IGNORE");
    console.groupEnd();

    const questionsBySection = Map.groupBy(allQuestions, q => q.section);

    const output = {
        "type": "object",
        "properties": {},
        "required": []
    };

    for (const rawSection of questionsBySection.keys()) {
        if (!rawSection.endsWith("education")) {
            continue;
        }
        console.group("Section: " + rawSection);

        const sectionQuestions = questionsBySection.get(rawSection);
        const [sectionNum, sectionName] = parseSection(rawSection);
        const sectionObj = {
            "type": "object",
            "properties": {},
            "required": [],
            "title": `Section ${sectionNum}: ${sectionName}`
        };
        output.properties[sectionName] = sectionObj;
        output.required.push(sectionName);

        processQuestions(sectionObj, 0, sectionQuestions);
        console.groupEnd();
    }

    return output;
}

document.getElementById('fileInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const text = e.target.result;
        const schema = generateSchema(text);
        console.info("Schema: %o", schema);
    };

    reader.readAsText(file);
});