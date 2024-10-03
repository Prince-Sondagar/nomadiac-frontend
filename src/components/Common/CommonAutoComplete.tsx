// packages block
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Autocomplete, TextField } from '@mui/material';
import { AutoCompletePropsType } from '../../interfaceTypes';
import { sortStates } from '../../utils';

const CommonAutoComplete: FC<AutoCompletePropsType> = ({ isDisabled, controllerName, controllerLabel, optionsArray }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={controllerName}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const { value: { message = "" } = {} } = error || {} as any

        return (
          <Autocomplete
            fullWidth
            getOptionLabel={(option) => option.state}
            options={sortStates(optionsArray)}
            disabled={isDisabled}
            {...field}
            onChange={(e, state) => {
              field.onChange(state);
            }}
            isOptionEqualToValue={(option, value) => option.value === value.value}
            renderInput={(params) => (
              <TextField
                {...params}
                error={!!message}
                label={controllerLabel}
                helperText={message || ""}
                placeholder={controllerLabel}
                disabled={isDisabled}
              />
            )}
          />
        )
      }}
    />
  )
}

export default CommonAutoComplete;
