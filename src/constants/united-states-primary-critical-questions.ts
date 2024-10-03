

// ["42", "43", "45", "47", "96", "97", "101", "113", "120", "122", "2189",
//   "7064", "61076", "137510", "157547", "157550", "2204", "29226", "30319", "29228", "30321",
//   "30226", "43501", "1249", "3708", "48741", "32352", "642", "84668", "632",
//   "23415", "640", "641", "105013", "32350", "128244", "634", "638", "643",
//   "646", "3546", "15297"]

import { QuestionType } from "../interfaceTypes";

export const UnitedStatesPrimaryCriticalQuestions = (old = false) => [

  ...(!old ? [{
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
  }] : []),

  {
    "questionId": "47",
    "question": "Are you of Hispanic, Latino, or Spanish origin?",
    "type": QuestionType.SELECT,
    "options": [
      {
        "label": "No , not of Hispanic, Latino, or Spanish origin",
        "value": "1"
      },
      {
        "label": "Yes, Mexican, Mexican American, Chicano",
        "value": "2"
      },
      {
        "label": "Yes, Cuban",
        "value": "3"
      },
      {
        "label": "Yes, another Hispanic, Latino, or Spanish origin *** Argentina",
        "value": "4"
      },
      {
        "label": "Yes, another Hispanic, Latino, or Spanish origin *** Colombia",
        "value": "5"
      },
      {
        "label": "Yes, another Hispanic, Latino, or Spanish origin *** Ecuador",
        "value": "6"
      },
      {
        "label": "Yes, another Hispanic, Latino, or Spanish origin *** El Salvadore",
        "value": "7"
      },
      {
        "label": "Yes, another Hispanic, Latino, or Spanish origin *** Guatemala",
        "value": "8"
      },
      {
        "label": "Yes, another Hispanic, Latino, or Spanish origin *** Nicaragua",
        "value": "9"
      },
      {
        "label": "Yes, another Hispanic, Latino, or Spanish origin *** Panama",
        "value": "10"
      },
      {
        "label": "Yes, another Hispanic, Latino, or Spanish origin *** Peru",
        "value": "11"
      },
      {
        "label": "Yes, another Hispanic, Latino, or Spanish origin *** Spain",
        "value": "12"
      },
      {
        "label": "Yes, another Hispanic, Latino, or Spanish origin *** Venezuela",
        "value": "13"
      },
      {
        "label": "Yes, another Hispanic, Latino, or Spanish origin *** Other Country",
        "value": "14"
      },
      {
        "label": "Prefer not to answer",
        "value": "15"
      },
      {
        "label": "Yes, Puerto Rican",
        "value": "16"
      }
    ]
  },
  // {
  //   "questionId": "96",
  //   "question": "What is your state?",
  //   "type": "",
  //   "options": [
  //     {
  //       "label": "ALABAMA",
  //       "value": "1"
  //     },
  //     {
  //       "label": "ALASKA",
  //       "value": "2"
  //     },
  //     {
  //       "label": "American Samoa",
  //       "value": "53"
  //     },
  //     {
  //       "label": "ARIZONA",
  //       "value": "3"
  //     },
  //     {
  //       "label": "ARKANSAS",
  //       "value": "4"
  //     },
  //     {
  //       "label": "CALIFORNIA",
  //       "value": "5"
  //     },
  //     {
  //       "label": "COLORADO",
  //       "value": "6"
  //     },
  //     {
  //       "label": "CONNECTICUT",
  //       "value": "7"
  //     },
  //     {
  //       "label": "DELAWARE",
  //       "value": "8"
  //     },
  //     {
  //       "label": "DISTRICT OF COLUMBIA",
  //       "value": "9"
  //     },
  //     {
  //       "label": "Federated States of Micronesia",
  //       "value": "54"
  //     },
  //     {
  //       "label": "FLORIDA",
  //       "value": "10"
  //     },
  //     {
  //       "label": "GEORGIA",
  //       "value": "11"
  //     },
  //     {
  //       "label": "Guam",
  //       "value": "55"
  //     },
  //     {
  //       "label": "HAWAII",
  //       "value": "12"
  //     },
  //     {
  //       "label": "IDAHO",
  //       "value": "13"
  //     },
  //     {
  //       "label": "ILLINOIS",
  //       "value": "14"
  //     },
  //     {
  //       "label": "INDIANA",
  //       "value": "15"
  //     },
  //     {
  //       "label": "IOWA",
  //       "value": "16"
  //     },
  //     {
  //       "label": "KANSAS",
  //       "value": "17"
  //     },
  //     {
  //       "label": "KENTUCKY",
  //       "value": "18"
  //     },
  //     {
  //       "label": "LOUISIANA",
  //       "value": "19"
  //     },
  //     {
  //       "label": "MAINE",
  //       "value": "20"
  //     },
  //     {
  //       "label": "Marshall Islands",
  //       "value": "56"
  //     },
  //     {
  //       "label": "MARYLAND",
  //       "value": "21"
  //     },
  //     {
  //       "label": "MASSACHUSETTS",
  //       "value": "22"
  //     },
  //     {
  //       "label": "MICHIGAN",
  //       "value": "23"
  //     },
  //     {
  //       "label": "MINNESOTA",
  //       "value": "24"
  //     },
  //     {
  //       "label": "MISSISSIPPI",
  //       "value": "25"
  //     },
  //     {
  //       "label": "MISSOURI",
  //       "value": "26"
  //     },
  //     {
  //       "label": "MONTANA",
  //       "value": "27"
  //     },
  //     {
  //       "label": "NEBRASKA",
  //       "value": "28"
  //     },
  //     {
  //       "label": "NEVADA",
  //       "value": "29"
  //     },
  //     {
  //       "label": "NEW HAMPSHIRE",
  //       "value": "30"
  //     },
  //     {
  //       "label": "NEW JERSEY",
  //       "value": "31"
  //     },
  //     {
  //       "label": "NEW MEXICO",
  //       "value": "32"
  //     },
  //     {
  //       "label": "NEW YORK",
  //       "value": "33"
  //     },
  //     {
  //       "label": "NORTH CAROLINA",
  //       "value": "34"
  //     },
  //     {
  //       "label": "NORTH DAKOTA",
  //       "value": "35"
  //     },
  //     {
  //       "label": "Northern Mariana Islands",
  //       "value": "57"
  //     },
  //     {
  //       "label": "NOT APPLICABLE",
  //       "value": "0"
  //     },
  //     {
  //       "label": "OHIO",
  //       "value": "36"
  //     },
  //     {
  //       "label": "OKLAHOMA",
  //       "value": "37"
  //     },
  //     {
  //       "label": "OREGON",
  //       "value": "38"
  //     },
  //     {
  //       "label": "Palau",
  //       "value": "58"
  //     },
  //     {
  //       "label": "PENNSYLVANIA",
  //       "value": "39"
  //     },
  //     {
  //       "label": "Puerto Rico",
  //       "value": "59"
  //     },
  //     {
  //       "label": "RHODE ISLAND",
  //       "value": "40"
  //     },
  //     {
  //       "label": "SOUTH CAROLINA",
  //       "value": "41"
  //     },
  //     {
  //       "label": "SOUTH DAKOTA",
  //       "value": "42"
  //     },
  //     {
  //       "label": "TENNESSEE",
  //       "value": "43"
  //     },
  //     {
  //       "label": "TEXAS",
  //       "value": "44"
  //     },
  //     {
  //       "label": "UTAH",
  //       "value": "45"
  //     },
  //     {
  //       "label": "VERMONT",
  //       "value": "46"
  //     },
  //     {
  //       "label": "Virgin Islands",
  //       "value": "60"
  //     },
  //     {
  //       "label": "VIRGINIA",
  //       "value": "47"
  //     },
  //     {
  //       "label": "WASHINGTON",
  //       "value": "48"
  //     },
  //     {
  //       "label": "WEST VIRGINIA",
  //       "value": "49"
  //     },
  //     {
  //       "label": "WISCONSIN",
  //       "value": "50"
  //     },
  //     {
  //       "label": "WYOMING",
  //       "value": "51"
  //     }
  //   ]
  // },
  {
    "questionId": "97",
    "question": "What city you are closest to?",
    "type": QuestionType.SELECT,
    "options": [
      {
        "label": "ABILENE-SWEETWATER",
        "value": "662"
      },
      {
        "label": "ALBANY, GA",
        "value": "525"
      },
      {
        "label": "ALBANY-SCHENECTADY-TROY",
        "value": "532"
      },
      {
        "label": "ALBUQUERQUE-SANTA FE",
        "value": "790"
      },
      {
        "label": "ALEXANDRIA, LA",
        "value": "644"
      },
      {
        "label": "ALPENA",
        "value": "583"
      },
      {
        "label": "AMARILLO",
        "value": "634"
      },
      {
        "label": "ANCHORAGE",
        "value": "743"
      },
      {
        "label": "ATLANTA",
        "value": "524"
      },
      {
        "label": "AUGUSTA-AIKEN",
        "value": "520"
      },
      {
        "label": "AUSTIN",
        "value": "635"
      },
      {
        "label": "BAKERSFIELD",
        "value": "800"
      },
      {
        "label": "BALTIMORE",
        "value": "512"
      },
      {
        "label": "BANGOR",
        "value": "537"
      },
      {
        "label": "BATON ROUGE",
        "value": "716"
      },
      {
        "label": "BEAUMONT-PORT ARTHUR",
        "value": "692"
      },
      {
        "label": "BEND, OR",
        "value": "821"
      },
      {
        "label": "BILLINGS",
        "value": "756"
      },
      {
        "label": "BILOXI-GULFPORT",
        "value": "746"
      },
      {
        "label": "BINGHAMTON",
        "value": "502"
      },
      {
        "label": "BIRMINGHAM (ANN AND TUSC)",
        "value": "630"
      },
      {
        "label": "BLUEFIELD-BECKLEY-OAK HILL",
        "value": "559"
      },
      {
        "label": "BOISE",
        "value": "757"
      },
      {
        "label": "BOSTON (MANCHESTER)",
        "value": "506"
      },
      {
        "label": "BOWLING GREEN",
        "value": "736"
      },
      {
        "label": "BUFFALO",
        "value": "514"
      },
      {
        "label": "BURLINGTON-PLATTSBURGH",
        "value": "523"
      },
      {
        "label": "BUTTE-BOZEMAN",
        "value": "754"
      },
      {
        "label": "CASPER-RIVERTON",
        "value": "767"
      },
      {
        "label": "CEDAR RAPIDS-WTRLO-IWC&DUB",
        "value": "637"
      },
      {
        "label": "CHAMPAIGN&SPRNGFLD-DECATUR",
        "value": "648"
      },
      {
        "label": "CHARLESTON, SC",
        "value": "519"
      },
      {
        "label": "CHARLESTON-HUNTINGTON",
        "value": "564"
      },
      {
        "label": "CHARLOTTE",
        "value": "517"
      },
      {
        "label": "CHARLOTTESVILLE",
        "value": "584"
      },
      {
        "label": "CHATTANOOGA",
        "value": "575"
      },
      {
        "label": "CHEYENNE-SCOTTSBLUF",
        "value": "759"
      },
      {
        "label": "CHICAGO",
        "value": "602"
      },
      {
        "label": "CHICO-REDDING",
        "value": "868"
      },
      {
        "label": "CINCINNATI",
        "value": "515"
      },
      {
        "label": "CLARKSBURG-WESTON",
        "value": "598"
      },
      {
        "label": "CLEVELAND-AKRON (CANTON)",
        "value": "510"
      },
      {
        "label": "COLORADO SPRINGS-PUEBLO",
        "value": "752"
      },
      {
        "label": "COLUMBIA, SC",
        "value": "546"
      },
      {
        "label": "COLUMBIA-JEFFERSON CITY",
        "value": "604"
      },
      {
        "label": "COLUMBUS, GA (OPELIKA, AL)",
        "value": "522"
      },
      {
        "label": "COLUMBUS, OH",
        "value": "535"
      },
      {
        "label": "COLUMBUS-TUPELO-W PNT-HSTN",
        "value": "673"
      },
      {
        "label": "CORPUS CHRISTI",
        "value": "600"
      },
      {
        "label": "DALLAS-FT. WORTH",
        "value": "623"
      },
      {
        "label": "DAVENPORT-R.ISLAND-MOLINE",
        "value": "682"
      },
      {
        "label": "DAYTON",
        "value": "542"
      },
      {
        "label": "DENVER",
        "value": "751"
      },
      {
        "label": "DES MOINES-AMES",
        "value": "679"
      },
      {
        "label": "DETROIT",
        "value": "505"
      },
      {
        "label": "DOTHAN",
        "value": "606"
      },
      {
        "label": "DULUTH-SUPERIOR",
        "value": "676"
      },
      {
        "label": "EL PASO (LAS CRUCES)",
        "value": "765"
      },
      {
        "label": "ELMIRA (CORNING)",
        "value": "565"
      },
      {
        "label": "ERIE",
        "value": "516"
      },
      {
        "label": "EUGENE",
        "value": "801"
      },
      {
        "label": "EUREKA",
        "value": "802"
      },
      {
        "label": "EVANSVILLE",
        "value": "649"
      },
      {
        "label": "FAIRBANKS",
        "value": "745"
      },
      {
        "label": "FARGO-VALLEY CITY",
        "value": "724"
      },
      {
        "label": "FLINT-SAGINAW-BAY CITY",
        "value": "513"
      },
      {
        "label": "FRESNO-VISALIA",
        "value": "866"
      },
      {
        "label": "FT. MYERS-NAPLES",
        "value": "571"
      },
      {
        "label": "FT. SMITH-FAY-SPRNGDL-RGRS",
        "value": "670"
      },
      {
        "label": "FT. WAYNE",
        "value": "509"
      },
      {
        "label": "GAINESVILLE",
        "value": "592"
      },
      {
        "label": "GLENDIVE",
        "value": "798"
      },
      {
        "label": "GRAND JUNCTION-MONTROSE",
        "value": "773"
      },
      {
        "label": "GRAND RAPIDS-KALMZOO-B.CRK",
        "value": "563"
      },
      {
        "label": "GREAT FALLS",
        "value": "755"
      },
      {
        "label": "GREEN BAY-APPLETON",
        "value": "658"
      },
      {
        "label": "GREENSBORO-H.POINT-W.SALEM",
        "value": "518"
      },
      {
        "label": "GREENVILLE-N.BERN-WASHNGTN",
        "value": "545"
      },
      {
        "label": "GREENVLL-SPART-ASHEVLL-AND",
        "value": "567"
      },
      {
        "label": "GREENWOOD-GREENVILLE",
        "value": "647"
      },
      {
        "label": "HARLINGEN-WSLCO-BRNSVL-MCA",
        "value": "636"
      },
      {
        "label": "HARRISBURG-LNCSTR-LEB-YORK",
        "value": "566"
      },
      {
        "label": "HARRISONBURG",
        "value": "569"
      },
      {
        "label": "HARTFORD & NEW HAVEN",
        "value": "533"
      },
      {
        "label": "HATTIESBURG-LAUREL",
        "value": "710"
      },
      {
        "label": "HELENA",
        "value": "766"
      },
      {
        "label": "HONOLULU",
        "value": "744"
      },
      {
        "label": "HOUSTON",
        "value": "618"
      },
      {
        "label": "HUNTSVILLE-DECATUR (FLOR)",
        "value": "691"
      },
      {
        "label": "IDAHO FALS-POCATLLO(JCKSN)",
        "value": "758"
      },
      {
        "label": "INDIANAPOLIS",
        "value": "527"
      },
      {
        "label": "JACKSON, MS",
        "value": "718"
      },
      {
        "label": "JACKSON, TN",
        "value": "639"
      },
      {
        "label": "JACKSONVILLE",
        "value": "561"
      },
      {
        "label": "JOHNSTOWN-ALTOONA-ST COLGE",
        "value": "574"
      },
      {
        "label": "JONESBORO",
        "value": "734"
      },
      {
        "label": "JOPLIN-PITTSBURG",
        "value": "603"
      },
      {
        "label": "JUNEAU",
        "value": "747"
      },
      {
        "label": "KANSAS CITY",
        "value": "616"
      },
      {
        "label": "KNOXVILLE",
        "value": "557"
      },
      {
        "label": "LA CROSSE-EAU CLAIRE",
        "value": "702"
      },
      {
        "label": "LAFAYETTE, IN",
        "value": "582"
      },
      {
        "label": "LAFAYETTE, LA",
        "value": "642"
      },
      {
        "label": "LAKE CHARLES",
        "value": "643"
      },
      {
        "label": "LANSING",
        "value": "551"
      },
      {
        "label": "LAREDO",
        "value": "749"
      },
      {
        "label": "LAS VEGAS",
        "value": "839"
      },
      {
        "label": "LEXINGTON",
        "value": "541"
      },
      {
        "label": "LIMA",
        "value": "558"
      },
      {
        "label": "LINCOLN & HASTINGS-KRNY",
        "value": "722"
      },
      {
        "label": "LITTLE ROCK-PINE BLUFF",
        "value": "693"
      },
      {
        "label": "LOS ANGELES",
        "value": "803"
      },
      {
        "label": "LOUISVILLE",
        "value": "529"
      },
      {
        "label": "LUBBOCK",
        "value": "651"
      },
      {
        "label": "MACON",
        "value": "503"
      },
      {
        "label": "MADISON",
        "value": "669"
      },
      {
        "label": "MANKATO",
        "value": "737"
      },
      {
        "label": "MARQUETTE",
        "value": "553"
      },
      {
        "label": "MEDFORD-KLAMATH FALLS",
        "value": "813"
      },
      {
        "label": "MEMPHIS",
        "value": "640"
      },
      {
        "label": "MERIDIAN",
        "value": "711"
      },
      {
        "label": "MIAMI-FT. LAUDERDALE",
        "value": "528"
      },
      {
        "label": "MILWAUKEE",
        "value": "617"
      },
      {
        "label": "MINNEAPOLIS-ST. PAUL",
        "value": "613"
      },
      {
        "label": "MINOT-BISMARCK-DICKINSON",
        "value": "687"
      },
      {
        "label": "MISSOULA",
        "value": "762"
      },
      {
        "label": "MOBILE-PENSACOLA (FT WALT)",
        "value": "686"
      },
      {
        "label": "MONROE-EL DORADO",
        "value": "628"
      },
      {
        "label": "MONTEREY-SALINAS",
        "value": "828"
      },
      {
        "label": "MONTGOMERY-SELMA",
        "value": "698"
      },
      {
        "label": "MYRTLE BEACH-FLORENCE",
        "value": "570"
      },
      {
        "label": "NASHVILLE",
        "value": "659"
      },
      {
        "label": "NEW ORLEANS",
        "value": "622"
      },
      {
        "label": "NEW YORK",
        "value": "501"
      },
      {
        "label": "NORFOLK-PORTSMTH-NEWPT NWS",
        "value": "544"
      },
      {
        "label": "NORTH PLATTE",
        "value": "740"
      },
      {
        "label": "ODESSA-MIDLAND",
        "value": "633"
      },
      {
        "label": "OKLAHOMA CITY",
        "value": "650"
      },
      {
        "label": "OMAHA",
        "value": "652"
      },
      {
        "label": "ORLANDO-DAYTONA BCH-MELBRN",
        "value": "534"
      },
      {
        "label": "OTTUMWA-KIRKSVILLE",
        "value": "631"
      },
      {
        "label": "PADUCAH-CAPE GIRARD-HARSBG",
        "value": "632"
      },
      {
        "label": "PALM SPRINGS",
        "value": "804"
      },
      {
        "label": "PANAMA CITY",
        "value": "656"
      },
      {
        "label": "PARKERSBURG",
        "value": "597"
      },
      {
        "label": "PEORIA-BLOOMINGTON",
        "value": "675"
      },
      {
        "label": "PHILADELPHIA",
        "value": "504"
      },
      {
        "label": "PHOENIX (PRESCOTT)",
        "value": "753"
      },
      {
        "label": "PITTSBURGH",
        "value": "508"
      },
      {
        "label": "PORTLAND, OR",
        "value": "820"
      },
      {
        "label": "PORTLAND-AUBURN",
        "value": "500"
      },
      {
        "label": "PRESQUE ISLE",
        "value": "552"
      },
      {
        "label": "PROVIDENCE-NEW BEDFORD",
        "value": "521"
      },
      {
        "label": "QUINCY-HANNIBAL-KEOKUK",
        "value": "717"
      },
      {
        "label": "RALEIGH-DURHAM (FAYETVLLE)",
        "value": "560"
      },
      {
        "label": "RAPID CITY",
        "value": "764"
      },
      {
        "label": "RENO",
        "value": "811"
      },
      {
        "label": "RICHMOND-PETERSBURG",
        "value": "556"
      },
      {
        "label": "ROANOKE-LYNCHBURG",
        "value": "573"
      },
      {
        "label": "ROCHESTER, NY",
        "value": "538"
      },
      {
        "label": "ROCHESTR-MASON CITY-AUSTIN",
        "value": "611"
      },
      {
        "label": "ROCKFORD",
        "value": "610"
      },
      {
        "label": "SACRAMNTO-STKTON-MODESTO",
        "value": "862"
      },
      {
        "label": "SALISBURY",
        "value": "576"
      },
      {
        "label": "SALT LAKE CITY",
        "value": "770"
      },
      {
        "label": "SAN ANGELO",
        "value": "661"
      },
      {
        "label": "SAN ANTONIO",
        "value": "641"
      },
      {
        "label": "SAN DIEGO",
        "value": "825"
      },
      {
        "label": "SAN FRANCISCO-OAK-SAN JOSE",
        "value": "807"
      },
      {
        "label": "SANTABARBRA-SANMAR-SANLUOB",
        "value": "855"
      },
      {
        "label": "SAVANNAH",
        "value": "507"
      },
      {
        "label": "SEATTLE-TACOMA",
        "value": "819"
      },
      {
        "label": "SHERMAN-ADA",
        "value": "657"
      },
      {
        "label": "SHREVEPORT",
        "value": "612"
      },
      {
        "label": "SIOUX CITY",
        "value": "624"
      },
      {
        "label": "SIOUX FALLS(MITCHELL)",
        "value": "725"
      },
      {
        "label": "SOUTH BEND-ELKHART",
        "value": "588"
      },
      {
        "label": "SPOKANE",
        "value": "881"
      },
      {
        "label": "SPRINGFIELD, MO",
        "value": "619"
      },
      {
        "label": "SPRINGFIELD-HOLYOKE",
        "value": "543"
      },
      {
        "label": "ST. JOSEPH",
        "value": "638"
      },
      {
        "label": "ST. LOUIS",
        "value": "609"
      },
      {
        "label": "SYRACUSE",
        "value": "555"
      },
      {
        "label": "TALLAHASSEE-THOMASVILLE",
        "value": "530"
      },
      {
        "label": "TAMPA-ST. PETE (SARASOTA)",
        "value": "539"
      },
      {
        "label": "TERRE HAUTE",
        "value": "581"
      },
      {
        "label": "TOLEDO",
        "value": "547"
      },
      {
        "label": "TOPEKA",
        "value": "605"
      },
      {
        "label": "TRAVERSE CITY-CADILLAC",
        "value": "540"
      },
      {
        "label": "TRI-CITIES, TN-VA",
        "value": "531"
      },
      {
        "label": "TUCSON (SIERRA VISTA)",
        "value": "789"
      },
      {
        "label": "TULSA",
        "value": "671"
      },
      {
        "label": "TWIN FALLS",
        "value": "760"
      },
      {
        "label": "TYLER-LONGVIEW(LFKN&NCGD)",
        "value": "709"
      },
      {
        "label": "UTICA",
        "value": "526"
      },
      {
        "label": "VICTORIA",
        "value": "626"
      },
      {
        "label": "WACO-TEMPLE-BRYAN",
        "value": "625"
      },
      {
        "label": "WASHINGTON, DC (HAGRSTWN)",
        "value": "511"
      },
      {
        "label": "WATERTOWN",
        "value": "549"
      },
      {
        "label": "WAUSAU-RHINELANDER",
        "value": "705"
      },
      {
        "label": "WEST PALM BEACH-FT. PIERCE",
        "value": "548"
      },
      {
        "label": "WHEELING-STEUBENVILLE",
        "value": "554"
      },
      {
        "label": "WICHITA FALLS & LAWTON",
        "value": "627"
      },
      {
        "label": "WICHITA-HUTCHINSON PLUS",
        "value": "678"
      },
      {
        "label": "WILKES BARRE-SCRANTON",
        "value": "577"
      },
      {
        "label": "WILMINGTON",
        "value": "550"
      },
      {
        "label": "YAKIMA-PASCO-RCHLND-KNNWCK",
        "value": "810"
      },
      {
        "label": "YOUNGSTOWN",
        "value": "536"
      },
      {
        "label": "YUMA-EL CENTRO",
        "value": "771"
      },
      {
        "label": "ZANESVILLE",
        "value": "596"
      }
    ]
  },
  // {
  //   "questionId": "101",
  //   "question": "What is your Division?",
  //   "type": QuestionType.SELECT,
  //   "options": [
  //     {
  //       "label": "East North Central",
  //       "value": "3"
  //     },
  //     {
  //       "label": "East South Central",
  //       "value": "6"
  //     },
  //     {
  //       "label": "Middle Atlantic",
  //       "value": "2"
  //     },
  //     {
  //       "label": "Mountain",
  //       "value": "8"
  //     },
  //     {
  //       "label": "New England",
  //       "value": "1"
  //     },
  //     {
  //       "label": "Pacific",
  //       "value": "9"
  //     },
  //     {
  //       "label": "South Atlantic",
  //       "value": "5"
  //     },
  //     {
  //       "label": "West North Central",
  //       "value": "4"
  //     },
  //     {
  //       "label": "West South Central",
  //       "value": "7"
  //     }
  //   ]
  // },
  // {
  //   "questionId": "113",
  //   "question": "What is your race?",
  //   "type": "",
  //   "options": [
  //     {
  //       "label": "White",
  //       "value": "1"
  //     },
  //     {
  //       "label": "Black, or African American",
  //       "value": "2"
  //     },
  //     {
  //       "label": "American Indian or Alaska Native",
  //       "value": "3"
  //     },
  //     {
  //       "label": "Asian *** Asian Indian",
  //       "value": "4"
  //     },
  //     {
  //       "label": "Asian *** Chinese",
  //       "value": "5"
  //     },
  //     {
  //       "label": "Asian *** Filipino",
  //       "value": "6"
  //     },
  //     {
  //       "label": "Asian *** Japanese",
  //       "value": "7"
  //     },
  //     {
  //       "label": "Asian *** Korean",
  //       "value": "8"
  //     },
  //     {
  //       "label": "Asian *** Vietnamese",
  //       "value": "9"
  //     },
  //     {
  //       "label": "Asian *** Other",
  //       "value": "10"
  //     },
  //     {
  //       "label": "Pacific Islander *** Native Hawaiian",
  //       "value": "11"
  //     },
  //     {
  //       "label": "Pacific Islander *** Guamanian",
  //       "value": "12"
  //     },
  //     {
  //       "label": "Pacific Islander *** Samoan",
  //       "value": "13"
  //     },
  //     {
  //       "label": "Pacific Islander *** Other Pacific Islander",
  //       "value": "14"
  //     },
  //     {
  //       "label": "Some other race",
  //       "value": "15"
  //     },
  //     {
  //       "label": "Prefer not to answer",
  //       "value": "16"
  //     }
  //   ]
  // },
  // {
  //   "questionId": "122",
  //   "question": "What is your REGION?",
  //   "type": QuestionType.SELECT,
  //   "options": [
  //     {
  //       "label": "Midwest",
  //       "value": "2"
  //     },
  //     {
  //       "label": "Northeast",
  //       "value": "1"
  //     },
  //     {
  //       "label": "South",
  //       "value": "3"
  //     },
  //     {
  //       "label": "West",
  //       "value": "4"
  //     }
  //   ]
  // },
  // {
  //   "questionId": "632",
  //   "question": "What is your relationship status?",
  //   "type": "",
  //   "options": [
  //     {
  //       "label": "Single, never married",
  //       "value": "1"
  //     },
  //     {
  //       "label": "Married",
  //       "value": "2"
  //     },
  //     {
  //       "label": "Separated, divorced or widowed",
  //       "value": "3"
  //     },
  //     {
  //       "label": "Domestic partnership/living with someone",
  //       "value": "4"
  //     },
  //     {
  //       "label": "Prefer not to answer",
  //       "value": "5"
  //     }
  //   ]
  // },
  {
    "questionId": "634",
    "question": "Are you registered to vote?",
    "type": QuestionType.RADIO,
    "options": [
      {
        "label": "Yes",
        "value": "1"
      },
      {
        "label": "No",
        "value": "2"
      }
    ]
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
    "question": "What is your sexual orientation?",
    "type": QuestionType.SELECT,
    "options": [
      {
        "label": "Heterosexual",
        "value": "1"
      },
      {
        "label": "Homosexual",
        "value": "2"
      },
      {
        "label": "Bisexual",
        "value": "3"
      },
      {
        "label": "Prefer not to answer",
        "value": "5"
      }
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
    "question": "Do you or does anyone in your household work in any of the following industries?",
    "type": QuestionType.MULTISELECT,
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
  // "options": [
  //   {
  //     "label": "Employed full-time",
  //     "value": "1"
  //   },
  //   {
  //     "label": "Employed part-time",
  //     "value": "2"
  //   },
  //   {
  //     "label": "Self-employed full-time",
  //     "value": "3"
  //   },
  //   {
  //     "label": "Self-employed part-time",
  //     "value": "4"
  //   },
  //   {
  //     "label": "Active military",
  //     "value": "5"
  //   },
  //   {
  //     "label": "Inactive military/Veteran",
  //     "value": "6"
  //   },
  //   {
  //     "label": "Temporarily unemployed",
  //     "value": "7"
  //   },
  //   {
  //     "label": "Full-time homemaker",
  //     "value": "8"
  //   },
  //   {
  //     "label": "Retired",
  //     "value": "9"
  //   },
  //   {
  //     "label": "Student",
  //     "value": "10"
  //   },
  //   {
  //     "label": "Disabled",
  //     "value": "11"
  //   },
  //   {
  //     "label": "Prefer not to answer",
  //     "value": "12"
  //   }
  // ]
  // },
  // {
  //   "questionId": "2204",
  //   "question": "Are you willing to consider joining an online panel community? If you qualify to join the panel, you will be asked to provide your name and e-mail address so that we can complete your registration.",
  //   "type": QuestionType.RADIO,
  //   "options": [
  //     {
  //       "label": "Yes",
  //       "value": "1"
  //     },
  //     {
  //       "label": "No",
  //       "value": "2"
  //     }
  //   ]
  // },
  {
    "questionId": "3546",
    "question": "Please choose which departments/products you have influence or decision making authority over regarding spending/purchasing",
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
        "label": "I am pregnant/expecting a child within the next 9 months",
        "value": "1"
      },
      {
        "label": "I have one or more children under the age of 18 living in my household",
        "value": "2"
      },
      {
        "label": "I have one or more children aged 18 or older living in my household",
        "value": "3"
      },
      {
        "label": "I have no children living in my household and I am not pregnant/expecting a child within the next 9 months",
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
        "label": "Assistant or Associate",
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
  //   "questionId": "23415",
  //   "question": "Which of the following religions do you most closely identify with?",
  //   "type": QuestionType.RADIO,
  // "options": [
  //   {
  //     "label": "Agnostic",
  //     "value": "1"
  //   },
  //   {
  //     "label": "Atheist",
  //     "value": "2"
  //   },
  //   {
  //     "label": "Buddhist",
  //     "value": "3"
  //   },
  //   {
  //     "label": "Christian (all denominations)",
  //     "value": "4"
  //   },
  //   {
  //     "label": "Hindu",
  //     "value": "5"
  //   },
  //   {
  //     "label": "Jewish",
  //     "value": "6"
  //   },
  //   {
  //     "label": "Muslim",
  //     "value": "7"
  //   },
  //   {
  //     "label": "Other",
  //     "value": "8"
  //   },
  //   {
  //     "label": "None of the above",
  //     "value": "-3105"
  //   }
  // ]
  // },
  // {
  //   "questionId": "29226",
  //   "question": "In order to qualify for this survey you may be asked to download an app or plug-in.\n\nWould you like to continue?",
  //   "type": QuestionType.RADIO,
  //   "options": [
  //     {
  //       "label": "Yes",
  //       "value": "1"
  //     },
  //     {
  //       "label": "No",
  //       "value": "2"
  //     }
  //   ]
  // },
  // {
  //   "questionId": "29228",
  //   "question": "In order to qualify for this survey you may be asked to provide personally-identifiable information (PII). Would you like to continue?",
  //   "type": QuestionType.RADIO,
  //   "options": [
  //     {
  //       "label": "Yes",
  //       "value": "1"
  //     },
  //     {
  //       "label": "No",
  //       "value": "2"
  //     }
  //   ]
  // },
  // {
  //   "questionId": "30226",
  //   "question": "You have indicated that you have a teenage child in the household between the ages of 13 and 17. Is your teenage child available to come to the computer and participate in a survey with your assistance?",
  //   "type": QuestionType.RADIO,
  //   "options": [
  //     {
  //       "label": "Yes",
  //       "value": "1"
  //     },
  //     {
  //       "label": "No",
  //       "value": "2"
  //     }
  //   ]
  // },
  // {
  //   "questionId": "30319",
  //   "question": "You have indicated that you have a child in the household under the age of 18. Is your child available to come to the computer and participate in a survey with your assistance?",
  //   "type": QuestionType.RADIO,
  //   "options": [
  //     {
  //       "label": "Yes",
  //       "value": "1"
  //     },
  //     {
  //       "label": "No",
  //       "value": "2"
  //     }
  //   ]
  // },
  // {
  //   "questionId": "30321",
  //   "question": "Thank you for agreeing to participate. At this point, please pass the computer over to your child and have them answer the following questions from his or her perspective. The next questions will be for your teen.",
  //   "type": "",
  //   "options": [
  //     {
  //       "label": "Continue",
  //       "value": "1"
  //     },
  //     {
  //       "label": "I've changed my mind - my teen cannot participate",
  //       "value": "2"
  //     }
  //   ]
  // },
  {
    "questionId": "32350",
    "question": "In politics today, do you consider yourself a Democrat, Republican, or Independent?",
    "type": QuestionType.SELECT,
    "options": [
      {
        "label": "Democrat",
        "value": "1"
      },
      {
        "label": "Republican",
        "value": "2"
      },
      {
        "label": "Independent",
        "value": "3"
      },
      {
        "label": "Prefer not to answer",
        "value": "4"
      }
    ]
  },
  {
    "questionId": "32352",
    "question": "Would you say that in your household you speak…? / ¿Diría que en su hogar usted habla…?",
    "type": QuestionType.SELECT,
    "options": [
      {
        "label": "Spanish all the time / Español todo el tiempo",
        "value": "1"
      },
      {
        "label": "Spanish more than half of the time / Español más de la mitad del tiempo",
        "value": "2"
      },
      {
        "label": "Spanish and English equally / Español e inglés por igual",
        "value": "3"
      },
      {
        "label": "English more than half of the time / Inglés más de la mitad del tiempo",
        "value": "4"
      },
      {
        "label": "English all the time / Inglés todo el tiempo",
        "value": "5"
      }
    ]
  },
  {
    "questionId": "43501",
    "question": "Do you have a webcam and are you willing to use it for an online research opportunity?",
    "type": QuestionType.SELECT,
    "options": [
      {
        "label": "I have a webcam and I am willing to use it for an online research opportunity.",
        "value": "1"
      },
      {
        "label": "I have a webcam but I am not willing to use it for an online research opportunity.",
        "value": "2"
      },
      {
        "label": "I do not have a webcam.",
        "value": "3"
      }
    ]
  },
  // {
  //   "questionId": "48741",
  //   "question": "What is the highest level of education you have completed?",
  //   "type": "",
  //   "options": [
  //     {
  //       "label": "Some high school or less",
  //       "value": "1"
  //     },
  //     {
  //       "label": "High school graduate",
  //       "value": "2"
  //     },
  //     {
  //       "label": "Other post high school vocational training",
  //       "value": "3"
  //     },
  //     {
  //       "label": "Completed some college, but no degree",
  //       "value": "4"
  //     },
  //     {
  //       "label": "Associate's degree",
  //       "value": "5"
  //     },
  //     {
  //       "label": "Bachelor's degree",
  //       "value": "6"
  //     },
  //     {
  //       "label": "Master's or professional degree",
  //       "value": "7"
  //     },
  //     {
  //       "label": "Doctorate degree",
  //       "value": "8"
  //     },
  //     {
  //       "label": "None of the above",
  //       "value": "-3105"
  //     }
  //   ]
  // },
  {
    "questionId": "61076",
    "question": "What is your current annual household income before taxes?",
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
        "label": "$20,000 to $24,999",
        "value": "3"
      },
      {
        "label": "$25,000 to $29,999",
        "value": "4"
      },
      {
        "label": "$30,000 to $34,999",
        "value": "5"
      },
      {
        "label": "$35,000 to $39,999",
        "value": "6"
      },
      {
        "label": "$40,000 to $44,999",
        "value": "7"
      },
      {
        "label": "$45,000 to $49,999",
        "value": "8"
      },
      {
        "label": "$50,000 to $54,999",
        "value": "9"
      },
      {
        "label": "$55,000 to $59,999",
        "value": "10"
      },
      {
        "label": "$60,000 to $64,999",
        "value": "11"
      },
      {
        "label": "$65,000 to $69,999",
        "value": "12"
      },
      {
        "label": "$70,000 to $74,999",
        "value": "13"
      },
      {
        "label": "$75,000 to $79,999",
        "value": "14"
      },
      {
        "label": "$80,000 to $84,999",
        "value": "15"
      },
      {
        "label": "$85,000 to $89,999",
        "value": "16"
      },
      {
        "label": "$90,000 to $94,999",
        "value": "17"
      },
      {
        "label": "$95,000 to $99,999",
        "value": "18"
      },
      {
        "label": "$100,000 to $124,999",
        "value": "19"
      },
      {
        "label": "$125,000 to $149,999",
        "value": "20"
      },
      {
        "label": "$150,000 to $174,999",
        "value": "21"
      },
      {
        "label": "$175,000 to $199,999",
        "value": "22"
      },
      {
        "label": "$200,000 to $249,999",
        "value": "23"
      },
      {
        "label": "$250,000 and above",
        "value": "24"
      },
      {
        "label": "Prefer not to answer",
        "value": "-3105"
      }
    ]
  },
  {
    "questionId": "84668",
    "question": "Do you, or have you ever, served in the United States Military?",
    "type": QuestionType.SELECT,
    "options": [
      {
        "label": "No",
        "value": "1"
      },
      {
        "label": "Yes - currently serving",
        "value": "2"
      },
      {
        "label": "Yes - no longer serving",
        "value": "3"
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
  {
    "questionId": "128244",
    "question": "In terms of your political views, do you consider yourself…",
    "type": QuestionType.SELECT,
    "options": [
      {
        "label": "Extremely liberal",
        "value": "1"
      },
      {
        "label": "Liberal",
        "value": "2"
      },
      {
        "label": "Slightly liberal",
        "value": "3"
      },
      {
        "label": "Moderate Or Middle of the Road",
        "value": "4"
      },
      {
        "label": "Slightly conservative",
        "value": "5"
      },
      {
        "label": "Conservative",
        "value": "6"
      },
      {
        "label": "Extremely conservative",
        "value": "7"
      },
      {
        "label": "None of the above",
        "value": "8"
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
  // },
  {
    "questionId": "157547",
    "question": "How do you identify?",
    "type": QuestionType.MULTISELECT,
    "options": [
      {
        "label": "Asian American",
        "value": "1"
      },
      {
        "label": "Black/Afro-caribbean, African American",
        "value": "2"
      },
      {
        "label": "East Asian",
        "value": "3"
      },
      {
        "label": "Filipino",
        "value": "4"
      },
      {
        "label": "Hispanic/Latinx",
        "value": "5"
      },
      {
        "label": "Middle Eastern",
        "value": "6"
      },
      {
        "label": "Native American or Alaskan Native",
        "value": "7"
      },
      {
        "label": "Pacific Islander",
        "value": "8"
      },
      {
        "label": "South Asian/Indian",
        "value": "9"
      },
      {
        "label": "White/Caucasian",
        "value": "10"
      },
      {
        "label": "Other",
        "value": "11"
      },
      {
        "label": "Prefer not to answer",
        "value": "-3105"
      }
    ]
  },
  // {
  //   "questionId": "157550",
  //   "question": "Which race/ethnicity do you identify with MOST (select one)?",
  //   "type": "",
  //   "options": []
  //   Asian American	1
  // Black / Afro - caribbean, African American	2
  // East Asian	3
  // Filipino	4
  // Hispanic / Latinx	5
  // Middle Eastern	6
  // Native American or Alaskan Native	7
  // Pacific Islander	8
  // South Asian / Indian	9
  // White / Caucasian	10
  // Multiracial	12
  // Other	11
  // Prefer not to answer - 3105
  // }
  ...(!old ? [{
    "questionId": "P6Q7",
    "type": QuestionType.MULTISELECT,
    "question": "Please let us know your survey and research preferences",
    "options": [
      { "label": "Patient & Caregiver Surveys & Interviews", "value": "Patient & Caregiver Surveys & Interviews" },
      { "label": "Online Interviews", "value": "Online Interviews" },
      { "label": "Business Surveys & Interviews", "value": "Business Surveys & Interviews" },
      { "label": "Consumer Surveys", "value": "Consumer Surveys" }
    ],
  }] : [])
]

export const UnitedStatesInitialValue = (old = false) => ({
  ...(!old ? {
    "What is your ethnicity?": "",
    "What is your current employment status?": "",
    "What is your level of education?": "",
    "What is your marital status?": ""
  } : {}),
  "Are you of Hispanic, Latino, or Spanish origin?": "",
  "What city you are closest to?": "",
  "Are you registered to vote?": "",
  "In your household, are you the person who makes most of the daily purchasing decisions?": "",
  "What is your sexual orientation?": "",
  "How many people live in your household including yourself?": "",
  "What best describes your current household?": "",
  "Do you or does anyone in your household work in any of the following industries?": [],
  "Which department do you primarily work within at your organization?": "",
  "Please indicate the age and gender of your child or children": [],
  "Please choose which departments/products you have influence or decision making authority over regarding spending/purchasing": [],
  "How many children do you have under the age of 18?": "",
  "Please choose the options that best describe your household": [],
  "What is your job title, level or responsibility?": "",
  "In politics today, do you consider yourself a Democrat, Republican, or Independent?": "",
  "Would you say that in your household you speak…? / ¿Diría que en su hogar usted habla…?": "",
  "Do you have a webcam and are you willing to use it for an online research opportunity?": "",
  "What is your current annual household income before taxes?": "",
  "Do you, or have you ever, served in the United States Military?": "",
  "Which of the following best describes the area you live in?": "",
  "In terms of your political views, do you consider yourself…": "",
  "How do you identify?": [],
  ...(!old ? { "Please let us know your survey and research preferences": [] } : {})
})
