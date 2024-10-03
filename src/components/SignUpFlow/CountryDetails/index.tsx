import { Dispatch, FC, useContext, useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { Step1Wrapper, Step1Panel } from "./styled";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  SignUpContext,
  SignUpContextTypes,
} from "../../../contexts/SignUpContext";
import ReCAPTCHA from "react-google-recaptcha";

const chooseMess = [
  "Please choose your country to continue",
  "Bitte wählen Sie Ihr Land, um fortzufahren",
  "S'il vous plaît choisissez votre pays pour continuer",
  "Scegli il tuo paese per continuare",
  "Por favor, elija su país para continuar",
  "Kies alstublieft uw land om verder te gaan",
];

const selectCountry = [
  { value: " ", countryCode: 0, country: "Select country" },
  { value: "United States", countryCode: "+1", country: "United States" },
  { value: "Australia", countryCode: "+61", country: "Australia" },
  { value: "Canada", countryCode: "+1", country: "Canada" },
  { value: "United Kingdom", countryCode: "+44", country: "United Kingdom" },
  { value: "New Zealand", countryCode: "+64", country: "New Zealand" },
];

type Props = {
  setPersonalInfo: Dispatch<any>;
};

const CountryDetails: FC<Props> = ({ setPersonalInfo }) => {
  const { step, setStep, formValues, setFormValues } =
    useContext<SignUpContextTypes>(SignUpContext);
  const [captchaVerifySuccess, setCaptchaVerifySuccess] = useState<
    boolean | null
  >(null);

  const onNextStep = () => {
    setStep(step + 1);
  };

  const handleChange = ({ target: { name, value } }: SelectChangeEvent) => {
    const selectedCounty = selectCountry?.find((cn) => cn?.value === value);

    setFormValues({
      ...formValues,
      [name]: value,
      countryCode: selectedCounty?.countryCode,
    });
    setPersonalInfo((pi: any) => ({
      ...pi,
      country: value,
      countryCode: selectedCounty?.countryCode,
    }));
  };

  return (
    <Step1Wrapper>
      <Box height={"100%"}>
        <Container>
          <Step1Panel>
            <img
              src={"/assets/images/logo.png"}
              alt="logo"
              className="logoImg"
            />
            <Box px={2} pt={{ sm: 4 }} pb={{ xs: 2, sm: 4 }}>
              <Box className="selectMess" my={5}>
                <Grid container>
                  {chooseMess.map((mess, key) => (
                    <Grid item xs={12} sm={6} key={key} py={1} px={2}>
                      <Typography>{mess}</Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Box>
                <Box
                  mb={2}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <ReCAPTCHA
                    sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY as string}
                    onChange={(token) =>
                      setCaptchaVerifySuccess(token ? true : false)
                    }
                  />
                </Box>
                <Box
                  display={{ sm: "flex" }}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <FormControl
                    sx={{ minWidth: 120, width: { xs: "100%", md: "50%" } }}
                  >
                    <Select
                      name="country"
                      value={formValues.country}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      {selectCountry.map(({ country, value }, key) => (
                        <MenuItem value={value} key={key}>
                          {country}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <Button
                    className="btnNext"
                    disabled={
                      !formValues.country?.length ||
                      formValues.country === " " ||
                      !captchaVerifySuccess
                    }
                    onClick={onNextStep}
                  >
                    <PlayArrowIcon />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Step1Panel>
        </Container>
      </Box>
    </Step1Wrapper>
  );
};

export default CountryDetails;
