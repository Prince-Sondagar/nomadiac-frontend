import React from 'react'
import { Container } from "@mui/system";
import { Card, Box, Typography } from '@mui/material'

const NotEligibleRespondent = () => {
    return (
        <Container maxWidth={"lg"} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: "100vh" }}>
            <Card sx={{ p: 4, boxShadow: 5, textAlign: 'center', width: "100%" }}>
                <Typography variant='h4' color={"#595959"} mb={0.5}>Thank You</Typography>
                <Typography>We appreciate your interest in joining our panel. Unfortunately, we are currently looking for a different respondent type.</Typography>
                <Box>
                    <img src={process.env.PUBLIC_URL + "/logo.png"} alt='general-logo' />
                </Box>
            </Card>
        </Container>
    )
}

export default NotEligibleRespondent;