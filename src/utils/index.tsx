import { ReactNode } from "react";
import { AFFILIATE_ID, AUSTRALIA, AUTH_TOKEN, CANADA, DIVISION, DIVISION_2, DIVISION_3, DIVISION_4, DIVISION_5, DIVISION_6, DIVISION_7, DIVISION_8, DIVISION_9, INDIA, LOGIN_FIRST_TIME_DAY, NEW_ZEALAND, POSTCODE_DEPENDENT_QUE, SOURCE, SURVEY_RESPONSE, SURVEY_STEP, TRANSACTION_ID, UNITED_KINGDOM, UNITED_STATES } from "../constants";
import { Typography } from "@mui/material";
import { v4 as uuid } from 'uuid';
import { IndiaStates, NewZealandStates, UKStates, USState, australiaState, canadaStates } from "./faqConstants";
import { IzipCodeTextInputData, ResearchDefenderReviewAPIPayload, ResearchDefenderReviewAPIResultType, SearchDefenderAPIPayload, States } from "../interfaceTypes";
import client from "../apollo";
import { UnitedStatesInitialValue, UnitedStatesPrimaryCriticalQuestions } from "../constants/united-states-primary-critical-questions";
import { Maybe, PaymentWithdrawalStatus } from "../generated";
import { lucidAustraliaValidationSchema, lucidCanadaValidationSchema, lucidEnglandValidationSchema, lucidNewZealandValidationSchema, lucidUnitedStatesValidationSchema } from "./schema";
import { AustraliaInitialValue, AustraliaLucidQuestions, AustraliaPostalCodeData } from "../constants/australia-primary-questions";
import { CanadaInitialValue, CanadaPrimaryQuestions } from "../constants/canada-primary-questions";
import { EnglandInitialValue, EnglandPrimaryQuestions, PostCodeData } from "../constants/england-primary-questions";
import { NewZealandInitialValue, NewZealandPrimaryQuestions } from "../constants/new-zealand-primary-questions";
import { ObjectSchema } from "yup";
import { IndiaInitialValue, IndiaPostalCodeData, IndiaPrimaryQuestions } from "../constants/india-primary-questions";

export function generateOTP(otpLength: number) {
  var digits = '0123456789';
  let OTP = '';
  for (let i = 0; i < otpLength; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

export const setToken = (token: string) => {
  return localStorage.setItem(AUTH_TOKEN, token);
}

export const getToken = () => {
  return localStorage.getItem(AUTH_TOKEN);
};

export const removeToken = () => {
  localStorage.removeItem(AUTH_TOKEN)
  localStorage.clear();
}

export const capitalizeFirstLetter = (item: string) => item.charAt(0).toUpperCase() + item.toLowerCase().slice(1);

export const renderItem = (
  name: string,
  value: Maybe<string> | number | ReactNode | undefined,
  noWrap?: boolean,
) => (
  <>
    <Typography>{name}</Typography>
    <Typography variant="h5" noWrap={noWrap} fontSize={14} color={"#111827"} fontWeight={700}>
      {value}
    </Typography>
  </>
);

export const requiredMessage = (fieldName: string) => `${fieldName} is required.`;
export const exampleMessage = (e: string) => `i.e ${e}`;
export const validMessage = (fieldName: string, example?: string) => `Please enter valid ${fieldName.toLowerCase()}. ${example ? exampleMessage(example) : ""}`;
export const maxLength = (fieldName: string, length: number) => `${fieldName} can be up to ${length} characters long.`;
export const minLength = (fieldName: string, length: number) => `${fieldName} should be at least ${length} characters long.`;

export const toTitleCase = (toTransform: string) => {
  return toTransform.replace(/\b([a-z])/g, function (_, initial) {
    return initial.toUpperCase();
  });
};

// CPI rounding & and multi-plying with 100
//Note:This Formula Provided by Micheal
export const CPIRounding = (cpi: number, lucid = false) => Math.ceil(cpi * 100 * (lucid ? (cpi > 1.5 ? 0.40 : 0.45) : 0.60))


export const getColorForPaymentRequestStatus = (status: PaymentWithdrawalStatus) => {
  switch (status) {
    case PaymentWithdrawalStatus.Delivered:
      return "success";
    case PaymentWithdrawalStatus.Cancelled:
      return "primary";
    case PaymentWithdrawalStatus.Requested:
      return "info";
  }
}

export const formatDate = (date: Date | string | number) => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

export const setTransactionAndSourceId = (transactionId: string, source: string, affiliateId: string) => {
  transactionId && localStorage.setItem(TRANSACTION_ID, transactionId);
  source && localStorage.setItem(SOURCE, source);
  affiliateId && localStorage.setItem(AFFILIATE_ID, affiliateId);
}

export const getTransactionId = () => {
  return localStorage.getItem(TRANSACTION_ID);
}

export const getSource = () => {
  return localStorage.getItem(SOURCE);
}

export const getAffiliateId = () => {
  return localStorage.getItem(AFFILIATE_ID);
};

export const removePantheraVariables = () => {
  localStorage.removeItem(TRANSACTION_ID);
  localStorage.removeItem(SOURCE);
}

export const sortStates = (statesArray: States[]) => statesArray.sort((stateA, stateB) => stateA.state.localeCompare(stateB.state));

// Set Selected Surveys IDs
export const setSelectedSurveyIds = (newId: string) => {
  const storedIds = localStorage.getItem('survey_selected_ids');
  let idsArray = storedIds ? JSON.parse(storedIds) : [];

  // Push new ID into the array
  idsArray.push(newId);

  localStorage.setItem('survey_selected_ids', JSON.stringify(idsArray));
};

// Get Selected Surveys IDs List
export const getSelectedSurveyIds = (): string[] => {
  const storedIds = localStorage.getItem('survey_selected_ids');
  return storedIds ? JSON.parse(storedIds) : [];
};

export const defenderAPISearch = async (): Promise<number | undefined> => {
  try {
    const response = await fetch(`https://prod.rtymgt.com/api/v4/respondents/search/a5d5fb63-dbfe-489c-9556-40d4d3506d1a?sn_ud=${uuid()}&sy_nr=${uuid()}&rt_sr_pd=${uuid()}`)
    const data: SearchDefenderAPIPayload = await response.json();
    const { Respondent: { threat_potential_score = 0 } = {} } = data || {}
    return threat_potential_score
  }
  catch (error) {
    console.log("error", "error")
  }
};

export const CountryToStates = (country: string): States[] => {
  switch (country) {
    case "United States":
      return USState;

    case "Australia":
      return australiaState;

    case "Canada":
      return canadaStates;

    case "United Kingdom":
      return UKStates;

    case "New Zealand":
      return NewZealandStates;

    case "India":
      return IndiaStates;

    default:
      return [];
  }
}

export const getSurveyResponse = () => JSON.parse(localStorage.getItem(SURVEY_RESPONSE) ?? "{}");
export const getSurveyStep = () => JSON.parse(localStorage.getItem(SURVEY_STEP) ?? "1");
export const getSurveyPostCodeQueStep = () => JSON.parse(localStorage.getItem(POSTCODE_DEPENDENT_QUE) ?? "[]");
export const setSurveyStep = (step: string) => localStorage.setItem(SURVEY_STEP, step);
export const setSurveyResponseLocalStorage = (responses: string) => localStorage.setItem(SURVEY_RESPONSE, responses);
export const setPostCodeDependentQueLocalStorage = (responses: string) => localStorage.setItem(POSTCODE_DEPENDENT_QUE, responses);

export const removeSurveyResponse = () => {
  localStorage.removeItem(SURVEY_RESPONSE);
  localStorage.removeItem(SURVEY_STEP);
}

export const handleLogout = () => {
  removeToken();
  client.clearStore();
  window.location.reload();
};

export const RenderQuestion = (country: string, old = false) => {
  switch (country) {
    case UNITED_STATES:
      return UnitedStatesPrimaryCriticalQuestions(old);

    case AUSTRALIA:
      return AustraliaLucidQuestions;

    case CANADA:
      return CanadaPrimaryQuestions;

    case UNITED_KINGDOM:
      return EnglandPrimaryQuestions(old)

    case NEW_ZEALAND:
      return NewZealandPrimaryQuestions

    case INDIA:
      return IndiaPrimaryQuestions

    default:
      return []
  }
}

export const RenderLucidQuestionsSchema = (country: string): ObjectSchema<{}> | undefined => {
  switch (country) {
    case UNITED_STATES:
      return lucidUnitedStatesValidationSchema;

    case AUSTRALIA:
      return lucidAustraliaValidationSchema;

    case CANADA:
      return lucidCanadaValidationSchema;

    case UNITED_KINGDOM:
      return lucidEnglandValidationSchema

    case NEW_ZEALAND:
      return lucidNewZealandValidationSchema

    default:
      return undefined
  }
}

export const RenderLucidQuestionsInitialValue = (country: string, old = false) => {
  switch (country) {
    case UNITED_STATES:
      return UnitedStatesInitialValue(old);

    case AUSTRALIA:
      return AustraliaInitialValue;

    case CANADA:
      return CanadaInitialValue;

    case UNITED_KINGDOM:
      return EnglandInitialValue(old)

    case NEW_ZEALAND:
      return NewZealandInitialValue

    case INDIA:
      return IndiaInitialValue

    default:
      return undefined
  }
}
export const defenderReviewAPI = async (text: string, panelistId: string): Promise<ResearchDefenderReviewAPIResultType | undefined> => {
  try {
    const response = await fetch(`https://prod.rtymgt.com/api/v4/respondents/review/a5d5fb63-dbfe-489c-9556-40d4d3506d1a?q_id=${panelistId}&text=${text}`)
    const data: ResearchDefenderReviewAPIPayload = await response.json();
    const { results } = data
    const [resultItem] = results
    return resultItem
  }
  catch (error) {
    console.log("error", "error")
  }
};

export const CountrySpellAdjustment = (country: string): string => {
  switch (country) {
    case "united states":
      return UNITED_STATES;
    case "united kingdom":
      return UNITED_KINGDOM;
    case "australia":
      return AUSTRALIA;
    case "canada":
      return CANADA;
    case "new zealand":
      return NEW_ZEALAND;
    case "india":
      return INDIA;
    default:
      return UNITED_STATES;
  }
}

export const StateToDivision = (state: string) => {
  if (DIVISION.includes(state)) {
    return "New England";
  }

  if (DIVISION_2.includes(state)) {
    return "Middle Atlantic";
  }

  if (DIVISION_3.includes(state)) {
    return "East North Central";
  }

  if (DIVISION_4.includes(state)) {
    return "West North Central";
  }

  if (DIVISION_5.includes(state)) {
    return "South Atlantic";
  }

  if (DIVISION_6.includes(state)) {
    return "East South Central";
  }

  if (DIVISION_7.includes(state)) {
    return "West South Central";
  }

  if (DIVISION_8.includes(state)) {
    return "Mountain";
  }

  if (DIVISION_9.includes(state)) {
    return "Pacific";
  }

  return "";

}

export const StateToRegion = (state: string) => {
  if ([...DIVISION, ...DIVISION_2].includes(state)) {
    return "Northeast";
  }

  if ([...DIVISION_3, ...DIVISION_4].includes(state)) {
    return "Midwest";
  }

  if ([...DIVISION_5, ...DIVISION_6, ...DIVISION_7].includes(state)) {
    return "South";
  }

  if ([...DIVISION_8, ...DIVISION_9].includes(state)) {
    return "West";
  }

  return "";
};

export const zipCode: IzipCodeTextInputData = {
  "United States": {
    zipCodeName: "zipCode",
    zipCodeLabel: "Zip Code",
  },
  "United Kingdom": {
    zipCodeName: "zipCode",
    zipCodeLabel: "Postal Code",
  },
  "Australia": {
    zipCodeName: "zipCode",
    zipCodeLabel: "Zip Code",
  },
  "Canada": {
    zipCodeName: "zipCode",
    zipCodeLabel: "Zip Code",
  },
  "New Zealand": {
    zipCodeName: "zipCode",
    zipCodeLabel: "Zip Code",
  },
  "India": {
    zipCodeName: "zipCode",
    zipCodeLabel: "Zip Code",
  },
};

export const LoiScore = (loi: number): number => {
  // 0 - 5 LOI = 15 points
  // 6 - 10 LOI = 10 points
  // 11 - 20 LOI = 8 points
  // 21 - 25 LOI = 6 points
  // 26 + LOI = 4 points
  if (loi >= 0 && loi <= 5) {
    return 15
  };

  if (loi >= 6 && loi <= 10) {
    return 10
  };

  if (loi >= 11 && loi <= 20) {
    return 8
  };

  if (loi >= 21 && loi <= 25) {
    return 6
  };

  return 4
}

export const CalculateSurveyScore = (interviewLength: number, conversionRate: number): number => {
  const loiScore = LoiScore(interviewLength || 0);
  const functionalConversion = conversionRate ? (conversionRate * 100) : 10;
  return (loiScore + functionalConversion) < 25 ? 0 : (loiScore + functionalConversion)
}

export const getLoginAt = () => {
  return localStorage.getItem(LOGIN_FIRST_TIME_DAY);
}

export const setLoginAt = () => {
  return localStorage.setItem(LOGIN_FIRST_TIME_DAY, "LOGGED_IN");
}

export const getUSAZipCodeData = async (zipCode: string) => {
  const ZipCodeInput = zipCode?.split(' ')[0]
  const res = await fetch(`${process.env.REACT_APP_BACKEND_DEV_API_URL}/user/getVerifiedUSAZipCodeData?zipCode=${ZipCodeInput}`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${getToken()}`
    }
  });
  return res;
}

export const getCountriesToPostalCodeData = (postCodeValue: string, country: string) => {
  switch (country) {
    case UNITED_KINGDOM:
      return PostCodeData[postCodeValue];
    case AUSTRALIA:
      return AustraliaPostalCodeData[postCodeValue];
    case INDIA:
      return IndiaPostalCodeData[postCodeValue];
    default:
      throw new Error('Invalid Country');
  }

}