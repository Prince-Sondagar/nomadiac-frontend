import { FC, ReactElement } from "react";
import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import { useStyles } from "./style";

export const Footer: FC = (): ReactElement => {
  const classes = useStyles()
  const footerLinks = [
    { id: "1", title: "About Nomadic Insights, LLC.", link: "/" },
    { id: "2", title: "Privacy", link: "/" },
    { id: "3", title: "Avis de Confidentialité", link: "/" },
    { id: "4", title: " Cookie Policy", link: "/" },
    { id: "5", title: "Terms of Service", link: "/" },
    { id: "6", title: " Do Not Sell My Info", link: "/" },
    { id: "7", title: " Data Access Request Form", link: "/" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#3d3d3d",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center">
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: { lg: "space-between" }, flexFlow: "wrap" }}
          >
            {footerLinks?.map(({ title, link, id }) => (
              <Typography color="white" variant="body1" pr={{ xs: 4, lg: 2 }}>
                <Link href={link} className={classes.footer_link} key={id}>
                  {title}
                </Link>
              </Typography>
            ))}
          </Grid>
        </Grid>
        <Button
          className={classes.footer_btn}
          sx={{ textTransform: "capitalize", mt: 8 }}
        >
          Manage Cookies Preferences
        </Button>
      </Container>
    </Box>
  );
};

export default Footer;
