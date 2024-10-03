import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import { Button, CircularProgress, Grid } from '@mui/material'
import { AuthContext } from '../../contexts/authContext'
import { useUpdatePasswordMutation } from '../../generated'
import { Alert } from '../../components/Common/Alert'
import CardComponent from '../../components/Common/CardComponent'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { updatePasswordSchema } from '../../utils/schema'
import CommonController from '../../components/Common/CommonController'
import { UpdatePasswordInput } from '../../interfaceTypes'

const UpdatePasswordInfo = () => {
  const { currentUser } = useContext(AuthContext);

  const [updatePassword, { loading }] = useUpdatePasswordMutation({
    onError() { },

    onCompleted(data) {
      const { updatePassword: { response } } = data;

      if (response) {
        const { status, message } = response

        if (status && status === 200 && message) {
          Alert.success(message);
          reset()
        }
      }
    }
  })

  const methods = useForm<UpdatePasswordInput>({
    mode: 'all',
    resolver: yupResolver(updatePasswordSchema),
    defaultValues: {
      repeatPassword: "",
      password: ""
    }
  });

  const { handleSubmit, reset } = methods;

  const onSubmit: SubmitHandler<UpdatePasswordInput> = async ({ password: newPassword }) => {
    const { id } = currentUser || {}
    if (id) {
      await updatePassword({
        variables: {
          updatePasswordInput: {
            id,
            newPassword
          }
        },
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CardComponent
        cardTitle="Update Password"
      >
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container sx={{ justifyContent: "space-between" }} spacing={2}>
              <Grid item xs={12} md={6} lg={4.5} xl={5}>
                <CommonController
                  controllerName="password"
                  controllerLabel="New Password"
                  isPassword
                  fieldType="password"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4.5} xl={5}>
                <CommonController
                  controllerName="repeatPassword"
                  controllerLabel="Confirm Password"
                  isPassword
                  fieldType="password"
                />
              </Grid>

              <Grid item xs={12} md={3} lg={2.5} xl={2} display={"flex"} alignItems={"center"} justifyContent={{ lg: "end" }}>
                <Button
                  type='submit'
                  variant="contained"
                  disabled={loading}
                  color='primary'
                  sx={{ background: "#edbb5f", ":hover": { background: "#edbb5f" } }}
                  endIcon={loading && <CircularProgress size={20} color="inherit" />}
                >
                  Reset Password
                </Button>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </CardComponent>
    </ThemeProvider >
  )
}

export default UpdatePasswordInfo