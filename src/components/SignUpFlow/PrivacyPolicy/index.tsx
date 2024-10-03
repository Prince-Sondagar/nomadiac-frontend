import { Dispatch, FC, SetStateAction, useContext, useEffect, useState } from "react";
import { Box, Button, Container, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material";
import { PanelJoinWrap, FaqWrap } from "./styled";
import { SignUpContext, SignUpContextTypes } from "../../../contexts/SignUpContext";
import { QuestionAnswerResponseType } from "../../../interfaceTypes";
import { BorderLinearProgress } from "../../../theme/styledComponents";

const faqData = [
  {
    questionText: "Thank you for being so interested in joining Nomadic Insights. To review our privacy policy click here(https://nomadicinsights.com/privacy-policy/). Do you accept our privacy policy?",
    questionJsx: (
      <Typography>
        Thank you for being so interested in joining Nomadic Insights. To review
        our privacy policy click here.(
        <a href="https://nomadicinsights.com/privacy-policy/">
          https://nomadicinsights.com/privacy-policy/
        </a>
        ).Do you accept our privacy policy?
      </Typography>
    ),
    type: "Privacy Policy"
  },
  {
    questionText: "Take a moment to review our terms and conditions by click here(https://nomadicinsights.com/terms-of-service/). Do you accept our membership terms and conditions?",
    questionJsx: (
      <Typography>
        Take a moment to review our terms and conditions by clicking here.(
        <a href="https://nomadicinsights.com/terms-of-service/">
          https://nomadicinsights.com/terms-of-service/
        </a>
        ).Do you accept our membership terms and conditions?
      </Typography>
    ),
    type: "Terms and Conditions"
  },
];

type Props = {
  surveyResponse: QuestionAnswerResponseType[];
  setSurveyResponse: Dispatch<SetStateAction<QuestionAnswerResponseType[]>>;
}

const PrivacyPolicy: FC<Props> = ({ surveyResponse, setSurveyResponse }) => {
  const { step, setStep } = useContext<SignUpContextTypes>(SignUpContext);
  const [nextStepValid, setNextStepValid] = useState<boolean>(false);

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    const selectedQuestion = surveyResponse?.find(({ question }) => name === question);
    if (selectedQuestion)
      setSurveyResponse([...surveyResponse?.map((sq) => name === sq?.question ? ({ ...sq, options: [value] }) : sq)]);
    else
      setSurveyResponse([...surveyResponse, { code: "", question: name, options: [value] }]);
  };

  useEffect(() => {
    if (!!surveyResponse?.length && surveyResponse?.length === 2) {
      const checkfalse = (surveyResponse?.map((response) => response?.options?.includes('no') ? false : true))?.includes(false);
      if (!checkfalse) setNextStepValid(true);
      else setNextStepValid(false);
    }
    else setNextStepValid(false);
  }, [surveyResponse]);

  return (
    <PanelJoinWrap>
      <Container>
        <Box className="progressBar" mt={3}>
          <BorderLinearProgress variant="determinate" value={25} />
          <Typography width={"25%"}>25%</Typography>
        </Box>
        <FaqWrap>
          {faqData.map((faq, key) => (
            <Box key={key} className="faqBox" mt={3} p={3}>
              {faq.questionJsx}
              <FormControl>
                <RadioGroup name={faq.questionText} value={surveyResponse?.find((sq) => faq?.questionText === sq.question)?.options[0]} onChange={handleChange}>
                  <FormControlLabel value={"yes"} control={<Radio sx={{ color: "#EDBB5F", "&.Mui-checked": { color: "#EDBB5F" } }} />} label="Yes" />
                  <FormControlLabel value={"no"} control={<Radio sx={{ color: "#EDBB5F", "&.Mui-checked": { color: "#EDBB5F" } }} />} label="No" />
                </RadioGroup>
              </FormControl>
              {(surveyResponse?.find((qs) => qs?.question === faq?.questionText)?.options?.includes('no')) ?
                <Box color={"#cb0909"} fontSize={14} mt={0.5}>
                  Please accept the {faq?.type} to continue ahead
                </Box> : ""}
            </Box>
          ))}
          <Grid display={"flex"} justifyContent="space-between" m={2}>
            <Button className="btnNextStep" onClick={() => setStep(step - 1)}>Previous</Button>
            <Button sx={{ zIndex: 9999999999999 }} className="btnNextStep" disabled={!nextStepValid ? true : false} onClick={() => setStep(step + 1)}>
              Next
            </Button>
          </Grid>
        </FaqWrap>
      </Container>
    </PanelJoinWrap>
  );
}

export default PrivacyPolicy;
