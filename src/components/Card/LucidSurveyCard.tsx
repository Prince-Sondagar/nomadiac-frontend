import { FC, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CardHeader, Grid, Typography, Card, Button, CardContent, CardActions, CircularProgress } from "@mui/material";
import { AccessAlarm } from "@mui/icons-material";
//components block
import { AuthContext } from "../../contexts/authContext";
import { Alert } from "../Common/Alert";
//other block
import { LucidSurveyCardPropType } from "../../interfaceTypes"
import { CPIRounding } from "../../utils";
import { useValidateLucidSurveyAvailabilityLazyQuery, useValidateLucidSurveyMutation } from "../../generated";
import { ADDITIONAL_INFORMATION_ROUTE, GRAPHQL_QUERY_POLICY, NOT_FOUND, NOT_FOUND_EXCEPTION, SURVEY_NOT_AVAILABLE } from "../../constants";

const LucidSurveyCard: FC<LucidSurveyCardPropType> = ({ survey, lucidSurveys, setLucidSurveys, selectedSurveyId, setSelectedSurveyId, refetch, refreshCache, setRefreshCache, unAvailableSurveyIdsRef }): JSX.Element => {
  const navigate = useNavigate();
  const { currentPanelist } = useContext(AuthContext);
  const { surveyId, interviewLength, cpi, surveyScore } = survey || {}
  const { id, lucidProfileCompleted, user } = currentPanelist || {};
  const { email } = user || {};

  const [validateLucidSurvey, { loading }] = useValidateLucidSurveyMutation({
    onError({ message }) {
      if (
        message === NOT_FOUND ||
        message === NOT_FOUND_EXCEPTION ||
        message === SURVEY_NOT_AVAILABLE
      ) {
        const updatedSurvey = lucidSurveys.filter((surveyItem) => {
          const { surveyId } = surveyItem || {};
          return surveyId !== selectedSurveyId;
        });

        setLucidSurveys(updatedSurvey);
      }
    },

    onCompleted(data) {
      const {
        validateLucidSurvey: { local, url },
      } = data;

      if (local) {
        return navigate(url);
      }

      window.location.href = url;
    },
  });

  const handleValidateSurvey = (surveyId: string) => {
    if (!lucidProfileCompleted) {
      return navigate(ADDITIONAL_INFORMATION_ROUTE);
    }

    if (unAvailableSurveyIdsRef.current.includes(surveyId || "")) {
      const updatedSurvey = lucidSurveys.filter((surveyItem) => {
        const { surveyId } = surveyItem || {};
        return surveyId !== selectedSurveyId;
      });

      setLucidSurveys(updatedSurvey);

      return Alert.info(SURVEY_NOT_AVAILABLE)
    }

    setSelectedSurveyId(surveyId);

    validateLucidSurvey({
      variables: {
        validateLucidSurveyInput: {
          panelistId: id || "",
          surveyId,
        },
      },
    });
  };

  const [validateSurveyAvailability, { loading: validateSurveyLoading }] = useValidateLucidSurveyAvailabilityLazyQuery({
    ...(GRAPHQL_QUERY_POLICY as any),
    onError() { },
    onCompleted(data) {
      const { validateLucidSurveyAvailability: { surveyAvailable } } = data
      if (!surveyAvailable) {
        unAvailableSurveyIdsRef.current.push(surveyId || "")
        const updatedSurvey = lucidSurveys.filter((surveyItem) => {
          const { surveyId: stateSurveyId } = surveyItem || {};
          return surveyId !== stateSurveyId;
        });

        if (updatedSurvey.length < 5 && !refreshCache) {
          setRefreshCache(true)
        };

        setLucidSurveys(updatedSurvey);
        if (lucidSurveys.length < 8) {
          refetch()
        }
      }
    }
  });

  useEffect(() => {
    if (id && surveyId) {
      validateSurveyAvailability({
        variables: {
          validateSurveyAvailabilityInput: {
            panelistId: id,
            surveyId
          }
        }
      })
    }
    // eslint-disable-next-line
  }, [id, surveyId]);

  const disableTakeSurvey = (surveyId === selectedSurveyId && loading) || validateSurveyLoading;

  return (
    <Grid item xs={12} md={6} lg={6}>
      <Card sx={{ textAlign: "center", borderRadius: "0px" }}>
        <CardHeader
          avatar={
            <>
              <Typography variant="body1">Survey ID: </Typography>
              <Typography variant="body1"> {surveyId}</Typography>
            </>
          }
          action={
            <Button variant="text" startIcon={<AccessAlarm />}>
              {interviewLength || 1} min
            </Button>
          }
        />
        <CardContent>
          <Typography variant="h4">
            {CPIRounding(cpi || 0, true)} pts
          </Typography>
          <Typography>
            {Math.ceil(CPIRounding(cpi || 0, true) / (interviewLength || 1))} pts/min{" "}
          </Typography>

          {((email === "andreasharp93@gmail.com") || (!!email?.includes("mkmcguig"))) &&
            (<Typography variant="caption">
              Survey Score  {surveyScore || 0}
            </Typography>
            )}

        </CardContent>
        <CardActions>
          <Button
            size="large"
            sx={{
              width: "100%",
              borderRadius: "25px",
              color: "white",
              backgroundColor: "#edbb5f",
              "&:hover": {
                backgroundColor: "#edbb5f",
              },
            }}
            variant="contained"
            onClick={() => handleValidateSurvey(surveyId || "")}
            disabled={disableTakeSurvey}
          >
            {disableTakeSurvey ? (
              <CircularProgress size={15} />
            ) : (
              "Take Survey"
            )}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default LucidSurveyCard