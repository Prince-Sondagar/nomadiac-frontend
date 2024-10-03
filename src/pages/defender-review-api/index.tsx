import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
//components
import { AuthContainer, AuthLayoutContainer } from '../../theme/styledComponents'
import { Alert } from '../../components/Common/Alert';
//other block
import { defenderReviewAPI, getToken } from '../../utils';
import { LOGIN_ROUTE, SURVEY_ROUTE } from '../../constants';

const DefenderReviewApi: FC = () => {
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const [text, setText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const link = searchParam.get("surveyUrl") || "";
  const panelistId = searchParam.get("panelistId") || "";
  const transactionId = searchParam.get("transactionId") || ""
  const cpi = searchParam.get("cpi") || ""

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event?.preventDefault();
      if (text) {
        setLoading(true)
        const result = await defenderReviewAPI(text, panelistId);
        const { score: { composite_score = 0, } = {} } = result || {}

        if (composite_score >= 10) {
          if (getToken()) {
            navigate(SURVEY_ROUTE)
          } else {
            navigate(LOGIN_ROUTE)
          }
          setLoading(false)
          return
        }

        window.location.href = `${process.env.REACT_APP_BACKEND_DEV_API_URL}/survey/validateFusionApiSurvey?panelistId=${panelistId}&cpi=${cpi}&transactionId=${transactionId || ""}&surveyUrl=${encodeURIComponent(link)}`;
        setLoading(false)
      } else {
        Alert.error('Please Type Something.')
      }
    } catch (error) {
      setLoading(false)
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { target: { value = "" } } = event;
    setText(value)
  };

  useEffect(() => {
    if (!link || !panelistId || !transactionId || !cpi) {
      navigate(LOGIN_ROUTE)
    }
  }, [panelistId, link, transactionId, cpi, navigate]);

  return (
    <AuthLayoutContainer>
      <Box maxWidth='543px' margin="auto" width='100%'>
        <AuthContainer>
          <Typography variant="h6" marginBottom='10px'>
            Why do you take surveys?
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label=""
              value={text}
              onChange={handleChange}
              fullWidth
              disabled={loading}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3, mb: 2,
                backgroundColor: "#edbb5f",
                "&:hover": {
                  backgroundColor: "#edbb5f",
                },
              }}
              disabled={loading}
              endIcon={
                loading && (
                  <CircularProgress size={20} color="inherit" />
                )
              }
            >
              Continue
            </Button>
          </form>
        </AuthContainer>
      </Box>
    </AuthLayoutContainer>
  )
}

export default DefenderReviewApi