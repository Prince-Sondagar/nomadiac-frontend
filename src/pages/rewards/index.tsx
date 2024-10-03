import { FC } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { Card } from "../../components/Card";
import { BenefitCard } from "../../components/Card/BenefitCard";
import { Header } from "../new-welcome/customComponents";

const Rewards: FC = (): JSX.Element => {
  return (
    <Box>
      <Header>
        <img src="assets/welcome/logo.png" alt="welcome page Logo " />
      </Header>

      <Box pb={2}>
        <Typography variant="inherit" align="center">
          <b>Earn a weekly bonus when you complete at least 5 surveys per week.
            <br />
            Your bonus is a percentage of your total approved survey points for the week.
          </b>
        </Typography>
      </Box>
      <Box>
        <Grid container display={"flex"} justifyContent={"center"} spacing={2}>
          <Grid item lg={3} md={4} sm={6} xs={6}>
            <Card star={[1]} title1={"Bronze"} title2={"5+ SURVEYS COMPLETED PER WEEK"} cardType="Bronze" />
            <BenefitCard icons={false} subTitle={""} heightFull title1={"5+ Surveys per Week"} title2={"5%"} cardType="Bronze" lock={false} />
          </Grid>

          <Grid item lg={3} md={4} sm={6} xs={6}>
            <Card star={[1, 2]} title1={"Silver"} title2={"10+ SURVEYS COMPLETED PER WEEK"} cardType="Silver" />
            <BenefitCard icons={false} subTitle={""} heightFull title1={"10+ Surveys per Week"} title2={"10%"} cardType="Silver" lock={false} />
          </Grid>

          <Grid item lg={3} md={4} sm={6} xs={6}>
            <Card star={[1, 2, 3]} title1={"Gold"} title2={"15+ SURVEYS COMPLETED PER WEEK"} cardType="Gold" />
            <BenefitCard icons={false} subTitle={""} heightFull title1={"15+ Surveys per Week"} title2={"15%"} cardType="Gold" lock={false} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Rewards;