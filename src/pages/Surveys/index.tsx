import { useContext, useState } from "react";
import { Box } from "@mui/material";
import { AuthContext } from "../../contexts/authContext";
import { FusionSurveys } from "./FusionSurveys";
import { LucidSurveys } from "./LucidSurveys";
import { AllowedLucidCountries } from "../../constants";

const SurveysPage = () => {

  const { currentPanelist } = useContext(AuthContext);
  const [isLucidSurveyAvailable, setIsLucidSurveyAvailable] = useState(true);
  const { country } = currentPanelist || {};

  return (
    <Box sx={{ paddingBottom: "50px", paddingTop: "50px" }}>
      {AllowedLucidCountries.includes(country as string) && isLucidSurveyAvailable ? (
        <LucidSurveys setIsLucidSurveyAvailable={setIsLucidSurveyAvailable} />
      ) : (
        <FusionSurveys />
      )}
    </Box>
  );
};

export default SurveysPage;
