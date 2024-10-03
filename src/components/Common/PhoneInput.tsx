import { Controller, useFormContext } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { CountryToIso } from "../../constants";
import { Box, FormHelperText } from "@mui/material";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/authContext";

const PhoneTextField = () => {

  const { control, setValue } = useFormContext();
  const { currentPanelist } = useContext(AuthContext);
  const { country } = currentPanelist || {}


  useEffect(() => {
    if (!country)
      setValue("phone", "")

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country, setValue]);

  return (
    <Controller
      name="phone"
      control={control}
      render={({ field, fieldState: { error: { message } = {} } }) => {
        return (
          <Box
            sx={{
              "& .react-tel-input .flag-dropdown": {
                backgroundColor: "#FFFFFF !important",
                borderRight: 0,
                borderColor: message && "red",
              },
            }}
            className='phoneInput'
          >
            <PhoneInput
              {...field}
              country={CountryToIso[country || ""] || "us"}
              value={field.value}
              inputProps={{
                style: {
                  width: "100%",
                  borderColor: message && "red",
                },
              }}
              placeholder=""
              disabled={!country}
              disableDropdown
              onChange={(phone) => field.onChange(phone)}
              onlyCountries={["ca", "au", "gb", "us", "nz","in"]}
              defaultErrorMessage={message || ""}
              key={`${country}-KEY`}
            />

            <FormHelperText error={!!message}>
              {message && message}
            </FormHelperText>
          </Box>
        );
      }}
    />
  );
};

export default PhoneTextField;
