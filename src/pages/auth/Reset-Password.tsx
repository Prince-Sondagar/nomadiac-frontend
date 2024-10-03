import { useContext } from 'react'
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material'
import { styled } from "@mui/material/styles";
import { useResetPasswordMutation, useVerifyPanelistEmailAndSetPasswordMutation } from '../../generated'
import { FORBIDDEN_EXCEPTION, GRAPHQL_QUERY_POLICY, LOGIN_ROUTE, NOT_FOUND_EMAIL_MESSAGE, RESET_PASSWORD_FAILURE, RESET_PASSWORD_SUCCESS, USER_ALREADY_EXIST, WRONG_EMAIL_OR_PASSWORD } from '../../constants'
import { Alert } from '../../components/Common/Alert'
import { AuthContext } from '../../contexts/authContext'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { updatePasswordSchema } from '../../utils/schema'
import CommonController from '../../components/Common/CommonController'
import { UpdatePasswordInput } from '../../interfaceTypes';
import { removePantheraVariables } from '../../utils';

type TResetPassword = {
  mode: string
}

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#edbb5f",
  fontSize: "18px",
  fontFamily: "'Poppins', sans-serif",
  marginTop: "24px",
  "&:hover": {
    backgroundColor: "#edbb5f",
  },
}));

const ResetPassword = ({ mode }: TResetPassword) => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [resetPassword, { loading: resetPasswordLoading }] = useResetPasswordMutation({
    ...(GRAPHQL_QUERY_POLICY as any),
    onError({ message }) {
      if (message.toLowerCase() === FORBIDDEN_EXCEPTION)
        return Alert.error(RESET_PASSWORD_FAILURE);
    },

    onCompleted(data) {
      if (data) {
        const { resetPassword: { response } } = data;

        if (response) {
          const { status } = response;

          if (status === 404) {
            setIsLoggedIn(false);
            return Alert.error(WRONG_EMAIL_OR_PASSWORD);
          }

          if (status === 200) {
            Alert.success(RESET_PASSWORD_SUCCESS);
            reset()
            navigate(LOGIN_ROUTE);
          }
        }
      }
    },
  });

  const [verifyEmailAndSetPassword, { loading: setPasswordLoading }] = useVerifyPanelistEmailAndSetPasswordMutation({
    onError({ message }) {
      if (message.toLowerCase() === FORBIDDEN_EXCEPTION) return Alert.error(USER_ALREADY_EXIST)
    },

    onCompleted(data) {
      if (data) {
        const { verifyPanelistEmailAndSetPassword: { response } } = data

        if (response) {
          const { status } = response

          if (status === 404) {
            return Alert.error(NOT_FOUND_EMAIL_MESSAGE);
          }

          if (status === 200) {
            Alert.success("Password set successfully")
            removePantheraVariables()
            navigate(LOGIN_ROUTE)
          }
        }
      }
    }
  });

  const methods = useForm<UpdatePasswordInput>({
    mode: 'all',
    resolver: yupResolver(updatePasswordSchema),
    defaultValues: {
      password: "",
      repeatPassword: ""
    }
  });

  const { handleSubmit, reset } = methods;

  const onSubmit: SubmitHandler<UpdatePasswordInput> = async ({ password }) => {
    if (token) {
      mode === "Set Password" ?
        await verifyEmailAndSetPassword({
          variables: {
            verifyPanelistEmailAndSetPasswordInput: {
              password,
              token,
            }
          },
        })
        :
        await resetPassword({
          variables: {
            resetPassword: {
              token,
              password
            }
          },
        });
    }
  };

  const isLoading = setPasswordLoading || resetPasswordLoading

  return (
    <Box width={"100%"}>
      <Typography component="h1" variant="h5" textAlign={"center"} mb={2}>
        {mode}
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item>
            <CommonController
              controllerName="password"
              controllerLabel="New Password"
              fieldType="password"
              isPassword
            />
          </Grid>
          <Grid item>
            <CommonController
              controllerName="repeatPassword"
              controllerLabel="Confirm Password"
              fieldType="password"
              isPassword
            />
          </Grid>
          <CustomButton
            type="submit"
            fullWidth
            variant="contained"
            disabled={isLoading}
            endIcon={isLoading && <CircularProgress size={20} color="inherit" />}
          >
            Submit
          </CustomButton>
        </form>
      </FormProvider>
    </Box>
  )
}

export default ResetPassword