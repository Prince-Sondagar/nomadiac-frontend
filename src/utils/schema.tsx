import * as yup from "yup";
import {
  ALPHABETS_REGEX,
  AUSTRALIA,
  INDIA,
  PASSWORD_REGEX,
  PASSWORD_VALIDATION_MESSAGE,
  UNITED_KINGDOM,
  UNITED_STATES,
} from "../constants";
import { USA_ZIP_CODES } from "../constants/usa_zip_code";
import { UK_POSTAL_CODES } from "../constants/uk_zip_code";
import { CountrySpellAdjustment, zipCode } from ".";
import { INDIA_ZIP_CODE } from "../constants/india-primary-questions";
import { AUSTRALIA_ZIP_CODE } from "../constants/australia-primary-questions";

export const requiredMessage = (fieldName: string) =>
  `${fieldName} is required!`;
export const exampleMessage = (e: string) => `i.e ${e}`;
export const validMessage = (fieldName: string, example?: string) =>
  `Please enter valid ${fieldName.toLowerCase()}. ${example ? exampleMessage(example) : ""
  }`;
export const maxLength = (fieldName: string, length: number) =>
  `${fieldName} can be up to ${length} characters long.`;
export const minLength = (fieldName: string, length: number) =>
  `${fieldName} should be at least ${length} characters long.`;

export const createPanelistPersonalInfoSchema = yup.object().shape({
  phone: yup.string().required("Phone no. is required!"),
  gender: yup.string().required("Please select  a gender"),
  city: yup.string().required("City is required!"),
  state: yup
    .object()
    .shape({
      state: yup.string().required("State is Required!"),
      value: yup.string().required("State is Required!"),
    })
    .required("State is Required!"),
  country: yup.string().required("City is required!"),
  address: yup.string().required("Address is required!"),
});

export const PanelistUpdateSchema = yup.object().shape({
  dob: yup
    .string()
    .required("dob is required")
    .matches(
      /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
      "it must be in yyyy-mm-dd format"
    ),
  phone: yup.string().required("Phone No is required"),
  gender: yup.string().required("Please select  a gender"),
  address: yup
    .string()
    .min(3, "should be 3 chars minimum")
    .required("Address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zipCode: yup.string().required("Postal/ZIP is required"),
  timezone: yup.string(),
});

export const updateUserSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, minLength("First name", 2))
    .max(30, maxLength("First name", 30))
    .matches(ALPHABETS_REGEX, "Please add valid first name")
    .required(requiredMessage("First name")),
  lastName: yup
    .string()
    .min(2, minLength("Last name", 2))
    .max(30, maxLength("Last name", 30))
    .matches(ALPHABETS_REGEX, "Please add valid last name")
    .required(requiredMessage("Last name")),
  email: yup.string().email().required(requiredMessage("Email")),
});

export const passwordSchema = yup
  .string()
  .min(8, minLength("Password", 8))
  .matches(
    PASSWORD_REGEX,
    "please enter Valid Password. use of at least 1 uppercase, 1 lowercase, 1 number and 1 special character"
  )
  .required("Password is required!");
const passwordValidationSchema = {
  password: yup.string().required(requiredMessage("Password")),
};
const emailValidationSchema = {
  email: yup.string().email().required(requiredMessage("Email")),
};

const passwordAndRepeatPasswordSchema = {
  password: yup
    .string()
    .required(requiredMessage("Password"))
    .matches(PASSWORD_REGEX, PASSWORD_VALIDATION_MESSAGE),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm your Password"),
};

export const updatePasswordSchema = yup.object().shape({
  ...passwordAndRepeatPasswordSchema,
});

export const loginValidationSchema = yup.object({
  ...emailValidationSchema,
  ...passwordValidationSchema,
});

export const signUpValidationSchema = (country: string) =>
  yup.object({
    ...emailValidationSchema,
    firstName: yup
      .string()
      .required(requiredMessage("First name"))
      .min(2, minLength("First name", 2))
      .max(30, maxLength("First name", 30))
      .matches(ALPHABETS_REGEX, "Please add valid first name")
      .required(requiredMessage("First name")),
    lastName: yup
      .string()
      .required(requiredMessage("Last name"))
      .min(2, minLength("Last name", 2))
      .max(30, maxLength("Last name", 30))
      .matches(ALPHABETS_REGEX, "Please add valid last name")
      .required(requiredMessage("Last name")),
    dob: yup
      .date()
      .required("DOB is required!")
      .typeError("please enter a valid date"),
    zipCode: yup
      .string()
      .required(
        requiredMessage(
          zipCode[CountrySpellAdjustment(String(country).toLowerCase())]
            ?.zipCodeLabel
        )
      )
      .test(
        "is-valid-zip",
        `${zipCode[CountrySpellAdjustment(String(country).toLowerCase())]
          ?.zipCodeLabel
        } is not valid `,
        (value) => {
          if (value) {
            if (country === UNITED_STATES && USA_ZIP_CODES.includes(value)) {
              return true; // Valid USA zip code
            }
            // Check if it contains the first 3 digits of any UK postal code
            if (country === UNITED_KINGDOM && UK_POSTAL_CODES.some((code) =>
              value.startsWith(code.substring(0, 3))
            )
            ) {
              return true; // Contains the first 3 digits of a UK postal code
            }
            if (country === INDIA && INDIA_ZIP_CODE.includes(value)) {
              return true;
            }
            if (country === AUSTRALIA && AUSTRALIA_ZIP_CODE.includes(value)) {
              return true;
            }
            return false; // Not valid
          }
          return false; // Required but empty
        }
      ),
    signupSource: yup.string(),
    privacyPolicy: yup.boolean(),
    termsAndConditions: yup.boolean(),
    fraudScore: yup.number(),
  });

export const withdrawPaymentValidationSchema = (maximumValue: number) => {
  return yup.object().shape({
    withdrawalPoint: yup
      .number()
      .integer("Please Enter an Integer Value")
      .typeError("Please Enter an Integer Value")
      .min(500, "Withdrawal Points must be at least 500")
      .max(maximumValue, `Withdrawal Points cannot exceed ${maximumValue}`)
      .required("This Field is Required."),

    type: yup.string().required("Please Select the withdrawal type."),
  });
};

export const lucidUnitedStatesValidationSchema = yup.object().shape({
  "What is your ethnicity?": yup.string().required(requiredMessage("This Field")),
  "What is your current employment status?": yup.string().required(requiredMessage("This Field")),
  "What is your level of education?": yup.string().required(requiredMessage("This Field")),
  "What is your marital status?": yup.string().required(requiredMessage("This Field")),
  "Are you of Hispanic, Latino, or Spanish origin?": yup.string().required(requiredMessage("This Field")),
  "What city you are closest to?": yup.string().required(requiredMessage("This Field")),
  "Are you registered to vote?": yup
    .string()
    .required(requiredMessage("This Field")),
  "In your household, are you the person who makes most of the daily purchasing decisions?":
    yup.string().required(requiredMessage("This Field")),
  "What is your sexual orientation?": yup
    .string()
    .required(requiredMessage("This Field")),
  "How many people live in your household including yourself?": yup
    .string()
    .required(requiredMessage("This Field")),
  "What best describes your current household?": yup
    .string()
    .required(requiredMessage("This Field")),
  "Do you or does anyone in your household work in any of the following industries?": yup.array().of(
    yup.object().shape({
      label: yup.string().required(requiredMessage("This Field")),
      value: yup.string().required(requiredMessage("This Field")),
    })
  ).required(requiredMessage("This Field")),
  "Which department do you primarily work within at your organization?": yup
    .string()
    .required(requiredMessage("This Field")),
  "Please indicate the age and gender of your child or children":
    yup.array().of(
      yup.object().shape({
        label: yup.string().required(requiredMessage("This Field")),
        value: yup.string().required(requiredMessage("This Field")),
      })
    ).required(requiredMessage("This Field")),
  "Please choose which departments/products you have influence or decision making authority over regarding spending/purchasing": yup.array().of(
    yup.object().shape({
      label: yup.string().required(requiredMessage("This Field")),
      value: yup.string().required(requiredMessage("This Field")),
    })
  ).required(requiredMessage("This Field")),
  "How many children do you have under the age of 18?": yup
    .string()
    .required(requiredMessage("This Field")),
  "Please choose the options that best describe your household": yup.array().of(
    yup.object().shape({
      label: yup.string().required(requiredMessage("This Field")),
      value: yup.string().required(requiredMessage("This Field")),
    })
  ).required(requiredMessage("This Field")),
  "What is your job title, level or responsibility?": yup
    .string()
    .required(requiredMessage("This Field")),
  "In politics today, do you consider yourself a Democrat, Republican, or Independent?":
    yup.string().required(requiredMessage("This Field")),
  "Would you say that in your household you speak…? / ¿Diría que en su hogar usted habla…?":
    yup.string().required(requiredMessage("This Field")),
  "Do you have a webcam and are you willing to use it for an online research opportunity?":
    yup.string().required(requiredMessage("This Field")),
  "What is your current annual household income before taxes?": yup
    .string()
    .required(requiredMessage("This Field")),
  "Do you, or have you ever, served in the United States Military?": yup
    .string()
    .required(requiredMessage("This Field")),
  "Which of the following best describes the area you live in?": yup
    .string()
    .required(requiredMessage("This Field")),
  "In terms of your political views, do you consider yourself…": yup
    .string()
    .required(requiredMessage("This Field")),
  "How do you identify?": yup.array().of(
    yup.object().shape({
      label: yup.string().required(requiredMessage("This Field")),
      value: yup.string().required(requiredMessage("This Field")),
    })
  ).required(requiredMessage("This Field")),
  "Please let us know your survey and research preferences": yup.array().of(
    yup.object().shape({
      label: yup.string().required(requiredMessage("This Field")),
      value: yup.string().required(requiredMessage("This Field")),
    })
  ).required(requiredMessage("This Field")),
});
// yup.array().of(yup.string()).required(requiredMessage("This Field"))

export const lucidAustraliaValidationSchema = yup.object().shape({
  "What is your ethnicity?": yup.string().required(requiredMessage("This Field")),
  "What is your current employment status?": yup.string().required(requiredMessage("This Field")),
  "What is your level of education?": yup.string().required(requiredMessage("This Field")),
  "What is your marital status?": yup.string().required(requiredMessage("This Field")),
  "In your household, are you the person who makes most of the daily purchasing decisions?":
    yup.string().required(requiredMessage("This Field")),
  "How do you identify?": yup.array().of(yup.string()).required(requiredMessage("This Field")),
  "How many people live in your household including yourself?": yup
    .string()
    .required(requiredMessage("This Field")),
  "What best describes your current household?": yup
    .string()
    .required(requiredMessage("This Field")),
  "Do you, or does anyone in your household, work in any of the following industries?":
    yup.string().required(requiredMessage("This Field")),
  "Which department do you primarily work within at your organization?": yup
    .string()
    .required(requiredMessage("This Field")),
  "Please indicate the age and gender of your child or children": yup
    .array()
    .of(yup.string())
    .required(requiredMessage("This Field")),
  "Please choose which departments/products you have influence or decision making authority over regarding spending/purchasing.":
    yup.array().of(yup.string()).required(requiredMessage("This Field")),
  "How many children do you have under the age of 18?": yup
    .string()
    .required(requiredMessage("This Field")),
  "Please choose the options that best describe your household": yup.array().of(yup.string()).required(requiredMessage("This Field")),
  "What is your job title, level or responsibility?": yup
    .string()
    .required(requiredMessage("This Field")),
  "What is your yearly household income?": yup
    .string()
    .required(requiredMessage("This Field")),
  "What state do you live in?": yup
    .string()
    .required(requiredMessage("This Field")),
  "Which of the following best describes the area you live in?": yup
    .string()
    .required(requiredMessage("This Field")),
  "Please let us know your survey and research preferences": yup.array().of(yup.string()).required(requiredMessage("This Field")),
});

export const lucidCanadaValidationSchema = yup.object().shape({
  "What is your ethnicity?": yup.string().required(requiredMessage("This Field")),
  "What is your current employment status?": yup.string().required(requiredMessage("This Field")),
  "What is your level of education?": yup.string().required(requiredMessage("This Field")),
  "What is your marital status?": yup.string().required(requiredMessage("This Field")),
  "In your household, are you the person who makes most of the daily purchasing decisions?":
    yup.string().required(requiredMessage("This Field")),
  "How do you identify?": yup.array().of(yup.string()).required(requiredMessage("This Field")),
  "How many people live in your household including yourself?": yup
    .string()
    .required(requiredMessage("This Field")),
  "What best describes your current household?": yup
    .string()
    .required(requiredMessage("This Field")),
  "Do you, or does anyone in your household, work in any of the following industries?":
    yup.string().required(requiredMessage("This Field")),
  "Which department do you primarily work within at your organization?": yup
    .string()
    .required(requiredMessage("This Field")),
  "Please indicate the age and gender of your child or children": yup
    .array()
    .of(yup.string())
    .required(requiredMessage("This Field")),
  "Please choose which departments/products you have influence or decision making authority over regarding spending/purchasing.":
    yup.array().of(yup.string()).required(requiredMessage("This Field")),
  "How many children do you have under the age of 18?": yup
    .number()
    .required(requiredMessage("This Field")),
  "Please choose the options that best describe your household":
    yup.array().of(yup.string()).required(requiredMessage("This Field")),
  "What is your job title, level or responsibility?": yup
    .string()
    .required(requiredMessage("This Field")),
  "What is your current annual household income after taxes?": yup
    .string()
    .required(requiredMessage("This Field")),
  "What province do you live in?": yup
    .string()
    .required(requiredMessage("This Field")),
  "Which of the following best describes the area you live in?": yup
    .string()
    .required(requiredMessage("This Field")),
  "Please let us know your survey and research preferences": yup.array().of(yup.string()).required(requiredMessage("This Field")),
});

export const lucidEnglandValidationSchema = yup.object().shape({
  "What is your ethnicity?": yup.string().required(requiredMessage("This Field")),
  "What is your current employment status?": yup.string().required(requiredMessage("This Field")),
  "What is your level of education?": yup.string().required(requiredMessage("This Field")),
  "What is your marital status?": yup.string().required(requiredMessage("This Field")),
  "In your household, are you the person who makes most of the daily purchasing decisions?":
    yup.string().required(requiredMessage("This Field")),
  "How do you identify?": yup.array().of(yup.string()).required(requiredMessage("This Field")),
  "How many people live in your household including yourself?": yup
    .string()
    .required(requiredMessage("This Field")),
  "What best describes your current household?": yup
    .string()
    .required(requiredMessage("This Field")),
  "Do you or does anyone in your household work in any of the following industries?":
    yup.array().of(yup.string()).required(requiredMessage("This Field")),
  "Approximately what is the annual revenue for your organization?": yup
    .string()
    .required(requiredMessage("This Field")),
  "Which department do you primarily work within at your organization?": yup
    .string()
    .required(requiredMessage("This Field")),
  "Please let us know your survey and research preferences": yup.array().of(yup.string()).required(requiredMessage("This Field")),
});

export const lucidNewZealandValidationSchema = yup.object().shape({
  "What is your ethnicity?": yup.string().required(requiredMessage("This Field")),
  "What is your current employment status?": yup.string().required(requiredMessage("This Field")),
  "What is your level of education?": yup.string().required(requiredMessage("This Field")),
  "What is your marital status?": yup.string().required(requiredMessage("This Field")),
  "In your household, are you the person who makes most of the daily purchasing decisions?":
    yup.string().required(requiredMessage("This Field")),
  "Do you, or does anyone in your household, work in any of the following industries?":
    yup.string().required(requiredMessage("This Field")),
  "Which department do you primarily work within at your organization?": yup
    .string()
    .required(requiredMessage("This Field")),
  "Please indicate the age and gender of your child or children": yup
    .array()
    .of(yup.string())
    .required(requiredMessage("This Field")),
  "Please choose which departments/products you have influence or decision making authority over regarding spending/purchasing.":
    yup.array().of(yup.string()).required(requiredMessage("This Field")),
  "How many children do you have under the age of 18?": yup
    .string()
    .required(requiredMessage("This Field")),
  "Please choose the options that best describe your household": yup.array().of(yup.string()).required(requiredMessage("This Field")),
  "What is your job title, level or responsibility?": yup
    .string()
    .required(requiredMessage("This Field")),
  "How much total combined annual income do all members of your household earn before taxes?":
    yup.string().required(requiredMessage("This Field")),
  "Which of the following best describes the area you live in?": yup
    .string()
    .required(requiredMessage("This Field")),
  "Please let us know your survey and research preferences": yup.array().of(yup.string()).required(requiredMessage("This Field")),
});