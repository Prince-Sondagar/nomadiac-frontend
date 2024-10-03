import { Box, Typography } from "@mui/material";
import { FC, useCallback } from "react";
import RadioType from "./optiontype/RadioType";
import CheckBoxType from "./optiontype/CheckBoxType";
import TextType from "./optiontype/TextType";
import SelectType from "./optiontype/SelectType";
import {
  QuestionComponentPropsType,
  QuestionDataType,
} from "../../interfaceTypes";

const QuestionComponent: FC<QuestionComponentPropsType> = ({
  question,
  surveyResponse,
  setSurveyResponse,
  setFormCheck,
  formCheck,
  sortedQuestionList,
}) => {
  const {
    type,
    options: QuestionOption,
    text,
    code,
    textLinkedWithOther,
  } = question;
  const optiontype = type?.find((ts) => ts === "TEXT");
  const othertype = type?.find((ts) => !(ts === "TEXT"));

  const isShowLinkedQuestion = useCallback(
    (question: QuestionDataType) => {
      if (!question.linked) return false;
      const { responses } = surveyResponse || {};
      const linkedQuestion = responses?.find(
        (qs) => qs?.code === question?.linked?.questionCode
      );
      const linkedOption = linkedQuestion?.options?.find((qs) =>
        question.linked?.options.includes(qs)
      );
      return question.linked ? !linkedOption : true;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [surveyResponse]
  );

  if (isShowLinkedQuestion(question)) return <div />;

  return (
    <Box className="faqBox" mt={3} p={3}>
      <Typography>{text}</Typography>
      {othertype === "RADIO" && (
        <RadioType
          questionCode={code}
          question={text}
          options={QuestionOption}
          surveyResponse={surveyResponse}
          setSurveyResponse={setSurveyResponse}
          sortedQuestionList={sortedQuestionList}
        />
      )}

      {othertype === "CHECKBOX" && (
        <CheckBoxType
          questionCode={code}
          question={text}
          options={QuestionOption}
          surveyResponse={surveyResponse}
          setSurveyResponse={setSurveyResponse}
          sortedQuestionList={sortedQuestionList}
        />
      )}

      {["SELECT", "MULTISELECT"].includes(othertype ?? "") && (
        <SelectType
          options={QuestionOption}
          questionCode={code}
          question={text}
          isMulti={othertype === "MULTISELECT"}
          surveyResponse={surveyResponse}
          setSurveyResponse={setSurveyResponse}
          sortedQuestionList={sortedQuestionList}
        />
      )}

      {!!optiontype && (
        <TextType
          options={QuestionOption}
          textLinkedWithOther={textLinkedWithOther}
          question={text}
          questionCode={code}
          surveyResponse={surveyResponse}
          formCheck={formCheck}
          setFormCheck={setFormCheck}
          setSurveyResponse={setSurveyResponse}
          sortedQuestionList={sortedQuestionList}
        />
      )}
    </Box>
  );
};

export default QuestionComponent;
