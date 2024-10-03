import { FC } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { CompleteProfile, QuestionAnswerResponseType, RadioPropsType } from '../../../interfaceTypes';

const RadioType: FC<RadioPropsType> = ({ options, question, questionCode, surveyResponse, sortedQuestionList, setSurveyResponse }) => {
  const { responses = [] } = surveyResponse || {}
  const value = responses?.find((qs) => qs?.code === questionCode)?.options?.find((ws) => ws)

  const checkedHandle = (value: string) => {
    const response = responses?.find((qs) => qs?.code === questionCode);
    let updatedResponse: QuestionAnswerResponseType[] = [];
    if (response) {
      updatedResponse = responses.map(item => item.code === questionCode ? ({ code: questionCode, question: response?.question || "", options: [value] }) : item);
    } else {
      updatedResponse = [...(responses || []), { code: questionCode, question: question, options: [value] }];
    }
    const isLinkedQuestion = sortedQuestionList.filter((q) => q?.linked ? q.linked.questionCode === questionCode : false);
    isLinkedQuestion.map((linkedQuestion) => {
      if (!linkedQuestion.linked?.options.includes(value))
        updatedResponse = updatedResponse.filter((ur) => ur.code !== linkedQuestion.code);
      return linkedQuestion;
    });

    setSurveyResponse({ ...(surveyResponse || {}) as CompleteProfile, responses: updatedResponse });
  }

  return (
    <FormControl>
      <RadioGroup sx={{ width: "100%", flexDirection: "row" }} onChange={({ target: { value } }) => checkedHandle(value)}>
        {options?.map((option, i) =>
          <FormControlLabel
            checked={option === value ? true : false}
            key={i}
            value={option}
            control={<Radio sx={{ color: "#EDBB5F", "&.Mui-checked": { color: "#EDBB5F" } }} />}
            label={option}
          />
        )}
      </RadioGroup>
    </FormControl>
  )
}

export default RadioType;