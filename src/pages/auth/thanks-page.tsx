import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography, Button } from "@mui/material";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { LOGIN_ROUTE } from "../../constants";

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

export const ThanksPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ paddingBottom: "175px" }} component="main">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="general-logo"
            className="logo"
          />
          <Typography component="h1" variant="h4">
            Thank You!
          </Typography>
          <Typography component="h1" variant="h5" textAlign="center">
            An email with the verification link has been sent to your registered
            email address. To complete the sign-up process, please check your
            email and click on the verification link. In case you don't see the
            email in your inbox, please don't forget to check your spam and junk
            folders as well.
          </Typography>
          <CustomButton type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            <CustomLink to={LOGIN_ROUTE}>Go back to Login</CustomLink>
          </CustomButton>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
