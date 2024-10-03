import { getSource, getTransactionId } from "."
import { CLICK_WORKS, PANTHERA } from "../constants"
import { FetchPanelistPointHistory, ForgotPasswordInput, LoginUserInput, PaginationInput, PanelistSignupSource, RegisterPanelistInput, ResetPasswordInput, SendOtpToPanelistCodeInput, UpdatePanelistInput, UserRole, VerifyOtpInput, VerifyUserAndUpdatePasswordInput } from "../generated"
import { QuestionAnswerResponseType } from "../interfaceTypes"

export const createPanelistHandler = (personalInfo: any, surveyResponses: QuestionAnswerResponseType[], fraudScore: number): { registerPanelistInput: RegisterPanelistInput } => {
  return {
    "registerPanelistInput": {
      "firstName": personalInfo?.firstName,
      "lastName": personalInfo?.lastName,
      "email": personalInfo?.email,
      "phone": `${personalInfo?.phone || ""}`,
      "address": personalInfo?.address,
      "city": personalInfo?.town,
      "state": personalInfo?.stateRegion,
      "country": personalInfo?.country,
      "zipCode": personalInfo?.zip,
      "gender": personalInfo?.gender,
      "dob": personalInfo?.dob,
      "fraudScore": fraudScore, //research defender API
      "signupSource": getSource() === PANTHERA ? PanelistSignupSource.Panthera : getSource() === CLICK_WORKS ? PanelistSignupSource.ClickWorks : getTransactionId() && !getSource() ? PanelistSignupSource.Cake : PanelistSignupSource.Manual,
      "roleType": UserRole.Panelist,
      "transactionId": getTransactionId(),
      "responses": surveyResponses.map((res) => {
        return { question: res.question, answer: `${res.options.join(',')}${res.text ? `~${res.text}` : ""}` }
      }),
    }
  }
}

export const generateOtpHandler = (countryCode: string, mobileNumber: string): { generateOtpInput: SendOtpToPanelistCodeInput } => {
  return {
    "generateOtpInput": {
      "phoneNumber": `${countryCode}${mobileNumber}`
    }
  }
}

export const verifyOtpHandler = (countryCode: string, mobileNumber: string, otp: string): { verifyOtpInput: VerifyOtpInput } => {
  return {
    "verifyOtpInput": {
      "otp": otp,
      "phoneNumber": `${countryCode}${mobileNumber}`
    }
  }
}

export const loginHandler = (data: FormData): { loginUser: LoginUserInput } => {
  return {
    "loginUser": {
      "email": data.get('email') as string,
      "password": data.get('password') as string
    }
  }
}

export const forgetPasswordHandler = (email: string): { forgotPassword: ForgotPasswordInput } => {
  return {
    'forgotPassword': {
      'email': email
    }
  }
}
export const resetPasswordHandler = (password: string, token: string): { resetPassword: ResetPasswordInput } => {
  return {
    'resetPassword': {
      "password": password,
      "token": token
    }
  }
}

export const setNewPasswordHandler = (password: string, token: string): { verifyEmailAndSetPassword: VerifyUserAndUpdatePasswordInput } => {
  return {
    "verifyEmailAndSetPassword": {
      "password": password,
      "token": token
    }
  }
}

export const updatePanelistHandler = (data: UpdatePanelistInput) => {
  return {
    "updatePanelistInput": {
      "id": data?.id,
      "gender": data?.gender,
      "dob": data?.dob,
      "phone": data?.phone,
      "address": data?.address,
      "city": data?.city,
      "state": data?.state,
      "zipCode": data?.zipCode,
      "timezone": data?.timezone
    }
  }
}

export const updatePasswordHandler = (id: string, password: "string"): { updatePasswordInput: any } => {
  return {
    "updatePasswordInput": {
      "id": id,
      "newPassword": password
    }
  }
}

export const withdrawPointsHandler = (id: string, point: string) => {
  return {
    "createPaymentWithdrawalRequest": {
      "panelistId": id,
      "points": `${parseInt(point)}`
    }
  }
}

export const fetchWithdrawalPaymentHandler = (id: string, paginationState: PaginationInput) => {
  return {
    "paymentWithdrawalsInput": {
      "panelistId": id,
      "paginationOptions": {
        "limit": paginationState?.limit,
        "page": paginationState?.page
      }
    }
  }
}
export const fetchPointHistoryHandler = (id: string, paginationState: PaginationInput): { fetchPanelistPointHistory: FetchPanelistPointHistory } => {
  return {
    "fetchPanelistPointHistory": {
      "panelistId": id,
      "paginationOptions": {
        "limit": paginationState?.limit,
        "page": paginationState?.page
      }
    }
  }
}