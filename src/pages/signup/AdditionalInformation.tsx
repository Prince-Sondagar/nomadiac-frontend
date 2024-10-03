import { Grid, Button, CircularProgress } from "@mui/material";
import { Container, Box } from "@mui/system";
import { FC, useContext, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PanelJoinWrap } from "../../components/SignUpFlow/BasicDetails/styled";
import Question from "../../components/SignUpFlow/Lucid/Question";
import { FourPanel } from "../../components/SignUpFlow/OtherDetails/styled";
import { SURVEY_ROUTE, UNITED_KINGDOM, UNITED_STATES } from "../../constants";
import { AuthContext } from "../../contexts/authContext";
import {
  useCreateSignupSurveyResponsesMutation,
  useUpdatePanelistMutation,
} from "../../generated";
import { IpostCodeDependentQue, LucidFormType } from "../../interfaceTypes";
import {
  RenderLucidQuestionsInitialValue,
  removeSurveyResponse,
  RenderQuestion,
  StateToDivision,
  StateToRegion,
} from "../../utils";
import { Alert } from "../../components/Common/Alert";
import { USState } from "../../utils/faqConstants";

const AdditionalInformation: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const {
    currentPanelist,
    setCurrentPanelist,
  } = useContext(AuthContext);
  const { id, country, state: currentPanelistState } = currentPanelist || {};
  const { state: stateValueToCompare } =
    USState.find(
      ({ value, state }) =>
        value.toLowerCase() === currentPanelistState?.toLowerCase() ||
        state.toLowerCase() === currentPanelistState?.toLowerCase()
    ) || {};
  const defaultValues =
    RenderLucidQuestionsInitialValue(country || "", true) || undefined;
  const [postCodeDependentQue] = useState<
    IpostCodeDependentQue[]
  >([]);

  const methods = useForm<LucidFormType>({
    mode: "all",
    defaultValues,
  });

  const { handleSubmit } = methods;

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
      const { createSignupSurveyResponses: { panelist } } = data
      const { signupSurveyResponse } = panelist || {};
      if (currentPanelist) {
        setCurrentPanelist({
          ...currentPanelist, lucidProfileCompleted: true,
          signupSurveyResponse: signupSurveyResponse || [],
        });
        removeSurveyResponse()
        Alert.success("Profile Updated Successfully.");
        navigate(SURVEY_ROUTE);
      }
    },
  });

  const isLoading = createSurveyResponseLoading || loading;
  const [currentPage, setCurrentPage] = useState(0);
  const questionsPerPage = 5;
  const totalQuestions = RenderQuestion(country || "", true).length;
  const questionsToRender = RenderQuestion(country || "", true).slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  );

  const onSubmit = async (data: LucidFormType) => {
    if (currentPage < Math.ceil(totalQuestions / questionsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      try {
        if (country === UNITED_STATES) {
          data["What is your Division?"] = StateToDivision(
            stateValueToCompare || ""
          );
          data["What is your REGION?"] = StateToRegion(
            stateValueToCompare || ""
          );
        }

        const surveyResArray = Object.keys(data)?.map((question) => ({
          question,
          answer: data[question]?.toString() || "",
        }));

        if (country === UNITED_KINGDOM) {
          const postcodeQueIndex = surveyResArray.findIndex(
            (surveyQue) =>
              surveyQue.question ===
              "Please enter the first half of your postcode below"
          );
          surveyResArray.splice(
            +postcodeQueIndex + 1,
            0,
            ...postCodeDependentQue
          );
        }

        await Promise.all([
          updatePanelist({
            variables: {
              updatePanelistInput: {
                id: id || "",
                lucidProfileCompleted: true
              },
            },
          }),

          createSignupSurveyResponse({
            variables: {
              createSignupSurveyResponses: {
                panelistId: id || "",
                responses: surveyResArray,
              },
            },
          }),
        ]);
      } catch (error) {
        console.log("error", error);
      }
    }
  };


  const handlePrevQuestion = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <PanelJoinWrap>
      <Container
        component="main"
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Box sx={{ maxWidth: "1000px", width: '100%' }}>
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
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                {questionsToRender.map((item, index) => (
                  <Question
                    questionItem={item}
                    key={item.questionId}
                    questionIndex={index + 1 + currentPage * questionsPerPage}
                  />
                ))}

                <Grid display={"flex"} justifyContent="space-between" m={2}>
                  {currentPage > 0 && (
                    <Button
                      onClick={handlePrevQuestion}
                      disabled={isLoading}
                      variant="outlined"
                      size="large"
                      color="primary"
                      sx={{
                        borderColor: "#edbb5f",
                        color: "#edbb5f",
                        zIndex: 1,
                        width: "15%",
                        margin: "32px 0",
                        height: "fit-content",
                        minWidth: '100px'
                      }}
                    >
                      Previous
                    </Button>)}

                  <Box justifyContent="flex-end" display="flex" width="100%">
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={!!isLoading}
                      color="primary"
                      sx={{
                        background: "#edbb5f",
                        ":hover": { background: "#edbb5f" },
                        width: "15%",
                        marginTop: "5px",
                        zIndex: 1,
                        height: '44px',
                        maxWidth: '125px'
                      }}
                      className="btnNextStep"
                    >
                      {currentPage === Math.ceil(totalQuestions / questionsPerPage) - 1 ? 'submit' : 'Next'}
                      {isLoading && <CircularProgress size={20} color="inherit" />}
                    </Button>
                  </Box>
                </Grid>
              </form>
            </FormProvider>
          </FourPanel >
        </Box>
      </Container>
    </PanelJoinWrap >
  );
};
export default AdditionalInformation