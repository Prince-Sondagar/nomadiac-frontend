import { FC, useContext } from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
  Checkbox,
  Box,
  Typography,
  Autocomplete,
  TextField,
} from "@mui/material";
import { LucidQuestionPropsType, QuestionType } from "../../../interfaceTypes";
import CommonController from "../../Common/CommonController";
import { AuthContext } from "../../../contexts/authContext";
import { AUSTRALIA, INDIA, UNITED_KINGDOM } from "../../../constants";
import { getCountriesToPostalCodeData } from "../../../utils";

const Question: FC<LucidQuestionPropsType> = ({
  questionItem,
  questionIndex,
  setPostCodeDependentQue
}): JSX.Element => {
  const { control, setValue, setError } = useFormContext();
  const { options, question, type, questionId } = questionItem;
  const { currentPanelist } = useContext(AuthContext);

  const handleSearchPostCode = (value: string) => {
    const postCodeValue = value.split(' ')[0];
    let dependentFields;
    try {
      const response: any = getCountriesToPostalCodeData(postCodeValue, currentPanelist?.country as string);
      if (response) {
        switch (currentPanelist?.country) {
          case UNITED_KINGDOM:
            const { areaType, country, region } = response;
            dependentFields = [
              {
                question: 'What part of the United Kingdom do you live in?',
                answer: areaType.label,
              },
              { question: 'What county do you live in?', answer: country.label },
              { question: 'What region do you live in?', answer: region.label },
            ];
            break;

          case AUSTRALIA:
            const { area, state } = response;
            dependentFields = [
              {
                question: "What area or city do you live in?",
                answer: area.label,
              },
              { question: "What state do you live in?", answer: state.label },
            ];
            break;

          case INDIA:
            const { city, state: indiaState } = response
            dependentFields = [
              {
                question: "What city do you live in?",
                answer: city.label,
              },
              { question: "What state or union territory do you live in?", answer: indiaState.label },
            ];
            break;

          default:
            break;
        }
        setPostCodeDependentQue(dependentFields);
        return true;
      } else {
        throw new Error('Invalid ZipCode');
      }
    }
    catch (error) {
      setError(question.trim(), { type: 'manual', message: (error as any).message }, { shouldFocus: true });
      return false;
    }
  };

  switch (type) {
    case QuestionType.TEXTFIELD:
      return (
        <Box className="faqBox text-field" mt={3} p={3}>
          <Typography>
            {`${questionIndex}.`}
            {question}
          </Typography>
          <CommonController
            key={`${question}-${questionId}`}
            controllerLabel={""}
            controllerName={question.trim()}
            error={'This Field is required'}
          />
        </Box>
      );

    case QuestionType.NUMERICFIELD:
      return (
        <Box className="faqBox text-field" mt={3} p={3}>
          <Typography>
            {`${questionIndex}.`}
            {question}
          </Typography>
          <Controller
            rules={{
              required: {
                value: true,
                message: 'This Field is required'
              },
              pattern: {
                value: /^[+]?\d+(\.\d+)?$/, // Regex pattern for positive numbers
                message: "Please enter a positive number.",
              },
            }}
            control={control}
            name={question.trim() as never}
            render={({ field, fieldState: { error: { message } = {} } = {} }) => {
              return (
                <TextField
                  sx={{ m: "8px 0" }}
                  error={!!message}
                  fullWidth
                  {...field}
                  helperText={message && message}
                />
              )
            }}
          />
        </Box>
      );

    case QuestionType.SEARCHINPUT:
      return (
        <Box className="faqBox text-field" mt={3} p={3}>
          <Typography>
            {`${questionIndex}.`}
            {question}
          </Typography>
          <FormControl component="fieldset" fullWidth sx={{ mb: '5px' }} >
            <Controller
              rules={{
                required: {
                  value: true,
                  message: 'This Field is required'
                },
                validate: {
                  validateZipCode: (fieldValue) => {
                    return handleSearchPostCode(fieldValue) || "Invalid ZipCode"
                  }
                }
              }}
              control={control}
              name={question.trim() as never}
              render={({ field, fieldState: { error: { message } = {} } = {} }) => {
                return (
                  <TextField
                    sx={{ m: "8px 0" }}
                    error={!!message}
                    fullWidth
                    {...field}
                    helperText={message && message}
                    onChange={(event) => {
                      const value = event.target.value;
                      field.onChange(value);
                    }}
                  />
                )
              }}
            />
          </FormControl>
        </Box>
      );

    case QuestionType.RADIO:
      return (
        <>
          <Box mt={3} p={3} className="faqBox">
            <FormControl
              component="fieldset"
              fullWidth
              sx={{ marginBottom: "5px", }}
            >
              <Typography>
                {`${questionIndex}.`}
                {question}
              </Typography>
              <Controller
                control={control}
                name={question.trim() as never}
                rules={{ required: 'This Field is required' }}
                render={({
                  field,
                  fieldState: { error: { message } = {} } = {},
                }) => (
                  <>
                    <RadioGroup {...field} row>
                      <Box className="grid-container">
                        {options.map((optionItem) => {
                          const { label } = optionItem;
                          return (
                            <FormControlLabel
                              key={label}
                              value={label}
                              control={
                                <Radio
                                  sx={{
                                    color: "#EDBB5F",
                                    "&.Mui-checked": { color: "#EDBB5F" },
                                  }}
                                />
                              }
                              label={label}
                            />
                          );
                        })}
                      </Box>
                    </RadioGroup>
                    <FormHelperText error={!!message}>
                      {!field.value && message}
                    </FormHelperText>
                  </>
                )}
              />
            </FormControl>
          </Box>
        </>
      );

    case QuestionType.CHECKBOX:
      return (
        <Box mt={3} p={3} className="faqBox">
          <FormControl
            component="fieldset"
            fullWidth
            sx={{ marginBottom: "5px", }}
          >
            <Typography>
              {`${questionIndex}.`} {question}
            </Typography>
            <Controller
              control={control}
              name={question.trim() as never}
              rules={{ required: 'This Field is required' }}
              render={({
                field,
                fieldState: { error: { message } = {} } = {},
              }) => (
                <>
                  <Box className="grid-container">
                    {options.map((optionItem) => {
                      const { label } = optionItem;
                      const values: string[] = Array.isArray(field?.value) ? field.value : [];
                      const checked = values.includes(label);

                      return (
                        <FormControlLabel
                          key={label}
                          control={
                            <Checkbox
                              checked={!!checked}
                              value={label}
                              onChange={() => {
                                if (checked) {
                                  const updatedValue = values.filter(
                                    (item) => item !== label
                                  );
                                  setValue(
                                    question as never,
                                    updatedValue as never,
                                    {
                                      shouldDirty: true,
                                      shouldValidate: true,
                                      shouldTouch: true,
                                    }
                                  );
                                } else {
                                  setValue(
                                    question as never,
                                    [...values, label] as never,
                                    {
                                      shouldDirty: true,
                                      shouldValidate: true,
                                      shouldTouch: true,
                                    }
                                  );
                                }
                              }}
                              sx={{
                                color: "#EDBB5F",
                                "&.Mui-checked": { color: "#EDBB5F" },
                              }}
                            />
                          }
                          label={label}
                        />
                      );
                    })}
                  </Box>
                  <FormHelperText error={!!message} >
                    {message && message}
                  </FormHelperText>
                </>
              )}
            />
          </FormControl>
        </Box>
      );

    case QuestionType.SELECT:
      return (
        <Box className="faqBox" mt={3} p={3}>
          <FormControl component="fieldset" fullWidth sx={{ mb: '5px' }} >
            <Typography>
              {`${questionIndex}.`} {question}
            </Typography >
            <Controller
              rules={{ required: 'This Field is required' }}
              control={control}
              name={question.trim() as never}
              render={({ field, fieldState: { error: { message } = {} } = {} }) => (
                <Autocomplete
                  options={options.map((option) => option.label)}
                  id={`autocomplete-${questionId}`}
                  getOptionLabel={(prop) => {
                    return Array.isArray(prop) ? prop.join("") : prop;
                  }}
                  value={field.value || ""}
                  onChange={(_, selectedOptions) => {
                    field.onChange(selectedOptions);
                  }}
                  isOptionEqualToValue={(option, value) => option === value}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      error={!!message}
                      helperText={message || ""}
                    />
                  )}
                />
              )}
            />
          </FormControl >
        </Box>
      );

    case QuestionType.MULTISELECT:
      return (
        <Box className="faqBox" mt={3} p={3}>
          <FormControl component="fieldset" fullWidth sx={{ marginBottom: "5px" }}>
            <Typography>
              {`${questionIndex}.`} {question}
            </Typography>
            <Controller
              rules={{ required: 'This Field is required' }}
              control={control}
              name={question}
              render={({ field, fieldState: { error: { message } = {} } = {} }) => {
                return (
                  <>
                    <Autocomplete
                      multiple
                      options={options.map((option) => option.label)}
                      getOptionLabel={(prop) => {
                        return Array.isArray(prop) ? prop.join("") : prop;
                      }}
                      id={`autocomplete-${questionId}`}
                      value={field.value || []}
                      onChange={(_, selectedOptions) => {
                        field.onChange(selectedOptions);
                      }}
                      renderInput={(params) => (
                        <TextField
                          error={!!message}
                          {...params}
                          variant="outlined"
                        />
                      )}
                    />
                    <FormHelperText error={!!message}>{message && message}</FormHelperText>
                  </>
                );
              }}
            />
          </FormControl >
        </Box>
      );
    default:
      return <></>;
  }
};

export default Question;
