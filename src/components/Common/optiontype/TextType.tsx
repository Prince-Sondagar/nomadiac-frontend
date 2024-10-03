import { FC, useEffect } from 'react'
import { Grid, TextField } from '@mui/material'
import { CompleteProfile, TextPropType } from '../../../interfaceTypes';

const TextType: FC<TextPropType> = ({ options, questionCode, textLinkedWithOther, question, surveyResponse, setSurveyResponse, setFormCheck, formCheck }) => {
  const { responses } = surveyResponse || {}
  const response = responses?.find((qs) => qs?.code === questionCode);
  const checkOption = response?.options?.includes(textLinkedWithOther ?? "");

  useEffect(() => {
    if (checkOption && !response?.text) {
      setFormCheck([...formCheck, questionCode])
    }
    else setFormCheck((prevState) => prevState?.filter((qs: string) => qs !== questionCode));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response])

  const handleChange = (value: string) => {
    const updatedResponse = responses?.map(item => item?.code === questionCode ? { ...item, text: value } : item)
    const exist = responses?.find((qs) => qs?.code === questionCode)
    const res = exist ? updatedResponse : [...(responses || []), { code: questionCode, question, options: [], text: value }]
    setSurveyResponse({ ...(surveyResponse || {}) as CompleteProfile, responses: res });
  }

  return (
    <Grid>
      {checkOption && <TextField
        fullWidth
        variant="outlined"
        className="textfieldControl"
        value={response?.text || ""}
        onChange={({ target: { value } }) => handleChange(value)}
        error={(checkOption && !response?.text)}
        helperText={checkOption && !response?.text && "Please specify the other option."}
        required={checkOption}
      />}
    </Grid>
  )
}

export default TextType