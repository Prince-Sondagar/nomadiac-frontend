import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useStyles } from "./style";

export const WeOffer = () => {
  const classes = useStyles();
  return (
    <>
      <Container className="fade_top">
        <Grid container sx={{ py: { xs: "80px", lg: "150px" } }} alignItems={"center"} justifyContent={"center"}>
          <Grid item xs={12} lg={6} textAlign={{ xs: "center", lg: "left" }}>
            <img
              src="assets/images/welcome/we_offer.jpg"
              alt="what_we_offer"
              className={classes.we_offer}
            />
          </Grid>
          <Grid item xs={12} md={10} lg={6} pr={{ lg: 2 }} pt={{ xs: 10, lg: 0 }}>
            <h4 className={classes.et_pb_text_0}>DON’T SETTLE FOR LESS</h4>
            <h2 className={classes.et_pb_text_1}>
              We offer high incentives for surveys & online interviews.
            </h2>
            <p className={classes.et_pb_text_inner}>
              Our surveys pay up to $20 per survey you complete. We also offer our members access to online consumer interviews with incentives up to $100 per hour. Certain clients have maximum incentive values they are
              willing to pay and we vary incentives to maximize the number of
              research opportunities our members receive.&nbsp;
            </p>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
