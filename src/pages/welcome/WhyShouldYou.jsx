import { Box, Grid } from "@mui/material";
import { useStyles } from "./style";

export const WhyShouldYou = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className="fade_top" spacing={{ lg: 6 }} width={{ md: "98%", xl: "90%" }} ml={{ md: "auto" }} pt={{ lg: "100px" }} justifyContent={"center"}>
        <Grid item xs={12} md={10} lg={6} mx={{ xs: 3, lg: 0 }} pr={{ lg: "2%", xl: "16%" }} pb={{ xs: 10, lg: 0 }}>
          <h4 className={classes.et_pb_text_0}>CHARGE THE WORLD</h4>
          <h2 className={classes.et_pb_text_1}>
            Why should you participate in market research?
          </h2>
          <p className={classes.et_pb_text_inner}>
            Market research plays an important role in helping companies
            decide what products to develop. Only a small percentage of people
            participate in market research, which means products you want may
            never be developed unless you speak up.
            <ul>
              <li> A chance to earn extra money with incentives.</li>
              <li> Influence the product companies develop</li>
              <li> Have your voice heard!</li>
            </ul>
          </p>
        </Grid>
        <Grid item xs={12} sm={10} lg={6}>
          <Box>
            <img
              src="assets/images/welcome/why_you_should.jpg"
              alt="what_we_offer"
              className={classes.charge_world}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
