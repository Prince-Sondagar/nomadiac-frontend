// package import
import { FC } from "react";
import { Link } from "react-router-dom";
// other imports
import { Box, Container, Typography, Button } from "@mui/material";
import { FOUR_O_FOUR, PAGE_NOT_FOUND, LOOKS_LIKE_AN_EMPTY_SPACE, SURVEY_ROUTE } from "../../constants";
import { ErrorBox, ErrorText } from "../../theme/styledComponents";

const PageNotFound: FC = (): JSX.Element => {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="100vh"
      >
        <ErrorText color=" #edbb5f" align="center" sx={{
              "@media (min-width: 768px)": {
                fontSize: "30rem !important",
              },
              "@media (max-width: 768px)": {
                fontSize: "22rem !important",
              },
              "@media (max-width: 600px)": {
                fontSize: "185px !important",
              }
            }}>
          {FOUR_O_FOUR}
        </ErrorText>

        <ErrorBox>
          <Typography
            color="#edbb5f"
            component="h1"
            variant="h1"
            align="center"
            sx={{
              "@media (min-width: 600px)": {
                fontSize: "68px !important",
              },
              "@media (max-width: 600px)": {
                fontSize: "36px !important",
              }
            }}
          >
            {PAGE_NOT_FOUND}
          </Typography>

          <Box maxWidth={500} pt={1} px="20px" sx={{
              "@media (min-width: 600px)": {
                paddingBottom: "32px",
              },
              "@media (max-width: 600px)": {
                paddingBottom: "16px",
              }
            }}>
            <Typography variant="body2" align="center">
              {LOOKS_LIKE_AN_EMPTY_SPACE}
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{ background: "#edbb5f", ":hover": { background: "#edbb5f" } }}
            component={Link}
            to={SURVEY_ROUTE}
          >
            BACK
          </Button>
        </ErrorBox>
      </Box>
    </Container>
  );
};
export default PageNotFound;