import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography, CircularProgress, Container } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import {
  PanelistSignupSource,
  UserRole,
  useCreateMobilePanelistMutation,
} from "../../generated";
import {
  CLICK_WORKS,
  FORBIDDEN_EXCEPTION,
  LOGIN_ROUTE,
  PANTHERA,
  SIGNUP_MESSAGE
} from "../../constants";
import { Alert } from "../../components/Common/Alert";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpValidationSchema } from "../../utils/schema";
import CommonController from "../../components/Common/CommonController";
import {
  CountrySpellAdjustment,
  defenderAPISearch,
  getAffiliateId,
  getSource,
  getTransactionId,
  zipCode,
} from "../../utils";
import FullPageLoader from "../../components/Common/FullPageLoader";
import NotEligibleRespondent from "../../components/Common/NotEligibleRespondant";
import { CustomButton, CustomLink } from "../auth/login";
import { RegisterPanelistMobileInput } from "../../interfaceTypes";
import { ThanksPage } from "../auth/thanks-page";

const SignUp = () => {
  const [access, setAccess] = useState<boolean>();
  const [successMessage, setSuccessMessage] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [country, setCountry] = useState<string>("");
  const [captchaVerifySuccess, setCaptchaVerifySuccess] = useState<
    boolean | null
  >(null);

  const methods = useForm({
    mode: "all",
    resolver: yupResolver(signUpValidationSchema(country)),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      dob: undefined,
      zipCode: "",
      signupSource:
        getSource() === PANTHERA
          ? PanelistSignupSource.Panthera
          : getSource() === CLICK_WORKS
            ? PanelistSignupSource.ClickWorks
            : getTransactionId() && !getSource()
              ? PanelistSignupSource.Cake
              : PanelistSignupSource.Manual,
      privacyPolicy: true,
      termsAndConditions: true,
      fraudScore: 0,
    },
  });

  const { handleSubmit } = methods;

  const [register, { loading: registerLoading }] =
    useCreateMobilePanelistMutation({
      onError({ message }) {
        if (message?.toLowerCase() === FORBIDDEN_EXCEPTION) {
          return setAccess(false);
        }
      },

      onCompleted(data) {
        const { createMobilePanelist: { response } = {} } = data;
        const { message } = response || {};
        if (message) {
          Alert.success(SIGNUP_MESSAGE);
        }
        setSuccessMessage(true);
      },
    });
  /**
   * Registers panelist input
   * @param registerPanelistInput
   */
  const onSubmit = async (
    registerPanelistInput: RegisterPanelistMobileInput
  ) => {
    const {
      dob,
      email,
      firstName,
      lastName,
      zipCode,
      privacyPolicy,
      signupSource,
      termsAndConditions,
    } = registerPanelistInput;
    const date = new Date(dob || "");
    const today = new Date();
    const yearDiff = today.getUTCFullYear() - date.getUTCFullYear();
    if (yearDiff >= 18) {
      const fraudScore = await defenderAPISearch();

      register({
        variables: {
          registerPanelistInput: {
            firstName,
            lastName,
            email,
            zipCode,
            roleType: UserRole.Panelist,
            fraudScore,
            dob: date.toISOString(),
            signupSource: signupSource as PanelistSignupSource,
            privacyPolicy,
            termsAndConditions,
            country,
            transactionId: getTransactionId() || "",
            newPanel: true,
            affiliateId: getAffiliateId() || ""
          },
        },
      });
    } else {
      setAccess(false);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_DEV_API_URL}/survey/verifyCountry`
        );
        const data = await response.json();
        const { country, message } = data;
        if (message === "Not Allowed") {
          setAccess(false);
          setLoading(false);
          return;
        }

        setCountry(CountrySpellAdjustment(String(country).toLowerCase()));
        setAccess(true);
        setLoading(false);
      } catch (error) {
        setAccess(false);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Box>
      {!successMessage && (
        <>
          <FullPageLoader loading={loading} />;
          {access != null && access ? (
            <Container component="main" maxWidth="xs">
              <CssBaseline />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/logo.png"}
                  alt="general-logo"
                  width="200px"
                  className="logo"
                />

                <Box sx={{ width: "100%" }}>
                  <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                      <CommonController
                        controllerName="firstName"
                        controllerLabel="First Name"
                        fieldType="text"
                      />

                      <CommonController
                        controllerName="lastName"
                        controllerLabel="Last Name"
                        fieldType="text"
                      />

                      <CommonController
                        controllerName="email"
                        controllerLabel="Email"
                        fieldType="email"
                      />

                      <CommonController
                        controllerName="dob"
                        controllerLabel="Date of Birth"
                        fieldType="Date"
                      />

                      <CommonController
                        controllerName={
                          zipCode[
                            CountrySpellAdjustment(
                              String(country).toLowerCase()
                            )
                          ]?.zipCodeName
                        }
                        controllerLabel={
                          zipCode[
                            CountrySpellAdjustment(
                              String(country).toLowerCase()
                            )
                          ]?.zipCodeLabel
                        }
                        fieldType="text"
                      />
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                      >
                        <ReCAPTCHA
                          sitekey={
                            process.env.REACT_APP_RECAPTCHA_SITE_KEY as string
                          }
                          onChange={(token) =>
                            setCaptchaVerifySuccess(token ? true : false)
                          }
                        />
                      </Box>

                      <CustomButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={registerLoading || !captchaVerifySuccess}
                        endIcon={
                          registerLoading && (
                            <CircularProgress size={20} color="inherit" />
                          )
                        }
                      >
                        Signup
                      </CustomButton>
                    </form>
                  </FormProvider>

                  <Box display="flex" justifyContent="flex-end">
                    <CustomLink to={LOGIN_ROUTE}>
                      Already have an account? Login
                    </CustomLink>
                  </Box>

                  <Box display="flex" justifyContent="center" py={3}>
                    <Typography variant="body2" align="center">
                      <b>
                        By creating an account you agree to our{" "}
                        <a href="https://nomadicinsights.com/privacy-policy/">
                          privacy policy
                        </a>{" "}
                        and have read and acknowledge our membership{" "}
                        <a href="https://nomadicinsights.com/terms-of-service/">
                          terms and conditions.
                        </a>
                      </b>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Container>
          ) : access != null && !access ? (
            <NotEligibleRespondent />
          ) : (
            ""
          )}
        </>
      )}
      {successMessage && <ThanksPage />}
    </Box>
  );
};

export default SignUp;
