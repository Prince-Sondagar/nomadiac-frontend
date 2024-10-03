import { ArrowForward } from "@mui/icons-material";
import {
  Card,
  Grid,
  Typography,
  Container,
  Button,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { SIGNUP_ROUTE } from "../../constants";
import { Link } from "react-router-dom";

const ContainerWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "700px",
  backgroundImage: "url(assets/images/welcome/bg_banner.jpg)",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));

const JoinNowCard = styled(Card)(({ theme }) => ({
  background: "white",
  maxWidth: "75%",
  textAlign: "center",
  padding: "50px 40px",
  borderRadius: "0px",
  fontWeight: 700,
  textTransform: "uppercase",
  fontSize: "38px",
  color: "#000",
  animation: "rotateCard 1000ms ease",
  "@media(max-width: 899px)": {
    margin: "auto",
  },
  "@media(max-width: 599px)": {
    maxWidth: "100%",
    padding: "50px 16px",
  },
  p: {
    margin: "0 auto",
    maxWidth: "75%",
    "@media(max-width: 1199px)": {
      maxWidth: "100%",
    },
  },
}));

const JoinNowButton = styled(Button)(({ theme }) => ({
  display: "block",
  margin: "20px auto 0 auto",
  fontSize: "20px",
  background: "#edbb5f",
  borderRadius: "0px",
  border: "none",
  color: "#ffffff",
  borderWidth: "0px",
  letterSpacing: "1px",
  fontWeight: "600",
  textTransform: "uppercase",
  backgroundColor: "#edbb5f",
  "&:hover": {
    background: "#edbb5f",
    color: "white",
    border: "none",
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  fontSize: "20px",
  marginTop: "20px",
  borderRadius: "0px",
  color: "#fff",
  letterSpacing: "1px",
  fontWeight: "600",
  textTransform: "uppercase",
  borderColor: "#ffffff4d",
  "&:hover": {
    borderColor: "#ffffff4d",
    color: "#edbb5f",
    paddingLeft: "0.7em",
    svg: {
      display: "block",
    },
    a: {
      color: "#edbb5f",
    }
  },
  svg: {
    fontSize: "22px",
    fill: "#edbb5f",
    marginLeft: "5px",
    display: "none",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  textTransform: "uppercase",
  fontSize: "14px",
  color: "#edbb5f",
  letterSpacing: "2px",
  lineHeight: "1.8em",
  fontFamily: "'Poppins', sans-serif",
  marginBottom: "10px",
}));

const JoinTextContainer = styled(Box)(({ theme }) => ({
  textAlign: "right",
}));

const JoinTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  textTransform: "uppercase",
  fontSize: "48px",
  lineHeight: "1.4em",
  color: "#fff",
  maxWidth: "85%",
  marginLeft: "auto",
  "@media(max-width: 1199px)": {
    fontSize: "42px",
    maxWidth: "100%",
  },
  "@media(max-width: 599px)": {
    fontSize: "32px",
  },
}));

const BannerBg = styled(Box)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  background: "rgba(0,0,0,0.8)",
}));
const CustomLink = styled(Link)(({ theme }) => ({
  color: "white",
  textDecoration: "none",
}));
export const Banner = () => {
  return (
    <ContainerWrapper>
      <BannerBg></BannerBg>
      <Container sx={{ height: "100%", maxWidth: "1080px" }}>
        <Grid container position={"relative"} height={"100%"} py={4} >
          <Grid
            item
            xs={12}
            md={6}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={{ xs: "center", md: "flex-end" }}
            order={{ xs: 2, md: 1 }}
          >
            <JoinNowCard>
              <p>GET REWARDED TODAY!</p>
              <JoinNowButton variant="outlined" size="large">
                <CustomLink to={SIGNUP_ROUTE}>JOIN NOW</CustomLink>
              </JoinNowButton>
            </JoinNowCard>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            order={{ xs: 1, md: 2 }}
          >
            <JoinTextContainer>
              <Title variant="h1">CONSUMER INSIGHTS COMMUNITY</Title>
              <JoinTitle>JOIN FOR HIGH SURVEY REWARDS</JoinTitle>
              <CustomButton variant="outlined">
                Learn More <ArrowForward />{" "}
              </CustomButton>
              <CustomButton variant="outlined" sx={{ ml: 2 }}>
                <CustomLink to={SIGNUP_ROUTE}> Get Started </CustomLink>
                <ArrowForward />
              </CustomButton>
            </JoinTextContainer>
          </Grid>
        </Grid>
      </Container>
    </ContainerWrapper>
  );
};
