import { useContext } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

// Messages & Routes from constants
import {
  EMAIL_CHANGED_OR_NOT_VERIFIED_MESSAGE,
  FORBIDDEN_EXCEPTION,
  GRAPHQL_QUERY_POLICY,
  WRONG_EMAIL_OR_PASSWORD,
  SURVEY_ROUTE,
  FORGET_PASSWORD_EMAIL_SENT,
} from "../../constants";
import { Alert } from "../../components/Common/Alert";
import { AuthContext } from "../../contexts/authContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForgotPasswordMutation } from "../../generated";
import { forgetPasswordHandler } from "../../utils/surveyHandler";
import ResetPassword from "./Reset-Password";

// Custom Button
const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#edbb5f",
  fontSize: "18px",
  fontFamily: "'Poppins', sans-serif",
  background:
    "linear-gradient(179.49deg, #FFD95A -33.28%, rgba(255, 217, 90, 0.714707) -7.22%, rgba(255, 217, 90, 0.637378) 57.01%, rgba(255, 217, 90, 0) 128.92%)",
  "&:hover": {
    backgroundColor: "#edbb5f",
  },
}));

const theme = createTheme();
const ForgetPassword = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Forget Password Mutation
  const [forgetPassword, { loading: forgetPasswordLoading }] =
    useForgotPasswordMutation({
      ...(GRAPHQL_QUERY_POLICY as any),
      onError({ message }) {
        if (message.toLowerCase() === FORBIDDEN_EXCEPTION)
          return Alert.error(EMAIL_CHANGED_OR_NOT_VERIFIED_MESSAGE);
      },

      onCompleted(data) {
        if (data) {
          const {
            forgotPassword: { response },
          } = data;

          if (response) {
            const { status } = response;
            setIsLoggedIn(false);

            if (status === 404) {
              return Alert.error(WRONG_EMAIL_OR_PASSWORD);
            }

            if (status === 200) {
              Alert.success(FORGET_PASSWORD_EMAIL_SENT);
              navigate(SURVEY_ROUTE);
            }
          }
        }
      },
    });

  // Handle Reset Password Submit
  const handleForgotPassowrdSubmit = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event?.currentTarget);
    const email = data.get("email");
    await forgetPassword({ variables: forgetPasswordHandler(email as string) });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="general-logo" className="logo" />
          {searchParams.get("token") ? (
            <ResetPassword mode={"Reset Password"} />
          ) : (
            <>
              <Typography component="h1" variant="h5">
                Forget Password
              </Typography>
              <Box
                component="form"
                onSubmit={handleForgotPassowrdSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <CustomButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={forgetPasswordLoading}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Send Email
                </CustomButton>
              </Box>
            </>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ForgetPassword;
