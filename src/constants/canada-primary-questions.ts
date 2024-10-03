import { QuestionType } from "../interfaceTypes";

export const CanadaPrimaryQuestions = [
  // {
  //   "questionId": "42",
  //   "question": "What is your age? / Quel est votre âge?",
  //   "type": "",
  //   "options": [

  //   ]
  // },
  // {
  //   "questionId": "43",
  //   "question": "Etes-vous..? / Are you..?",
  //   "type": "",
  //   "options": [

  //   ]
  // },
  // {
  //   "questionId": "632",
  //   "question": "What is your relationship status ?",
  //   "type": "",
  //   "options": [

  //   ]
  // },
  {
    questionId: "113",
    question: "What is your ethnicity?",
    type: QuestionType.SELECT,
    options: [{
      "label": "White",
      "value": "White"
    }, {
      "label": "Black or African",
      "value": "Black or African"
    }, {
      "label": "American Indian or Alaska Native",
      "value": "American Indian or Alaska Native"
    }, {
      "label": "Asian",
      "value": "Asian"
    }, {
      "label": "Native Hawaiian and Other Pacific Islander",
      "value": "Native Hawaiian and Other Pacific Islander"
    }, {
      "label": "Latino/Hispanic",
      "value": "Latino/Hispanic"
    }, {
      "label": "Other",
      "value": "Other"
    }]
  },

  {
    "questionId": "2189",
    "question": "What is your current employment status?",
    "options": [{
      "label": "Employed Full-Time (35 Hours or more each week)",
      "value": "Employed Full-Time (35 Hours or more each week)"
    }, {
      "label": "Part-Time (34 Hours or less search week)",
      "value": "Part-Time (34 Hours or less search week)"
    }, {
      "label": "Self-Employed",
      "value": "Self-Employed"
    }, {
      "label": "Retired",
      "value": "Retired"
    }, {
      "label": "Student",
      "value": "Student"
    }, {
      "label": "Unemployed",
      "value": "Unemployed"
    }, {
      "label": "Homemaker",
      "value": "Homemaker"
    }],

    type: QuestionType.SELECT,
  },

  {
    "questionId": "48741",
    "question": "What is your level of education?",
    "options": [{
      "label": "Some high school, no diploma",
      "value": "Some high school, no diploma"
    }, {
      "label": "High school graduate, diploma or the equivalent (for example: GED)",
      "value": "High school graduate, diploma or the equivalent (for example: GED)"
    }, {
      "label": "Some college credit, no degree",
      "value": "Some college credit, no degree"
    }, {
      "label": "Trade/technical/vocational training",
      "value": "Trade/technical/vocational training"
    }, {
      "label": "Associate degree",
      "value": "Associate degree"
    }, {
      "label": "Bachelor's degree",
      "value": "Bachelor's degree"
    }, {
      "label": "Master's degree",
      "value": "Master's degree"
    }, {
      "label": "Professional degree",
      "value": "Professional degree"
    }, {
      "label": "Doctorate degree",
      "value": "Doctorate degree"
    }],
    "type": QuestionType.SELECT,
  },

  {
    "questionId": "632",
    "question": "What is your marital status?",
    "options": [{
      "label": "Never Married",
      "value": "Never Married"
    }, {
      "label": "Married",
      "value": "Married"
    }, {
      "label": "Separated",
      "value": "Separated"
    }, {
      "label": "Divorced",
      "value": "Divorced"
    }, {
      "label": "Widowed",
      "value": "Widowed"
    }],
    "type": QuestionType.SELECT,
  },
  {
    "questionId": "638",
    "question": "In your household, are you the person who makes most of the daily purchasing decisions?",
    "type": QuestionType.SELECT,
    "options": [
      {
        "label": "Yes",
        "value": "1"
      },
      {
        "label": "No",
        "value": "2"
      },
      {
        "label": "Share decisions equally",
        "value": "3"
      }
    ]
  },
  {
    "questionId": "640",
    "question": "How do you identify?",
    "type": QuestionType.SELECT,
    "options": [
      { label: "Heterosexual", value: "1" },
      { label: "Lesbian/Gay", value: "2" },
      { label: "Bisexual/Pansexual", value: "3" },
      { label: "Asexual", value: "4" },
      { label: "Other", value: "5" },
      { label: "Unsure", value: "6" },
      { label: "Prefer not to answer", value: "-3105" },
    ]
  },

  {
    "questionId": "641",
    "question": "How many people live in your household including yourself?",
    "type": QuestionType.SELECT,
    "options": [
      {
        "label": "1 person",
        "value": "1"
      },
      {
        "label": "2 persons",
        "value": "2"
      },
      {
        "label": "3 persons",
        "value": "3"
      },
      {
        "label": "4 persons",
        "value": "4"
      },
      {
        "label": "5 persons",
        "value": "5"
      },
      {
        "label": "More than 5 persons",
        "value": "6"
      },
      {
        "label": "Prefer not to answer",
        "value": "7"
      }
    ]
  },
  {
    "questionId": "642",
    "question": "What best describes your current household?",
    "type": QuestionType.SELECT,
    "options": [
      {
        "label": "Rented apartment",
        "value": "1"
      },
      {
        "label": "Owned apartment",
        "value": "2"
      },
      {
        "label": "Rented house",
        "value": "3"
      },
      {
        "label": "Owned house",
        "value": "4"
      },
      {
        "label": "Farm",
        "value": "5"
      },
      {
        "label": "University Residence",
        "value": "6"
      },
      {
        "label": "Living with parents",
        "value": "7"
      },
      {
        "label": "Other",
        "value": "8"
      }
    ]
  },
  {
    "questionId": "643",
    "question": "Do you or does anyone in your household, work in any of the following industries?",
    "type": QuestionType.SELECT,
    "options": [
      {
        "label": "Accounting",
        "value": "1"
      },
      {
        "label": "Advertising",
        "value": "2"
      },
      {
        "label": "Agriculture/Fishing",
        "value": "3"
      },
      {
        "label": "Architecture",
        "value": "4"
      },
      {
        "label": "Automotive",
        "value": "5"
      },
      {
        "label": "Aviation",
        "value": "6"
      },
      {
        "label": "Banking/Financial",
        "value": "7"
      },
      {
        "label": "Bio-Tech",
        "value": "8"
      },
      {
        "label": "Brokerage",
        "value": "9"
      },
      {
        "label": "Carpenting/Electrical installations/VVS",
        "value": "10"
      },
      {
        "label": "Chemicals/Plastics/Rubber",
        "value": "11"
      },
      {
        "label": "Communications/Information",
        "value": "12"
      },
      {
        "label": "Computer Hardware",
        "value": "13"
      },
      {
        "label": "Computer Reseller (software/hardware)",
        "value": "14"
      },
      {
        "label": "Computer Software",
        "value": "15"
      },
      {
        "label": "Construction",
        "value": "16"
      },
      {
        "label": "Consulting",
        "value": "17"
      },
      {
        "label": "Consumer Electronics",
        "value": "18"
      },
      {
        "label": "Consumer Packaged Goods",
        "value": "19"
      },
      {
        "label": "Education",
        "value": "20"
      },
      {
        "label": "Energy/Utilities/Oil and Gas",
        "value": "21"
      },
      {
        "label": "Engineering",
        "value": "22"
      },
      {
        "label": "Environmental Services",
        "value": "23"
      },
      {
        "label": "Fashion/Apparel",
        "value": "24"
      },
      {
        "label": "Food/Beverage",
        "value": "25"
      },
      {
        "label": "Government/Public Sector",
        "value": "26"
      },
      {
        "label": "Healthcare",
        "value": "27"
      },
      {
        "label": "Hospitality/Tourism",
        "value": "28"
      },
      {
        "label": "Human Resources",
        "value": "29"
      },
      {
        "label": "Information Technology/IT",
        "value": "30"
      },
      {
        "label": "Insurance",
        "value": "31"
      },
      {
        "label": "Internet",
        "value": "32"
      },
      {
        "label": "Legal/Law",
        "value": "33"
      },
      {
        "label": "Manufacturing",
        "value": "34"
      },
      {
        "label": "Market Research",
        "value": "35"
      },
      {
        "label": "Marketing/Sales",
        "value": "36"
      },
      {
        "label": "Media/Entertainment",
        "value": "37"
      },
      {
        "label": "Military",
        "value": "38"
      },
      {
        "label": "Non Profit/Social services",
        "value": "39"
      },
      {
        "label": "Personal Services",
        "value": "40"
      },
      {
        "label": "Pharmaceuticals",
        "value": "41"
      },
      {
        "label": "Printing Publishing",
        "value": "42"
      },
      {
        "label": "Public Relations",
        "value": "43"
      },
      {
        "label": "Real Estate/Property",
        "value": "44"
      },
      {
        "label": "Retail/Wholesale trade",
        "value": "45"
      },
      {
        "label": "Security",
        "value": "46"
      },
      {
        "label": "Shipping/Distribution",
        "value": "47"
      },
      {
        "label": "Telecommunications",
        "value": "48"
      },
      {
        "label": "Transportation",
        "value": "49"
      },
      {
        "label": "Other",
        "value": "50"
      },
      {
        "label": "I don't work",
        "value": "51"
      }
    ]
  },
  {
    "questionId": "646",
    "question": "Which department do you primarily work within at your organization?",
    "type": QuestionType.SELECT,
    "options": [
      {
        "label": "Administration/General Staff",
        "value": "1"
      },
      {
        "label": "Customer Service/Client Service",
        "value": "2"
      },
      {
        "label": "Executive Leadership",
        "value": "3"
      },
      {
        "label": "Finance/Accounting",
        "value": "4"
      },
      {
        "label": "Human Resources",
        "value": "5"
      },
      {
        "label": "Legal/Law",
        "value": "6"
      },
      {
        "label": "Marketing",
        "value": "7"
      },
      {
        "label": "Operations",
        "value": "8"
      },
      {
        "label": "Procurement",
        "value": "9"
      },
      {
        "label": "Sales/Business Development",
        "value": "10"
      },
      {
        "label": "Technology Development Hardware (not only IT)",
        "value": "11"
      },
      {
        "label": "Technology Development Software (not only IT)",
        "value": "12"
      },
      {
        "label": "Technology Implementation",
        "value": "13"
      },
      {
        "label": "Other",
        "value": "14"
      },
      {
        "label": "I don't work",
        "value": "15"
      }
    ]
  },
  {
    "questionId": "1249",
    "question": "Please indicate the age and gender of your child or children",
    "type": QuestionType.MULTISELECT,
    "options": [
      {
        "label": "Boy under age 1",
        "value": "1"
      },
      {
        "label": "Girl under age 1",
        "value": "2"
      },
      {
        "label": "Boy age 1",
        "value": "3"
      },
      {
        "label": "Girl age 1",
        "value": "4"
      },
      {
        "label": "Boy age 2",
        "value": "5"
      },
      {
        "label": "Girl age 2",
        "value": "6"
      },
      {
        "label": "Boy age 3",
        "value": "7"
      },
      {
        "label": "Girl age 3",
        "value": "8"
      },
      {
        "label": "Boy age 4",
        "value": "9"
      },
      {
        "label": "Girl age 4",
        "value": "10"
      },
      {
        "label": "Boy age 5",
        "value": "11"
      },
      {
        "label": "Girl age 5",
        "value": "12"
      },
      {
        "label": "Boy age 6",
        "value": "13"
      },
      {
        "label": "Girl age 6",
        "value": "14"
      },
      {
        "label": "Boy age 7",
        "value": "15"
      },
      {
        "label": "Girl age 7",
        "value": "16"
      },
      {
        "label": "Boy age 8",
        "value": "17"
      },
      {
        "label": "Girl age 8",
        "value": "18"
      },
      {
        "label": "Boy age 9",
        "value": "19"
      },
      {
        "label": "Girl age 9",
        "value": "20"
      },
      {
        "label": "Boy age 10",
        "value": "21"
      },
      {
        "label": "Girl age 10",
        "value": "22"
      },
      {
        "label": "Boy age 11",
        "value": "23"
      },
      {
        "label": "Girl age 11",
        "value": "24"
      },
      {
        "label": "Boy age 12",
        "value": "25"
      },
      {
        "label": "Girl age 12",
        "value": "26"
      },
      {
        "label": "Male teen age 13",
        "value": "27"
      },
      {
        "label": "Female teen age 13",
        "value": "28"
      },
      {
        "label": "Male teen age 14",
        "value": "29"
      },
      {
        "label": "Female teen age 14",
        "value": "30"
      },
      {
        "label": "Male teen age 15",
        "value": "31"
      },
      {
        "label": "Female teen age 15",
        "value": "32"
      },
      {
        "label": "Male teen age 16",
        "value": "33"
      },
      {
        "label": "Female teen age 16",
        "value": "34"
      },
      {
        "label": "Male teen age 17",
        "value": "35"
      },
      {
        "label": "Female teen age 17",
        "value": "36"
      },
      {
        "label": "None of the above",
        "value": "-3105"
      }
    ]
  },
  // {
  //   "questionId": "2189",
  //   "question": "What is your current employment status?",
  //   "type": "",
  //   "options": [

  //   ]
  // },

  {
    "questionId": "3546",
    "question": "Please choose which departments/products you have influence or decision making authority over regarding spending/purchasing.",
    "type": QuestionType.MULTISELECT,
    "options": [
      {
        "label": "IT Hardware",
        "value": "1"
      },
      {
        "label": "IT Software",
        "value": "2"
      },
      {
        "label": "Printers and copiers",
        "value": "3"
      },
      {
        "label": "Financial Department",
        "value": "4"
      },
      {
        "label": "Human Resources",
        "value": "5"
      },
      {
        "label": "Office supplies",
        "value": "6"
      },
      {
        "label": "Corporate travel",
        "value": "7"
      },
      {
        "label": "Telecommunications",
        "value": "8"
      },
      {
        "label": "Sales",
        "value": "9"
      },
      {
        "label": "Shipping",
        "value": "10"
      },
      {
        "label": "Operations",
        "value": "11"
      },
      {
        "label": "Legal services",
        "value": "12"
      },
      {
        "label": "Marketing/Advertising",
        "value": "13"
      },
      {
        "label": "Security",
        "value": "14"
      },
      {
        "label": "Food services",
        "value": "15"
      },
      {
        "label": "Auto leasing/purchasing",
        "value": "16"
      },
      {
        "label": "Procurement",
        "value": "19"
      },
      {
        "label": "Other",
        "value": "17"
      },
      {
        "label": "I don’t have influence or decision making authority",
        "value": "18"
      }
    ]
  },
  {
    "questionId": "3708",
    "question": "How many children do you have under the age of 18?",
    "type": QuestionType.NUMERICFIELD,
    "options": []
  },
  {
    "questionId": "7064",
    "question": "Please choose the options that best describe your household",
    "type": QuestionType.MULTISELECT,
    "options": [
      {
        "label": "I am pregnant/expecting a child within the next 9 months / I am pregnant/expecting a child within the next 9 months/ Je suis enceinte / attend un enfant dans les 9 prochains mois / \n\nJe suis enceinte / attend un enfant dans les 9 prochains mois",
        "value": "1"
      },
      {
        "label": "I have one or more children under the age of 18 living in my household/ J'ai un ou plusieurs enfants âgés de moins de 18 ans vivant dans mon foyer",
        "value": "2"
      },
      {
        "label": "I have one or more children aged 18 or older living in my household/ J'ai un ou plusieurs enfants âgés de 18 ans ou plus vivant dans mon foyer",
        "value": "3"
      },
      {
        "label": "I have no children living in my household and I am not pregnant/expecting a child within the next 9 months/Je n'ai pas d'enfants qui vivent dans ma maison et je ne suis pas enceinte / attend un enfant dans les 9 prochains mois",
        "value": "4"
      }
    ]
  },
  {
    "questionId": "15297",
    "question": "What is your job title, level or responsibility?",
    "type": QuestionType.SELECT,
    "options": [
      {
        "label": "C-Level (e.g. CEO, CFO), Owner, Partner, President",
        "value": "1"
      },
      {
        "label": "Vice President (EVP, SVP, AVP, VP)",
        "value": "2"
      },
      {
        "label": "Director (Group Director, Sr. Director, Director)",
        "value": "3"
      },
      {
        "label": "Manager (Group Manager, Sr. Manager, Manager, Program Manager)",
        "value": "4"
      },
      {
        "label": "Analyst",
        "value": "5"
      },
      {
        "label": "Assistant or Associat",
        "value": "6"
      },
      {
        "label": "Administrative (Clerical or Support Staff)",
        "value": "7"
      },
      {
        "label": "Consultant",
        "value": "8"
      },
      {
        "label": "Intern",
        "value": "9"
      },
      {
        "label": "Volunteer",
        "value": "10"
      },
      {
        "label": "None of the above",
        "value": "11"
      }
    ]
  },
  // {
  //   "questionId": "32353",
  //   "question": "Are You...?",
  //   "type": "",
  //   "options": [

  //   ]
  // },
  // {
  //   "questionId": "43501",
  //   "question": "Do you have a webcam and are you willing to use it for an online research opportunity?",
  //   "type": "",
  //   "options": [

  //   ]
  // },
  // {
  //   "questionId": "48741",
  //   "question": "What is the highest level of education you have completed?",
  //   "type": "",
  //   "options": [

  //   ]
  // },
  {
    "questionId": "61076",
    "question": "What is your current annual household income after taxes?",
    "type": QuestionType.SELECT,
    "options": [
      {
        "label": "Less than $14,999",
        "value": "1"
      },
      {
        "label": "$15,000 to $19,999",
        "value": "2"
      },
      {
        "label": "$20,000 to $22,499",
        "value": "3"
      },
      {
        "label": "$22,500 to $24,999",
        "value": "4"
      },
      {
        "label": "$25,000 to $27,499",
        "value": "5"
      },
      {
        "label": "$27,500 to $29,999",
        "value": "6"
      },
      {
        "label": "$30,000 to $32,499",
        "value": "7"
      },
      {
        "label": "$32,500 to $34,999",
        "value": "8"
      },
      {
        "label": "$35,000 to $37,499",
        "value": "9"
      },
      {
        "label": "$37,500 to $39,999",
        "value": "10"
      },
      {
        "label": "$40,000 to $42,499",
        "value": "11"
      },
      {
        "label": "$42,500 to $44,999",
        "value": "12"
      },
      {
        "label": "$45,000 to $47,499",
        "value": "13"
      },
      {
        "label": "$47,500 to $49,999",
        "value": "14"
      },
      {
        "label": "$50,000 to $52,499",
        "value": "15"
      },
      {
        "label": "$52,500 to $54,999",
        "value": "16"
      },
      {
        "label": "$55,000 to $59,999",
        "value": "17"
      },
      {
        "label": "$60,000 to $69,999",
        "value": "18"
      },
      {
        "label": "$70,000 to $79,999",
        "value": "19"
      },
      {
        "label": "$80,000 to $89,999",
        "value": "20"
      },
      {
        "label": "$90,000 to $99,999",
        "value": "21"
      },
      {
        "label": "$100,000 to $124,999",
        "value": "22"
      },
      {
        "label": "$125,000 to $149,999",
        "value": "23"
      },
      {
        "label": "$150,000 and above",
        "value": "24"
      },
      {
        "label": "Prefer not to answer",
        "value": "-3105"
      }
    ]
  },
  // {
  //   "questionId": "79348",
  //   "question": "What region do you live in?",
  //   "type": "",
  //   "options": [

  //   ]
  // },
  // {
  //   "questionId": "79354",
  //   "question": "What is the name of the place you live?",
  //   "type": "",
  //   "options": [

  //   ]
  // },
  // {
  //   "questionId": "79357",
  //   "question": "Please enter the first half of your postal code below.",
  //   "type": "",
  //   "options": [

  //   ]
  // },
  {
    "questionId": "79378",
    "question": "What province do you live in?",
    "type": QuestionType.SELECT,
    "options": [
      {
        "label": "Alberta",
        "value": "1"
      },
      {
        "label": "British Columbia",
        "value": "2"
      },
      {
        "label": "Manitoba",
        "value": "3"
      },
      {
        "label": "New Brunswick",
        "value": "4"
      },
      {
        "label": "Newfoundland and Labrador",
        "value": "5"
      },
      {
        "label": "Northwest Territory",
        "value": "6"
      },
      {
        "label": "Nova Scotia",
        "value": "7"
      },
      {
        "label": "Nunavut Territory",
        "value": "8"
      },
      {
        "label": "Ontario",
        "value": "9"
      },
      {
        "label": "Prince Edward Island",
        "value": "10"
      },
      {
        "label": "Quebec",
        "value": "11"
      },
      {
        "label": "Saskatchewan",
        "value": "12"
      },
      {
        "label": "Yukon",
        "value": "13"
      }
    ]
  },
  {
    "questionId": "105013",
    "question": "Which of the following best describes the area you live in?",
    "type": QuestionType.SELECT,
    "options": [
      {
        "label": "Urban – Densely populated, city or large town",
        "value": "1"
      },
      {
        "label": "Suburban – Mainly residential, bordering a city or large town",
        "value": "2"
      },
      {
        "label": "Rural – Sparsely populated, small town or village",
        "value": "3"
      }
    ]
  },
  // {
  //   "questionId": "137510",
  //   "question": "Are you...",
  //   "type": "",
  //   "options": [
  //     {
  //       "label": "Male",
  //       "value": "1"
  //     },
  //     {
  //       "label": "Female",
  //       "value": "2"
  //     },
  //     {
  //       "label": "Non Gender Conforming (including nonbinary, pangender, gender fluid, bi gender, agender, transgender, or other)",
  //       "value": "3"
  //     },
  //     {
  //       "label": "I Prefer not to answer",
  //       "value": "4"
  //     }
  //   ]
  // }
  {
    "questionId": "P6Q7",
    "type": QuestionType.MULTISELECT,
    "question": "Please let us know your survey and research preferences",
    "options": [
      { label: "Patient & Caregiver Surveys & Interviews", value: "Patient & Caregiver Surveys & Interviews" },
      { label: "Online Interviews", value: "Online Interviews" },
      { label: "Business Surveys & Interviews", value: "Business Surveys & Interviews" },
      { label: "Consumer Surveys", value: "Consumer Surveys" }
    ],
  },
]

export const CanadaInitialValue = {
  "What is your ethnicity?": "",
  "What is your current employment status?": "",
  "What is your level of education?": "",
  "What is your marital status?": "",
  "In your household, are you the person who makes most of the daily purchasing decisions?": "",
  "How do you identify?": [],
  "How many people live in your household including yourself?": "",
  "What best describes your current household?": "",
  "Do you, or does anyone in your household, work in any of the following industries?": "",
  "Which department do you primarily work within at your organization?": "",
  "Please indicate the age and gender of your child or children": [],
  "Please choose which departments/products you have influence or decision making authority over regarding spending/purchasing.": [],
  "How many children do you have under the age of 18?": "",
  "Please choose the options that best describe your household": [],
  "What is your job title, level or responsibility?": "",
  "What is your current annual household income after taxes?": "",
  "What province do you live in?": "",
  "Which of the following best describes the area you live in?": "",
  "Please let us know your survey and research preferences": []
}