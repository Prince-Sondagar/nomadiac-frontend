import { FC, useContext, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
} from "@mui/material";
import { Radio, RadioGroup, Typography } from "@mui/material";
import { PanelJoinWrap, FaqWrap } from "./styled";
import { genderList } from "../../../utils/faqConstants";
import { createPanelistPersonalInfoSchema } from "../../../utils/schema";
import {
  BasicDetailsPropsType,
  BasicInformationType,
  RegisterPanelistWithLucidJoiner,
} from "../../../interfaceTypes";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CommonSelect from "../../Common/CommonSelect";
import { CountriesArray } from "../../../constants";
import CommonAutoComplete from "../../Common/CommonAutoComplete";
import {
  CountryToStates,
  getSurveyResponse,
  setSurveyResponseLocalStorage,
  setSurveyStep,
} from "../../../utils";
import PhoneTextField from "../../Common/PhoneInput";
import CommonController from "../../Common/CommonController";
import { AuthContext } from "../../../contexts/authContext";

const BasicDetails: FC<BasicDetailsPropsType> = ({
  surveyResponse,
  setSurveyResponse,
  setStep,
  step,
  setSurveyResponseFusion,
}) => {
  const { currentPanelist } = useContext(AuthContext);
  const { country: panelistCountry } = currentPanelist || {};
  const data = getSurveyResponse() as RegisterPanelistWithLucidJoiner;
  const { city, address, country, gender, phone, state, responses } = data || {};

  const methods = useForm<BasicInformationType>({
    mode: "all",
    resolver: yupResolver(createPanelistPersonalInfoSchema),
    defaultValues: {
      country: "",
      state: {
        value: "",
        state: "",
      },
      phone: "",
      city: "",
      address: "",
      gender: "",
    },
  });

  const { handleSubmit, watch, control, setValue } = methods;
  const countryValue = watch("country");

  useEffect(() => {
    if (countryValue !== country) {
      setValue("city", "");
      setValue("address", "");
      setValue("state", { state: "", value: "" });
      setValue("phone", "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryValue, setValue]);

  useEffect(() => {
    setValue("city", city || "");
    setValue("address", address || "");
    setValue("state", state || { state: "", value: "" });
    setValue("phone", phone || "");
    setValue("country", country || "");
    setValue("gender", gender || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setValue, step]);

  useEffect(() => {
    if (panelistCountry) {
      setValue("country", panelistCountry);
    }
  }, [panelistCountry, setValue]);

  // const [VerifyTwilioMobileNumber, { loading }] =
  //   useVerifyTwilioMobileNumberMutation({
  //     onError() {
  //       setError("phone", {
  //         type: "manual",
  //         message: "Invalid Mobile Number",
  //       });
  //     },

  //     onCompleted(data) {
  //       const {
  //         verifyTwilioMobileNumber: { response, verificationResponse },
  //       } = data;

  //       if (response?.status === 200 && verificationResponse) {
  //         setStep((step: number) => {
  //           setMobileNumberVerifyResponse(verificationResponse);
  //           setSurveyStep(String(step + 1));
  //           return step + 1;
  //         });
  //       } else {
  //         setError("phone", {
  //           type: "manual",
  //           message: "Invalid Mobile Number",
  //         });
  //       }
  //     },
  //   });

  const onSubmit = async (data: BasicInformationType) => {
    setSurveyResponse({ ...(surveyResponse || {}), ...data, responses });
    setSurveyResponseFusion((oldData) => ({ ...oldData, ...data }));
    // await VerifyTwilioMobileNumber({
    //   variables: {
    //     mobileNumber: {
    //       mobileNumber: `+${data.phone}`,
    //     },
    //   },
    // });
    setStep((step: number) => {
      setSurveyStep(String(step + 1));
      return step + 1;
    });
    setSurveyResponseLocalStorage(
      JSON.stringify({ ...(surveyResponse || {}), ...data })
    );
  };

  return (
    <PanelJoinWrap>
      <Container
        component="main"
        maxWidth="xs"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Box>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt="general-logo"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <FaqWrap>
            <Box className="formWrap">
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} className="profile-txtField">
                      <CommonSelect
                        controllerName="country"
                        controllerLabel="Country"
                        optionsArray={CountriesArray}
                        isDisabled
                      />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <Box sx={{ paddingBottom: { xs: '6px', sm: '0' }, paddingTop: { xs: '0', sm: '16px' } }} className="profile-txtField">
                        <CommonAutoComplete
                          controllerName="state"
                          optionsArray={CountryToStates(countryValue || "")}
                          controllerLabel="State"
                          isDisabled={!countryValue}
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <Box sx={{ paddingTop: { xs: '0', sm: '8px' } }} className="profile-txtField">
                        <CommonController
                          controllerLabel="Town/City"
                          controllerName="city"
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12} sx={{ paddingTop: { sm: '10px !important' } }} className="profile-txtField">
                      <CommonController controllerLabel="Address" controllerName="address" />
                    </Grid>
                  </Grid>

                  <Box className="faqBox" mt={2} px={{ xs: 1.5, sm: 3 }} py={3}>
                    <Typography>What is your mobile phone number?</Typography>
                    <PhoneTextField />
                  </Box>

                  <Box className="faqBox" mt={3} p={3}>
                    <FormControl component="fieldset" fullWidth>
                      <FormLabel component="legend">
                        What is your gender?
                      </FormLabel>
                      <Controller
                        rules={{ required: true }}
                        control={control}
                        name="gender"
                        render={({
                          field,
                          fieldState: { error: { message } = {} } = {},
                        }) => (
                          <Box className="profile-radioInput">
                            <RadioGroup {...field} row>
                              {genderList.map((genderItem, index) => {
                                const { value, label } = genderItem;
                                return (
                                  <FormControlLabel
                                    key={index}
                                    value={value}
                                    control={<Radio />}
                                    label={label}
                                  />
                                );
                              })}
                            </RadioGroup>

                            <FormHelperText error={!!message}>
                              {message && message}
                            </FormHelperText>
                          </Box>
                        )}
                      />
                    </FormControl>
                  </Box>

                  <Box display="flex" justifyContent="flex-end" mb={6}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      color="primary"
                      sx={{
                        background: "#edbb5f",
                        color: " #fff",
                        ":hover": { background: "#edbb5f" },
                        width: "15%",
                        fontWeight: 'bold',
                      }}
                      className="btnNextStep"
                    >
                      Next
                    </Button>
                  </Box>
                </form>
              </FormProvider>
            </Box>
          </FaqWrap>
        </Box>
      </Container>
    </PanelJoinWrap>
  );
};

export default BasicDetails;
