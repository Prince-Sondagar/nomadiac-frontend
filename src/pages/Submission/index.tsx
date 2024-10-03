import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Box, Button, Card, CircularProgress, Container, Grid, Typography } from "@mui/material";
import { LOGIN_ROUTE, NOT_FOUND, NOT_FOUND_EXCEPTION, SURVEY_NOT_AVAILABLE, SURVEY_ROUTE } from "../../constants";
import { useContinueTakingLucidSurveyMutation } from "../../generated";
const SubmissionPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const fromLucid = searchParams.get('fromLucid');
  const panelistId = searchParams.get('panelistId');
  useEffect(() => {
    if (!searchParams.get("status")) {
      navigate(LOGIN_ROUTE)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const checkWebViewResponse = (navigationUrl: string) => {
    if ((window as any)?.ReactNativeWebView !== undefined) {
      return (window as any).ReactNativeWebView.postMessage("WebButtonClick");
    } else {
      navigate(navigationUrl);
    }
  };
  const [continueSurvey, { loading }] = useContinueTakingLucidSurveyMutation({
    onError({ message }) {
      if (message === NOT_FOUND || message === NOT_FOUND_EXCEPTION || message === SURVEY_NOT_AVAILABLE) {
        checkWebViewResponse(SURVEY_ROUTE)
      }
    },
    onCompleted(data) {
      const { continueTakingLucidSurvey: { local, url } } = data
      if (local) {
        return checkWebViewResponse(url);
      }
      window.location.href = url;
    }
  });
  const handleProceed = () => {
    if (panelistId && fromLucid) {
      continueSurvey({
        variables: {
          continueTakingLucidSurvey: {
            panelistId
          }
        }
      })
    } else {
      checkWebViewResponse(SURVEY_ROUTE)
    }
  };
  return (
    <Container>
      {searchParams.get("status") === "completed" ?
        <Box>
          <Typography variant='h2' my={4}>Thank you very much! You have successfully completed the survey!</Typography>
          <Grid container mb={4}>
            <Grid item xs={12} mt={4}>
              <Card sx={{ boxShadow: '0px 1px 10px #ddd', p: 3 }}>
                <Box textAlign={"right"}>
                  <Button variant='contained' sx={{ fontSize: "14px" }} onClick={handleProceed} endIcon={loading && <CircularProgress size={18} />} disabled={loading}>
                    Click Here To Proceed
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box> : ""}
      {searchParams.get("status") === "quota" ?
        <Box>
          <Typography variant='h2' my={4}>We are sorry</Typography>
          <Grid container mb={4}>
            <Grid item xs={12}>
              <Card sx={{ boxShadow: '0px 1px 10px #ddd', p: 3 }}>
                <Typography>Thank you for participating in our latest survey, but unfortunately we have sufficient responses in your category. To ensure we only invite you to take part in relevant studies please ensure your panel information is up to date by logging into your panel dashboard and checking your information.</Typography>
              </Card>
            </Grid>
            <Grid item xs={12} mt={4}>
              <Card sx={{ boxShadow: '0px 1px 10px #ddd', p: 3 }}>
                <Box textAlign={"right"}>
                  <Button variant='contained' sx={{ fontSize: "14px" }} onClick={handleProceed} endIcon={loading && <CircularProgress size={18} />} disabled={loading}>
                    Click Here To Proceed
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box> : ""}
      {searchParams.get("status") === "security-terminate" ?
        <Box>
          <Typography variant='h2' my={4}>We are sorry</Typography>
          <Grid container mb={4}>
            <Grid item xs={12}>
              <Card sx={{ boxShadow: '0px 1px 10px #ddd', p: 3 }}>
                <Typography>Thank you for your interest in taking this survey. Unfortunately we can't accept any more responses.</Typography>
              </Card>
            </Grid>
            <Grid item xs={12} mt={4}>
              <Card sx={{ boxShadow: '0px 1px 10px #ddd', p: 3 }}>
                <Box textAlign={"right"}>
                  <Button variant='contained' sx={{ fontSize: "14px" }} onClick={handleProceed} endIcon={loading && <CircularProgress size={18} />} disabled={loading}>
                    Click Here To Proceed
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box> : ""}
      {searchParams.get("status") === "terminate" ?
        <Box>
          <Grid container mb={4}>
            <Grid item xs={12}>
              <Card sx={{ boxShadow: '0px 1px 10px #ddd', p: 3 }}>
                <Typography>Thank you for participating in our latest survey, but unfortunately we have sufficient responses in your category. To ensure we only invite you to take part in relevant studies please ensure your panel information is up to date by logging into your panel dashboard and checking your information.</Typography>
              </Card>
            </Grid>
            <Grid item xs={12} mt={4}>
              <Card sx={{ boxShadow: '0px 1px 10px #ddd', p: 3 }}>
                <Box textAlign={"right"}>
                  <Button variant='contained' sx={{ fontSize: "14px" }} onClick={handleProceed} endIcon={loading && <CircularProgress size={18} />} disabled={loading}>
                    Click Here To Proceed
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box> : ""}
    </Container>
  )
}
export default SubmissionPage;