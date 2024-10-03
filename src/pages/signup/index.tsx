import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import TabPanel from "../../components/SignUpFlow/SignTablePanel";
import BasicDetails from "../../components/SignUpFlow/BasicDetails";
import ThanksDetail from "../../components/SignUpFlow/ThankDetails";
import { CompleteProfile, RegisterPanelistWithLucidJoiner } from "../../interfaceTypes";
import { AllowedLucidCountries, SURVEY_RESPONSE, } from "../../constants";
import LucidSurvey from "./LucidSurvey";
import OtherDetails from "../../components/SignUpFlow/OtherDetails";

const SignUp = () => {
  const [step, setStep] = useState<number>(1);
  const [surveyResponse, setSurveyResponse] =
    useState<RegisterPanelistWithLucidJoiner | null>(null);
  const [surveyResponseFusion, setSurveyResponseFusion] =
    useState<CompleteProfile | null>(null);
  // const [mobileNumberVerifyResponse, setNobileNumberVerifyResponse] =
  //   useState<VerifyResponsePayload | null>(null);
  const { country } = surveyResponse || {};

  useEffect(() => {
    const response = JSON.parse(localStorage.getItem(SURVEY_RESPONSE) ?? "[]")
    setSurveyResponse(response || [])
  }, [])

  return (
    <Box>
      <TabPanel value={step} index={1}>
        <BasicDetails
          surveyResponse={surveyResponse}
          setSurveyResponse={setSurveyResponse}
          setStep={setStep}
          step={step}
          setSurveyResponseFusion={setSurveyResponseFusion}
        // setMobileNumberVerifyResponse={setNobileNumberVerifyResponse}
        />
      </TabPanel>

      <TabPanel value={step} index={2}>
        {AllowedLucidCountries.includes(country as string) ? (
          <LucidSurvey
            surveyResponse={surveyResponse}
            setStep={setStep}
            setSurveyResponse={setSurveyResponse}
            step={step}
          // mobileNumberVerifyResponse={mobileNumberVerifyResponse}
          />
        ) : (
          <OtherDetails
            surveyResponse={surveyResponseFusion}
            setSurveyResponse={setSurveyResponseFusion}
            setStep={setStep}
          // mobileNumberVerifyResponse={mobileNumberVerifyResponse}
          />
        )}
      </TabPanel>

      <TabPanel value={step} index={3}>
        <ThanksDetail />
      </TabPanel>
    </Box>
  );
};

export default SignUp;