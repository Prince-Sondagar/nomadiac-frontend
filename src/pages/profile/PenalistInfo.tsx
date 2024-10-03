import { Collapse, Grid, MenuItem, Select, Typography } from "@mui/material";
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Box } from "@mui/system";
import { useSnackbar } from "notistack";
import {useContext, useEffect, useState } from "react";
import CardComponent from "../../components/Common/CardComponent";
import CommonController from "../../components/Common/CommonController";

import { renderItem } from "../../utils";
import { Maybe, Panelist, UpdatePanelistInput, useUpdatePanelistMutation } from "../../generated";
import { updatePanelistHandler } from "../../utils/surveyHandler";
import { GRAPHQL_QUERY_POLICY } from "../../constants";
import { PanelistUpdateSchema } from "../../utils/schema";
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthContext } from "../../contexts/authContext";



const genderType = ['MALE', "FEMALE", "OTHER", "DECLINE"]

const PanelistInfo = () => {
    const { currentPanelist,refreshPanelist  } = useContext(AuthContext)
    const panelist = currentPanelist as Maybe<Panelist> | any
    const refreshData = refreshPanelist as Function

    const [edit, setEdit] = useState<boolean>(false);
    const { enqueueSnackbar } = useSnackbar();

    const [updatePanelist] = useUpdatePanelistMutation({
        ...(GRAPHQL_QUERY_POLICY as any),
        onError() {
            return null;
        },

        onCompleted(data) {
            const { updatePanelist: { response } } = data;

            if (response) {
                const { status, message } = response

                if (status && status === 200 && message) {
                    enqueueSnackbar(message)
                    reset();
                    refreshData()
                    setEdit(false)
                }
            }
        }
    });

    
    const methods = useForm({
        mode: 'all',
        resolver: yupResolver(PanelistUpdateSchema),
        defaultValues: panelist
    });

    const { handleSubmit, reset, formState: { isDirty }, setValue } = methods;
    
    useEffect(() => {
        if (!!panelist) 
            Object.keys(panelist)?.map((key) => setValue(key, panelist[key]))
        
    }, [panelist, setValue]);


    const onSubmit: SubmitHandler<UpdatePanelistInput> = async (data) => {

        if (panelist && isDirty) {
            await updatePanelist({ variables: updatePanelistHandler(data) })

        }
    };

    useEffect(() => {
        if (!edit) {
            reset()
        }
    }, [edit, reset])

    const handleActionEdit = () => {
        setEdit(!edit);
    };


    

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    <CardComponent
                        cardTitle="Panelist Information"
                        isEdit={edit}
                        onEditClick={handleActionEdit}
                        hasEdit
                    >
                        <Collapse in={edit} mountOnEnter unmountOnExit>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Typography fontWeight={600} fontSize={14} color={"#4B5563"}>Birth Date</Typography>
                                    <CommonController
                                        fieldType="text"
                                        controllerName="dob"
                                        controllerLabel='Birth Date'
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography fontWeight={600} fontSize={14} color={"#4B5563"}>Phone No.</Typography>
                                    <CommonController
                                        fieldType="text"
                                        controllerName="phone"
                                        controllerLabel='Phone No.'
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography fontWeight={600} fontSize={14} color={"#4B5563"}>Gender</Typography>
                                    <Controller
                                        name="gender"
                                        render={({ field }) => (
                                            <Select {...field} fullWidth sx={{ my: 1 }}>
                                                {genderType?.map((tc, index) => (
                                                    <MenuItem key={index} value={tc}>
                                                        {tc}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography fontWeight={600} fontSize={14} color={"#4B5563"}>Address</Typography>
                                    <CommonController
                                        fieldType="text"
                                        controllerName="address"
                                        controllerLabel='Address'
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography fontWeight={600} fontSize={14} color={"#4B5563"}>City</Typography>
                                    <CommonController
                                        fieldType="text"
                                        controllerName="city"
                                        controllerLabel='City'
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography fontWeight={600} fontSize={14} color={"#4B5563"}>State</Typography>
                                    <CommonController
                                        fieldType="text"
                                        controllerName="state"
                                        controllerLabel='State'
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography fontWeight={600} fontSize={14} color={"#4B5563"}>Zip Code</Typography>
                                    <CommonController
                                        fieldType="text"
                                        controllerName="zipCode"
                                        controllerLabel='Zip Code'
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography fontWeight={600} fontSize={14} color={"#4B5563"}>Time Zone</Typography>
                                    <CommonController
                                        fieldType="text"
                                        controllerName="timezone"
                                        controllerLabel='Time Zone'
                                    />
                                </Grid>
                            </Grid>
                        </Collapse>

                        <Collapse in={!edit} mountOnEnter unmountOnExit>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    {renderItem("Birth Date", `${panelist?.dob}`)}
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    {renderItem("Phone No.", `${panelist?.phone}`)}
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    {renderItem("Gender", `${panelist?.gender}`)}
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    {renderItem("Address", `${panelist?.address}`)}
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    {renderItem("City", `${panelist?.city}`)}
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    {renderItem("State", `${panelist?.state}`)}
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    {renderItem("Zip Code", `${panelist?.zipCode}`)}
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    {renderItem("Time Zone", `${panelist?.timezone}`)}
                                </Grid>
                            </Grid>
                        </Collapse>

                    </CardComponent>
                </Box>
            </form>
        </FormProvider >
    )
}

export default PanelistInfo