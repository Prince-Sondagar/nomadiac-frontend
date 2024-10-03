import { FC, useContext, useEffect, useState } from "react";
import { CircularProgress, Button, Grid, Container, Box } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import Question from "../../components/SignUpFlow/Lucid/Question";
import { AuthContext } from "../../contexts/authContext";
import {
  RenderLucidQuestionsInitialValue,
  RenderQuestion,
  getSurveyPostCodeQueStep,
  getUSAZipCodeData,
  removeSurveyResponse,
  setPostCodeDependentQueLocalStorage,
  setSurveyResponseLocalStorage,
  setSurveyStep,
} from "../../utils";
import { CustomCreateBulkSignupSurveyResponseInput, IpostCodeDependentQue, LucidDetailsPropsType, LucidFormType } from "../../interfaceTypes";
import {
  UserGender,
  useCreateSignupSurveyResponsesMutation,
  useUpdatePanelistMutation,
} from "../../generated";
import { Alert } from "../../components/Common/Alert";
import { useNavigate } from "react-router-dom";
import { AUSTRALIA, INDIA, SURVEY_ROUTE, UNITED_KINGDOM, UNITED_STATES } from "../../constants";
import {
  FourPanel,
  PanelJoinWrap,
} from "../../components/SignUpFlow/OtherDetails/styled";

const LucidSurvey: FC<LucidDetailsPropsType> = ({
  setStep,
  setSurveyResponse,
  surveyResponse,
  step,
  // mobileNumberVerifyResponse,
}) => {
  const navigate = useNavigate();
  const { currentPanelist, setCurrentPanelist } = useContext(AuthContext);
  const { id, zipCode } = currentPanelist || {};
  const { country } = surveyResponse || {};
  const defaultValues =
    RenderLucidQuestionsInitialValue(country || "") || undefined;

  const methods = useForm<LucidFormType>({
    mode: "all",
    defaultValues,
  });

  const { handleSubmit, getValues, setValue } = methods;

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
      if (currentPanelist && surveyResponse) {
        const { address, city, country, gender, phone, state } = surveyResponse;
        const { value } = state;

        setCurrentPanelist({
          ...currentPanelist,
          lucidProfileCompleted: true,
          signupSurveyResponse: signupSurveyResponse || [],
          city,
          country,
          phone,
          gender: gender as UserGender,
          state: value,
          address,
        });
        removeSurveyResponse()
        Alert.success("Profile Updated Successfully.");
        navigate(SURVEY_ROUTE);
      }
    },
  });


  const onPreviousStep = () => {
    if (surveyResponse) {
      const data = getValues();
      const responses: CustomCreateBulkSignupSurveyResponseInput[] = Object.keys(data)?.map((question) => ({
        question,
        answer: data[question],
      }));

      setSurveyResponseLocalStorage(
        JSON.stringify({ ...(surveyResponse || {}), responses })
      );

      setPostCodeDependentQueLocalStorage(
        JSON.stringify(postCodeDependentQue)
      )

      setSurveyResponse({ ...surveyResponse, responses })
    }
    setStep((step: number) => {
      setSurveyStep(String(step - 1));
      return step - 1;
    });
  };

  useEffect(() => {
    const { responses } = surveyResponse || {}
    responses?.map(({ question, answer }) => {
      return setValue(question, answer)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setValue, step]);

  const isLoading = loading || createSurveyResponseLoading;
  const [currentPage, setCurrentPage] = useState(0);
  const [postCodeDependentQue, setPostCodeDependentQue] = useState<IpostCodeDependentQue[]>(getSurveyPostCodeQueStep())
  const questionsPerPage = 5;
  const totalQuestions = RenderQuestion(country || "").length;
  const questionsToRender = RenderQuestion(country || "").slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  );

  const onSubmit = async (data: LucidFormType) => {
    if (currentPage < Math.ceil(totalQuestions / questionsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
    else {
      try {
        if (surveyResponse) {
          const { address, city, country, gender, phone, state } = surveyResponse;
          const { value } = state;
          const surveyResponseData = { ...data };

          const surveyResArray = Object.keys(surveyResponseData)?.map(
            (question) => ({
              question,
              answer: surveyResponseData[question]?.toString() || "",
            })
          );

          if (country === UNITED_STATES) {
            const ZipCodeInput = zipCode?.split(' ')[0]
            const res = await getUSAZipCodeData(ZipCodeInput as string)
            const data = await res.json();
            const { response, validZipCodeData } = data;
            if (response.status === 200 && validZipCodeData) {
              const { state, region, division } = validZipCodeData;
              const dependentFields = [
                { question: "What is your state?", answer: state },
                { question: "What is your Division?", answer: division },
                { question: "What is your REGION?", answer: region },
              ];
              surveyResArray.push(...dependentFields);
            }
          }
          if (country === UNITED_KINGDOM) {
            const postcodeQueIndex = surveyResArray.findIndex((surveyQue) => surveyQue.question === "Please enter the first half of your postcode below");
            surveyResArray.splice(+postcodeQueIndex + 1, 0, ...postCodeDependentQue);
          }

          if (country === AUSTRALIA) {
            const postcodeQueIndex = surveyResArray.findIndex(surveyQue => surveyQue.question === 'What is your postal code?');
            surveyResArray.splice(+postcodeQueIndex + 1, 0, ...postCodeDependentQue);
          }

          if (country === INDIA) {
            const postcodeQueIndex = surveyResArray.findIndex(surveyQue => surveyQue.question === 'What is your PIN code?');
            surveyResArray.splice(+postcodeQueIndex + 1, 0, ...postCodeDependentQue);
          }

          await Promise.all([
            updatePanelist({
              variables: {
                updatePanelistInput: {
                  id: id || "",
                  lucidProfileCompleted: true,
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
                  responses: surveyResArray,
                },
              },
            }),
          ]);

        }
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
                    setPostCodeDependentQue={setPostCodeDependentQue}
                  />
                ))}

                <Grid display={"flex"} justifyContent="space-between" m={2} mb={6}>
                  <Button
                    onClick={currentPage === 0 ? onPreviousStep : handlePrevQuestion}
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
                      height: "fit-content"
                    }}
                  >
                    {currentPage === 0 ? 'Back' : 'Previous'}
                  </Button>

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
                    }}
                    className="btnNextStep"
                  >
                    {currentPage === Math.ceil(totalQuestions / questionsPerPage) - 1 ? 'submit' : 'Next'}
                    {isLoading && <CircularProgress size={20} color="inherit" />}
                  </Button>
                </Grid>
              </form>
            </FormProvider>
          </FourPanel >
        </Box>
      </Container>
    </PanelJoinWrap >
  );
};

export default LucidSurvey;
