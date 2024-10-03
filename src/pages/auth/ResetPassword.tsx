import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import theme from '../../theme';
import { ThemeProvider } from '@mui/material';
import ResetPasswordComponent from './Reset-Password';


const ResetPassword = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <img src={process.env.PUBLIC_URL + "/logo.png"} alt='general-logo' />
        <ResetPasswordComponent mode={"Reset Password"} />
      </Container>
    </ThemeProvider>
  )
}

export default ResetPassword