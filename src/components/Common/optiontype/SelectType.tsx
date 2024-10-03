import { FC } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { CompleteProfile, QuestionAnswerResponseType, SelectPropsType } from "../../../interfaceTypes";

const SelectType: FC<SelectPropsType> = ({ options, questionCode, question, isMulti, surveyResponse, sortedQuestionList, setSurveyResponse }) => {
  const { responses } = surveyResponse || {}
  const resOption = responses?.find((qs) => qs?.code === questionCode)?.options

  const onChangeHandle = (value: string[] | string | null) => {
    const response = responses?.find((qs) => qs?.code === questionCode)
    let updatedResponse: QuestionAnswerResponseType[] = [];
    if (response) {
      updatedResponse = (responses?.map(item => item.code === questionCode ? ({ ...item, question, code: questionCode, options: value ? Array.isArray(value) ? value : [value] : [] }) : item)) || []
    } else
      updatedResponse = [...(responses || []), { code: questionCode, question, options: value ? Array.isArray(value) ? value : [value] : [] }];
    const isLinkedQuestion = sortedQuestionList.filter((q) => q?.linked ? q.linked.questionCode === questionCode : false);
    isLinkedQuestion.map((linkedQuestion) => {
      if (!linkedQuestion.linked?.options.find((op) => value?.includes(op)))
        updatedResponse = updatedResponse.filter((ur) => ur.code !== linkedQuestion.code);
      return linkedQuestion;
    });

    setSurveyResponse({ ...(surveyResponse || {}) as CompleteProfile, responses: updatedResponse });
  }

  return (
    <div>
      <Autocomplete
        multiple={isMulti}
        id="size-small-outlined-multi"
        size="small"
        value={resOption}
        options={options}
        freeSolo={!options.length}
        getOptionLabel={(option) => option}
        renderInput={(params) => (<TextField {...params} />)}
        onChange={(_, value) => onChangeHandle(value)}
      />
    </div>
  )
}

export default SelectType;