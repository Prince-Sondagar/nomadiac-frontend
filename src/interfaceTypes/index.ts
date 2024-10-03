import { Dispatch, ReactNode, SetStateAction } from "react";
import {
  CreateBulkSignupSurveyResponseInput,
  FusionSurveyType,
  LucidSurvey,
  Maybe,
  Panelist,
  User,
  UserGender,
  VerifyResponsePayload,
} from "../generated";
import { StandardTextFieldProps } from "@mui/material";
import { TypographyProps } from "@mui/system";
import { GraphQLErrorExtensions } from "graphql";

export interface ErrorResponseType {
  error: string;
  message: string;
  status: number;
  response: ErrorResponseType
}

export interface ErrorException extends GraphQLErrorExtensions {
  message: string;
  name: string;

  response: {
    error: string;
    message: string;
    status: number;
    response: ErrorResponseType;
  };
}

export type PasswordType = "password" | "text";
type Key = string | number | undefined;
export interface CloseSnackbarProps {
  id: Key;
}

export interface NoDataFoundPropsTypes {
  message?: string;
}
export interface ChildrenType {
  children?: ReactNode;
  setToggle?: Dispatch<SetStateAction<boolean>>;
}

export type LayoutProps = Pick<ChildrenType, "children">;
export interface AuthContextProps {
  currentUser: Maybe<User> | undefined;
  currentPanelist: Maybe<Panelist> | undefined;
  setCurrentUser: Dispatch<SetStateAction<Maybe<User | undefined>>>;
  setCurrentPanelist: Dispatch<SetStateAction<Maybe<Panelist | undefined>>>;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  onLeavePanelAndDeactive: Function;
  isLoggedIn: boolean;
  isLoading: boolean;
  handleLogout: Function;
  refreshPanelist?: Function;
}
export interface CardComponentType extends ChildrenType {
  cardTitle: string;
  isEdit?: boolean;
  hideSaveIcon?: boolean;
  disableSaveIcon?: boolean;
  disableEditIcon?: boolean;
  hasEdit?: boolean;
  onEditClick?: () => void;
}
export interface ShowPasswordProps {
  passwordType: string;
  isPassword: boolean | undefined;
  handleShowPassword: () => void;
}

interface ControlLabelProps {
  controllerLabel: string;
  fieldType?: string;
  error?: string;
  isPassword?: boolean;
  isDisabled?: boolean;
}
export interface CustomControlProps extends ControlLabelProps {
  controllerName: string;
  isMultiLine?: boolean;
  variant?: StandardTextFieldProps["variant"];
  maxLength?: number;
}

export type StatusBoxProps = TypographyProps & {
  borderColor?: string;
};

export interface TableLoaderType {
  numberOfRows: number;
  numberOfColumns: number;
}

export interface personalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  stateRegion: string;
  zip: string;
  gender: UserGender;
  dob: string;
}

export interface Code {
  flag: JSX.Element;
  value: string;
}

export type UpdatePasswordInput = {
  password: string;
  repeatPassword: string;
};

export interface DefenderAPISurveyType {
  survey_number: number;
  duplicate_initial_ud: string;
  sn_ud: string;
  duplicate_potential: string;
  flag: number;
  destination: Object;
  duplicate_score: number;
  failure_reason: string;
  country_mismatch: number;
}

export interface SearchDefenderAPIPayload {
  Surveys: DefenderAPISurveyType[];

  Respondent: {
    country_code: string;
    threat_potential: string;
    threat_potential_score: number;
    respondent_ud: string;
    respondent_risk: number;
    country: string;
  };
  exec: string;
}

export interface States {
  value: string;
  state: string;
}

export enum QuestionType {
  TEXTFIELD = "TextField",
  NUMERICFIELD = "NumericField",
  RADIO = "Radio",
  CHECKBOX = "CheckBox",
  AUTOCOMPLETE = "AutoComplete",
  SELECT = "Select",
  MULTISELECT = "MultiSelect",
  SEARCHINPUT = "SearchInput",
}

export interface FullPageLoaderPropsType {
  loading: boolean;
}

export interface QuestionAnswerResponseType {
  code: string;
  question: string;
  options: string[];
  text?: string;
}

export type multiOptionType = {
  value: string;
  label: string;
};

export interface SelectorInterface extends CustomControlProps {
  optionsArray: multiOptionType[];
}

export interface AutoCompletePropsType extends CustomControlProps {
  optionsArray: States[];
}

export interface BasicInformationType {
  country: string;
  state: {
    value: string;
    state: string;
  };
  phone: string;
  city: string;
  address: string;
  gender: string;
}

export interface CompleteProfile extends BasicInformationType {
  responses?: QuestionAnswerResponseType[];
}

export type CustomCreateBulkSignupSurveyResponseInput = Omit<CreateBulkSignupSurveyResponseInput, "answer"> & {
  answer: string | string[]
}
export interface RegisterPanelistWithLucidJoiner extends BasicInformationType {
  responses: CustomCreateBulkSignupSurveyResponseInput[]
}
export interface BasicDetailsPropsType {
  surveyResponse: RegisterPanelistWithLucidJoiner | null;
  setSurveyResponse: Dispatch<SetStateAction<RegisterPanelistWithLucidJoiner | null>>;
  setStep: Dispatch<SetStateAction<number>>;
  step?: number;
  setSurveyResponseFusion: Dispatch<SetStateAction<CompleteProfile | null>>;
  setMobileNumberVerifyResponse?: Dispatch<
    SetStateAction<VerifyResponsePayload | null>
  >;
}

export interface OtherDetailsPropsType {
  surveyResponse: CompleteProfile | null;
  setStep: Dispatch<SetStateAction<number>>;
  setSurveyResponse: Dispatch<SetStateAction<CompleteProfile | null>>;
  mobileNumberVerifyResponse?: VerifyResponsePayload | null;
}

export interface LucidDetailsPropsType {
  surveyResponse: RegisterPanelistWithLucidJoiner | null;
  setStep: Dispatch<SetStateAction<number>>;
  setSurveyResponse: Dispatch<SetStateAction<RegisterPanelistWithLucidJoiner | null>>;
  step?: number;
  mobileNumberVerifyResponse?: VerifyResponsePayload | null;
}

export interface QuestionDataType {
  code: string;
  text: string;
  options: Array<string>;
  type: string[];
  textLinkedWithOther?: string;
  linked?: {
    questionCode: string;
    options: string[];
  };
}
export interface QuestionComponentPropsType {
  question: QuestionDataType;
  formCheck: string[];
  setFormCheck: Dispatch<SetStateAction<string[]>>;
  sortedQuestionList: QuestionDataType[];
  surveyResponse: CompleteProfile | null;
  setSurveyResponse: Dispatch<SetStateAction<CompleteProfile | null>>;
}

export interface RadioPropsType {
  options: string[];
  questionCode: string;
  question: string;
  sortedQuestionList: QuestionDataType[];
  surveyResponse: CompleteProfile | null;
  setSurveyResponse: Dispatch<SetStateAction<CompleteProfile | null>>;
}

export type SelectPropsType = RadioPropsType & {
  isMulti: boolean;
};

export type TextPropType = RadioPropsType & {
  formCheck: string[];
  setFormCheck: Dispatch<SetStateAction<string[]>>;
  textLinkedWithOther?: string;
};

export interface SurveysTableProps {
  surveys: Array<Maybe<FusionSurveyType>>;
  isLoading: boolean;
  panelistId: string;
}
export interface WithdrawalRequestFormType {
  withdrawalPoint: number;
  type: string;
}

export interface LucidQuestionPropsType {
  questionItem: {
    questionId: string;
    question: string;
    type: QuestionType;
    options: {
      label: string;
      value: string;
    }[];
  };
  questionIndex: number;
  setPostCodeDependentQue?: any
}
export type LabelValuePair = {
  label: string;
  value: string;
};

export type LucidFormType = { [key: string]: string | string[] };

export interface ResearchDefenderReviewAPIResultType {
  input: {
    similarity_text_length: string;
    text: string;
    q_id: string;
  };
  score: {
    similarity_text: number;
    profanity_check: number;
    page_view_time: number;
    engagement_score: number;
    typed_response_time: number;
    pasted_response: number;
    language_detected_score: number;
    composite_score: number;
    garbage_words: number;
    pasted_response_score: number;
    language_detected: string;
    profanity_check_score: number;
    garbage_words_score: number;
  };
}
export interface ResearchDefenderReviewAPIPayload {
  results: ResearchDefenderReviewAPIResultType[];
}

export type RegisterPanelistMobileInput = { signupSource?: string | undefined; privacyPolicy?: boolean | undefined; termsAndConditions?: boolean | undefined; fraudScore?: number | undefined; firstName: string; lastName: string; dob: Date; zipCode: string; email: string; };

export interface LucidSurveysTablePropType {
  setIsLucidSurveyAvailable: Dispatch<SetStateAction<boolean>>;
}

export interface LucidSurveyCardPropType {
  survey: Maybe<LucidSurvey>
  lucidSurveys: Maybe<LucidSurvey>[];
  setLucidSurveys: Dispatch<SetStateAction<Maybe<LucidSurvey>[]>>
  setSelectedSurveyId: Dispatch<SetStateAction<string>>
  selectedSurveyId: string
  refetch: Function
  setRefreshCache: Dispatch<SetStateAction<boolean>>
  refreshCache: boolean
  unAvailableSurveyIdsRef: React.MutableRefObject<string[]>
}

export type IpostCodeData = {
  [key: string]: {
    country: LabelValuePair;
    region: LabelValuePair;
    areaType: LabelValuePair;
  }
}

export type IpostCodeDependentQue = {
  question: string;
  answer: string;
};

export type IzipCodeTextInputData = {
  [key: string]: {
    zipCodeName: string;
    zipCodeLabel: string;
  };
};

export type IzipCodeUSJoinerData = {
  [key: string]: {
    state: LabelValuePair;
    region: LabelValuePair;
    division: LabelValuePair;
  }
}

export type IAusPostalCodeData = {
  [key: string]: {
    state: LabelValuePair;
    area: LabelValuePair;
  };
};

export type IndiaPostalCodeDataType = {
  [key: string]: {
    state: LabelValuePair;
    city: LabelValuePair;
  };
};
