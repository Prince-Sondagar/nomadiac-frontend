import { FC, Fragment, useEffect } from 'react';
import { Checkbox, FormControl, FormControlLabel, FormGroup, Grid } from '@mui/material';
import { CompleteProfile, QuestionAnswerResponseType, RadioPropsType } from '../../../interfaceTypes';

const CheckBoxType: FC<RadioPropsType> = ({ options, questionCode, question, surveyResponse, setSurveyResponse }) => {
  const { responses } = surveyResponse || {}
  const resOption = responses?.find((qs) => qs?.code === questionCode)?.options

  const optionExistence = (response: QuestionAnswerResponseType, value: string) => {
    const existOption = response?.options?.includes(value);
    const updatedResponse = responses?.map(item => item?.code === questionCode ?
      { ...item, options: existOption ? item?.options?.filter(qs => qs !== value) : [...item?.options, value], text: undefined } : item
    );

    setSurveyResponse({ ...(surveyResponse || {}) as CompleteProfile, responses: updatedResponse });
  };

  useEffect(() => {
    const ansObj = responses?.find((ed) => ed?.code === questionCode)
    if (!!ansObj && !ansObj.options.length) {
      const newResponse = responses?.filter((sd) => !(sd?.code === ansObj?.code))
      setSurveyResponse({ ...(surveyResponse || {}) as CompleteProfile, responses: newResponse });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionExistence])


  const checkedHandle = (value: string) => {
    const response = responses?.length && responses?.find((qs) => qs?.question === question)
    if (response) {
      optionExistence(response, value)
    }
    else setSurveyResponse({
      ...(surveyResponse || {}) as CompleteProfile,
      responses: [...(responses || []), {
        options: [value],
        code: questionCode,
        question: question,
        text: undefined
      }]
    });
  }

  return (
    <Fragment>
      {options?.map((option, index) => (<Grid container key={index}>
        <FormControl fullWidth>
          <FormGroup>
            <FormControlLabel control={
              <Checkbox
                checked={resOption?.includes(option) ? true : false}
                value={option}
                onChange={({ target: { value } }: { target: { value: string } }) => checkedHandle(value)}
                sx={{ color: "#EDBB5F", "&.Mui-checked": { color: "#EDBB5F" } }}
              />
            } label={option} />
          </FormGroup>
        </FormControl>
      </Grid>))}
    </Fragment>
  )
}

export default CheckBoxType