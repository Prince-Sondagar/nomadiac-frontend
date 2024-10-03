import { FC, ReactElement } from "react";
import { Grid, Container } from "@mui/material";
import { Messages, Career, TrendingUp, Diversity, SIGNUP_ROUTE } from "../../constants";
import { useStyles } from "./style";
import styled from "styled-components";
import { styled as MuiStyled } from "@mui/material/styles";

import { ArrowForward } from "@mui/icons-material";
import { Link } from "react-router-dom";

const OfferCardBackground = styled.div`
  background-color: #edbb5f;
  border-radius: 50%;
  height: 70px;
  width: 70px;
  color: white;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const OfferCardContainer = styled.div`
  text-align:center;
  align-items:center;
  display:flex;
  flex-direction: column;
  animation-name: zoomCard;
  animation-delay: 0ms;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both !important;
`;

const OfferTtitle = styled.h4`
font-weight:700;
margin-bottom: 0;
font-size: 14px;
font-family: 'Poppins', sans-serif;
`
const OfferDescription = styled.p`
font-size:18px;
line-height: 1.5em;
font-size: 14px;
font-family: 'Poppins', sans-serif;
padding: 0 20px;
`
const JoinNowCard = styled.div`
  background: #edbb5f;
  margin-top: -100px;
  text-align: center;
  padding: 60px 40px;
  border-radius: 0px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 38px;
  opacity: 0;
  animation-name: slideBottom;
  animation-delay: 0ms;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both !important;
  box-shadow: 0px 15px 80px -6px rgba(0,0,0,0.15);
  @media(max-width: 1199px) {
    font-size: 34px;
  }
  @media(max-width: 899px) {
    font-size: 30px;
    padding: 60px 30px;
  }
  p {
    color: #fff;
    margin: 0;
  }
`;

const JoinNowButton = styled.button`
  display: block;
  margin: 20px auto 0 auto;
  font-size: 20px;
  background: #fff;
  border-radius: 0px;
  border: none;
  color: #edbb5f;
  border-width: 0px;
  letter-spacing: 1px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  :hover {
    padding-right: 16px;
    svg {
      display: block;
    }
  }
  svg {
    font-size: 22px;
    fill: #edbb5f;
    margin-left: 5px;
    display: none;
  }
`;

const SurveyCard = styled.div`
  background: #3d3d3d;
  margin-top: -50px;
  padding: 68px 60px 88px 60px;
  border-radius: 0px;
  opacity: 0;
  animation-name: slideTop;
  animation-delay: 0ms;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both !important;
  box-shadow: 0px 15px 80px -6px rgba(0,0,0,0.15);
  @media(max-width: 899px) {
    margin-top: 0;
    padding: 48px 60px 68px 60px;
  }
  @media(max-width: 599px) {
    padding: 38px 30px 48px 30px;
  }
  p {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    line-height: 32px;
    color: #fff;
    font-family: 'Poppins', sans-serif;
  }
`;

const ServiceBox = styled.div`
  h2, p{
    color: #fff;
  }
  p{
    padding-right: 20px;
  }
`

const CustomLink = MuiStyled(Link)(({ theme }) => ({
  color: '#edbb5f',
  textDecoration: 'none'
}))

export const WhatWeCan: FC = (): ReactElement => {
  const classes = useStyles();
  const offers = [
    {
      icon: Messages,
      title: "PAID MARKET RESEARCH",
      service: "We offer members access to paid market research studies.",
    },
    {
      icon: TrendingUp,
      title: "CAREER DEVELOPMENT",
      service:
        "Members of our business insights community enjoy access to a range of career development services.",
    },
    {
      icon: Career,
      title: "PATIENT ADVOCACY SERVICES",
      service:
        "We offer patients & caregivers access to our patient advocacy services.",
    },
    {
      icon: Diversity,
      title: "OTHER MEMBER BENEFITS",
      service:
        "We are constantly working to offer our members access to new benefits and discounts.",
    },
  ];

  return (
    <div style={{ marginTop: "-3px", background: "#2f2f2f", color: "white" }}>
      <Container>
        <Grid container justifyContent={"center"}>
          <Grid item xs={11} md={6} position={"relative"}>
            <JoinNowCard>
              <p>What Kinds Of Studies do we Have?</p>
              <JoinNowButton>
                <CustomLink to={SIGNUP_ROUTE}>Get Started</CustomLink><ArrowForward />
              </JoinNowButton>
            </JoinNowCard>
          </Grid>
          <Grid item xs={11} md={6} position={"relative"}>
            <SurveyCard>
              <p>Surveys</p>
              <p>Online Interviews</p>
              <p>Online Focus Groups</p>
              <p>Home Usage Studies</p>
            </SurveyCard>
          </Grid>
          <Grid item xs={12} md={6} pt={{ xs: "60px", md: "154px" }}>
            <ServiceBox>
              <h4 className={classes.et_pb_text_0}>SERVICES</h4>
              <h2 className={classes.et_pb_text_1}>What We Can Do For You</h2>
              <p className={classes.et_pb_text_inner}>
                Beyond consumer surveys we offer our members access to a variety
                of services such as career development and patient advocacy
                services. These services support our mission to make all our
                members lives a little bit better.
              </p>
            </ServiceBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container className={classes.offer_Cards} pt={{ xs: "60px", md: "154px" }}>
              {offers.map((offer, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  key={index}
                  sx={{ textAlign: "center", marginBottom: '60px' }}
                >
                  <OfferCardContainer>
                    <OfferCardBackground> {offer.icon}</OfferCardBackground>
                    <OfferTtitle>{offer.title}</OfferTtitle>
                    <OfferDescription>{offer.service}</OfferDescription>
                  </OfferCardContainer>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default WhatWeCan;
