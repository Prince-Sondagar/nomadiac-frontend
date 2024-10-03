import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Grid, Typography, Button, CircularProgress } from "@mui/material";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LoginUserInput, useLoginMutation, UserRole } from "../../generated";
import {
  AUTH_TOKEN,
  SURVEY_ROUTE,
  FORGET_PASSWORD_ROUTE,
  GRAPHQL_QUERY_POLICY,
  WRONG_EMAIL_OR_PASSWORD,
  EMAIL_CHANGED_OR_NOT_VERIFIED_MESSAGE,
  FORBIDDEN_EXCEPTION,
  SIGNUP_ROUTE,
} from "../../constants";
import { Alert } from "../../components/Common/Alert";
import { setToken } from "../../utils";
import { AuthContext } from "../../contexts/authContext";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from "../../utils/schema";
import CommonController from "../../components/Common/CommonController";

export const Footer = styled(Box)(({ theme }) => ({
  position: "fixed",
  left: "0",
  bottom: "0",
  textAlign: "center",
  width: "100%",
  height: "36px",
  [theme.breakpoints.down("md")]: {
    height: "150px",
  },
  background: "rgba(35, 19, 0, 0.65)",
  "& nav": {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 100px",
    [theme.breakpoints.down("lg")]: {
      display: "block",
    },
    [theme.breakpoints.down("md")]: {
      padding: "10px 20px",
    },
    "& a": {
      textDecoration: "none",
      fontFamily: "Petrona",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "14px",
      lineHeight: "16px",
      color: "#FFF7D4",
      [theme.breakpoints.down("md")]: {
        display: "block",
      },
    },
  },
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#edbb5f",
  fontSize: "18px",
  fontFamily: "'Poppins', sans-serif",
  background:
    "linear-gradient(179.49deg, #FFD95A -33.28%, rgba(255, 217, 90, 0.714707) -7.22%, rgba(255, 217, 90, 0.637378) 57.01%, rgba(255, 217, 90, 0) 128.92%)",
  borderRadius: "15px",
  "&:hover": {
    backgroundColor: "#edbb5f",
  },
}));

export const CustomLink = styled(Link)(({ theme }) => ({
  color: "#4C3D3D",
  textDecoration: "none",
}));

const theme = createTheme();

export const Login = () => {
  const { setIsLoggedIn } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const methods = useForm<LoginUserInput>({
    mode: "all",
    resolver: yupResolver(loginValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit } = methods;

  const [login, { loading: loginLoading }] = useLoginMutation({
    ...(GRAPHQL_QUERY_POLICY as any),
    onError({ message }) {
      if (message.toLowerCase() === FORBIDDEN_EXCEPTION)
        return Alert.error(EMAIL_CHANGED_OR_NOT_VERIFIED_MESSAGE);
    },

    onCompleted(data) {
      if (data) {
        const {
          login: { response, access_token, roles },
        } = data;

        const checkPanelist = roles?.find(
          (qs) => qs?.role === UserRole?.Panelist
        );

        if (response) {
          const { status } = response;
          setIsLoggedIn(true);

          if (status === 404) {
            setIsLoggedIn(false);
            return Alert.error(WRONG_EMAIL_OR_PASSWORD);
          }

          if (status === 200 && access_token) {
            if (!checkPanelist) {
              setIsLoggedIn(false);
              return Alert.toast("Only Panelist Can Access this Portal.");
            }
            setToken(access_token);
            setIsLoggedIn(true);
            navigate(SURVEY_ROUTE);
            localStorage.setItem(AUTH_TOKEN, access_token);
          }
        }
      }
    },
  });

  const onSubmit = async (data: LoginUserInput) => {
    await login({
      variables: {
        loginUser: data,
      },
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ paddingBottom: "175px" }} component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: { sm: "80vh", xs: "100vh" },
            justifyContent: "center",
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="general-logo"
            className="logo"
          />
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box sx={{ mt: 1, width: "100%" }}>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <CommonController
                  controllerName="email"
                  controllerLabel="Email"
                  fieldType="email"
                />

                <CommonController
                  controllerName="password"
                  controllerLabel="Password"
                  fieldType="password"
                  isPassword
                />

                <CustomButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={loginLoading}
                  endIcon={
                    loginLoading && (
                      <CircularProgress size={20} color="inherit" />
                    )
                  }
                >
                  Login
                </CustomButton>
              </form>
            </FormProvider>
            <Grid className="login-footer">
              <CustomLink to={FORGET_PASSWORD_ROUTE}>
                Forgot password?
              </CustomLink>
              <CustomLink to={SIGNUP_ROUTE}>
                Don't have an account? Sign Up
              </CustomLink>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
