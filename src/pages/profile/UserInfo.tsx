
import { useContext, useEffect, useState } from 'react'
import { UpdateUserInput, User, useUpdateUserMutation } from '../../generated';
import { AuthContext } from '../../contexts/authContext';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert } from '../../components/Common/Alert';
import { updateUserSchema } from '../../utils/schema';
import CardComponent from '../../components/Common/CardComponent';
import { Button, Collapse, Grid, Typography } from '@mui/material';
import CommonController from '../../components/Common/CommonController';
import { renderItem, toTitleCase } from '../../utils';

const UserInfo = () => {
  const { currentPanelist, refreshPanelist, onLeavePanelAndDeactive } = useContext(AuthContext)
  const user = currentPanelist?.user as User | any
  const refreshData = refreshPanelist as Function
  const [edit, setEdit] = useState<boolean>(false);

  const [updateUser] = useUpdateUserMutation({
    onError() {
      return null;
    },

    onCompleted(data) {
      const { updateUser: { response } } = data;

      if (response) {
        const { status, message } = response

        if (status && status === 200 && message) {
          Alert.success(message);
          reset();
          refreshData()
          setEdit(false)
        }
      }
    }
  });


  const methods = useForm<UpdateUserInput | any>({
    mode: 'all',
    resolver: yupResolver(updateUserSchema),
    defaultValues: user as User
  });

  const { handleSubmit, reset, formState: { isDirty }, setValue } = methods;

  useEffect(() => {
    if (!!user) {
      Object.keys(user as User)?.map((key) => setValue(key, user[key]))
    }
  }, [user, setValue]);

  useEffect(() => {
    if (!edit) {
      reset()
    }
  }, [edit, reset])

  const onSubmit: SubmitHandler<UpdateUserInput> = async (data) => {
    if (user && isDirty) {
      await updateUser({
        variables: {
          userInput: {
            id: data?.id,
            firstName: data?.firstName,
            lastName: data?.lastName,
            email: data?.email || "",
            emailVerified: data?.emailVerified
          }
        },
      });
    }
  };

  const handleActionEdit = () => {
    setEdit(!edit);
  };

  return (
    <FormProvider {...methods} >
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardComponent
          cardTitle="User information"
          isEdit={edit}
          onEditClick={handleActionEdit}
          hasEdit
        >
          <Collapse in={edit} mountOnEnter unmountOnExit>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <Typography fontWeight={600} fontSize={14} color={"#4B5563"}>First Name</Typography>
                <CommonController
                  fieldType="text"
                  controllerName="firstName"
                  controllerLabel='First Name'
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Typography fontWeight={600} fontSize={14} color={"#4B5563"}>Last Name</Typography>
                <CommonController
                  fieldType="text"
                  controllerName="lastName"
                  controllerLabel='Last Name'
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography fontWeight={600} fontSize={14} color={"#4B5563"}>Email</Typography>
                <CommonController
                  fieldType="email"
                  controllerName="email"
                  controllerLabel='Email'
                  isDisabled
                />
              </Grid>

            </Grid>
          </Collapse>

          <Collapse in={!edit} mountOnEnter unmountOnExit>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                {renderItem("First Name", `${toTitleCase(user?.firstName || "") || ''}`)}
              </Grid>

              <Grid item md={6} xs={12}>
                {renderItem("Last Name", `${toTitleCase(user?.lastName || "") || ''}`)}
              </Grid>

              <Grid item md={6} xs={12}>
                <Typography variant="body2">Email</Typography>

                {/* <Link to={user?.email ? `mailto: ${user?.email}` : ""}> */}
                <Typography component="h5" variant="h5" noWrap fontSize={14} color={"#edbb5f"} fontWeight={700}>
                  {user?.email || "N/A"}
                </Typography>
                {/* </Link> */}
              </Grid>

              <Grid item md={12}>
                <Button variant='contained' sx={{ background: "#edbb5f", ":hover": { background: "#edbb5f" } }} onClick={() => onLeavePanelAndDeactive()}>
                  Leave Panel and Delete Account
                </Button>
              </Grid>
            </Grid>
          </Collapse>
        </CardComponent>
      </form>
    </FormProvider>
  )
}

export default UserInfo