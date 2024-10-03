import { FC, useState, Fragment, useContext } from "react";
import { Button, CircularProgress, Container, Grid, Box } from "@mui/material";
import { PanelJoinWrap, FourPanel } from "./styled";
import QuestionComponent from "../../Common/QuestionComponents";
import { QuestionData } from "../../../utils/questionData";
import { OtherDetailsPropsType } from "../../../interfaceTypes";
import {
  UserGender,
  useCreateSignupSurveyResponsesMutation,
  useUpdatePanelistMutation,
} from "../../../generated";
import { Alert } from "../../Common/Alert";
import { AuthContext } from "../../../contexts/authContext";
import { useNavigate } from "react-router-dom";
import { SURVEY_ROUTE } from "../../../constants";
import { removeSurveyResponse, setSurveyResponseLocalStorage, getSurveyResponse } from "../../../utils";

const OtherDetails: FC<OtherDetailsPropsType> = ({
  surveyResponse,
  setStep,
  setSurveyResponse,
  // mobileNumberVerifyResponse,
}) => {
  const navigate = useNavigate();
  const [formCheck, setFormCheck] = useState<string[]>([]);
  const { currentPanelist, setCurrentPanelist } = useContext(AuthContext);
  const { responses } = surveyResponse || {};
  const { id } = currentPanelist || {};

  const onPreviousStep = () => {
    setStep((step) => step - 1);
  };

  const [updatePanelist, { loading }] = useUpdatePanelistMutation({
    onError({ message }) {
      Alert.error(message || "");
    },

    onCompleted() { },
  });

  const [createSignupSurveyResponse, { loading: createSurveyResponseLoading }] = useCreateSignupSurveyResponsesMutation({
    onError({ message }) {
      Alert.error(message || "");
    },

    onCompleted(data) {
      const {
        createSignupSurveyResponses: { panelist },
      } = data;
      const { signupSurveyResponse } = panelist || {};
      const { city, country, phone, gender, state, address } = getSurveyResponse()
      const { value } = state;
      if (currentPanelist) {
        setCurrentPanelist({
          ...currentPanelist,
          signupSurveyResponse: signupSurveyResponse || [],
          city,
          country,
          phone,
          gender: gender as UserGender,
          state: value,
          address,
        });
      }

      removeSurveyResponse()
      Alert.success("Profile Updated Successfully.");
      navigate(SURVEY_ROUTE);
    },
  });

  const handleProfileUpdate = async () => {
    if (surveyResponse && id) {
      const { city, country, phone, gender, state, address, responses } = surveyResponse;
      const { value } = state;
      setSurveyResponseLocalStorage(JSON.stringify(surveyResponse));
      await Promise.all([
        updatePanelist({
          variables: {
            updatePanelistInput: {
              id,
              city,
              country,
              phone,
              gender: gender as UserGender,
              state: value,
              address,
              // mobileCountryCode: mobileNumberVerifyResponse?.mobileCountryCode,
              // carrierName: mobileNumberVerifyResponse?.carrierName,
              // phoneNumberType: mobileNumberVerifyResponse?.phoneNumberType,
              // mobileNetworkCode: mobileNumberVerifyResponse?.mobileNetworkCode,
            },
          },
        }),

        createSignupSurveyResponse({
          variables: {
            createSignupSurveyResponses: {
              panelistId: id || "",
              responses: (responses || [])?.map(
                ({ question, options, text }) => ({
                  question,
                  answer: [...options, ...(text ? [text] : [])].toString(),
                })
              ),
            },
          },
        }),
      ]);
    }
  };

  const isLoading = loading || createSurveyResponseLoading;

  return (
    <PanelJoinWrap>
      <Container
        component="main"
        maxWidth="xs"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Box sx={{ maxWidth: "1000px" }}>
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
          <FourPanel>
            {QuestionData?.map((question, index) => (
              <Fragment key={index}>
                <QuestionComponent
                  question={question}
                  surveyResponse={surveyResponse}
                  setSurveyResponse={setSurveyResponse}
                  formCheck={formCheck}
                  setFormCheck={setFormCheck}
                  sortedQuestionList={QuestionData}
                />
              </Fragment>
            ))}
            <Grid display={"flex"} justifyContent="space-between" m={2} mb={6}>
              <Button
                className="btnNextStep"
                onClick={onPreviousStep}
                disabled={isLoading}
              >
                Previous
              </Button>
              <Button
                className="btnNextStep"
                disabled={
                  !!(formCheck.length || !responses?.length || isLoading)
                }
                endIcon={
                  isLoading && <CircularProgress size={20} color="inherit" />
                }
                onClick={handleProfileUpdate}
              >
                Submit
              </Button>
            </Grid>
          </FourPanel>
        </Box>
      </Container>
    </PanelJoinWrap>
  );
};

export default OtherDetails;
