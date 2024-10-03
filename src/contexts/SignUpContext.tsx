import { ReactElement, createContext, useState } from "react";

export type IFormValues = {
  country?: string;
  countryCode?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  isValidEmail?: boolean;
  mno?: string;
  address?: string;
  town?: string;
  stateRegion?: string;
  zip?: string;
  employerName?: string;
  profileLink?: string;
};

const InitFormValues = {
  country: " ",
  countryCode: 0,
  firstName: "",
  lastName: "",
  email: "",
  isValidEmail: false,
  mobileNumber: "",
  address: "",
  town: "",
  stateRegion: "",
  zip: "",
  employerName: "",
  profileLink: "",
};

export type SignUpContextTypes = {
  formValues: IFormValues;
  step: number;
  setFormValues: Function;
  setStep: Function;
};

export const SignUpContext = createContext<SignUpContextTypes>({
  formValues: InitFormValues,
  step: +(localStorage.getItem("signup-step") ?? "1"),
  setFormValues: () => { },
  setStep: () => { },
});

type ISignUpContextProvider = {
  children: ReactElement | ReactElement[];
};

function SignUpContextProvider({ children }: ISignUpContextProvider) {
  const [formValues, setFormValues] = useState(InitFormValues);
  const [step, setStep] = useState(
    +(localStorage.getItem("signup-step") ?? "1")
  );

  return (
    <SignUpContext.Provider
      value={{ formValues, step, setFormValues, setStep }}
    >
      {children}
    </SignUpContext.Provider>
  );
}

export default SignUpContextProvider;
