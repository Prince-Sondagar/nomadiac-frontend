import { FC, ReactElement } from "react";
import { Container, styled as MuiStyled } from "@mui/material";
import { BackgroundImageWrapper } from "../../components/BackgroundImageWrapper";
import { useStyles } from "./style";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SURVEY_ROUTE } from "../../constants";

const OpportunitiesCard = styled.div`
  background: white;
  padding: 30px 54px 32px 54px;
  max-width: 405px;
  opacity: 0;
  animation-name: slideBottom;
  animation-delay: 0ms;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both !important;
  @media(max-width: 767px) {
    max-width: 100%;
  }
  @media(max-width: 599px) {
    padding: 30px;
  }
`;

const Button = styled.button`
  font-size: 20px;
  padding: 7px 24px;
  border-radius: 0.25rem;
  background: #000;
  color: #fff;
  cursor: pointer;
`;

const JoinNowButton = styled(Button)(({ theme }) => ({
  fontSize: "20px",
  background: " #000",
  borderRadius: "0px",
  color: "#fff",
  borderWidth: "0px",
  "&:hover": {
    background: " #000",
    color: "white",
    border: "none",
  },
}));
const CustomLink = MuiStyled(Link)(({ theme }) => ({
  color: "white",
  textDecoration: "none",
}));
export const FromOurFounder: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <BackgroundImageWrapper>
      <Container>
        <OpportunitiesCard>
          <h4 className={classes.et_pb_text_0}>FROM OUR FOUNDER</h4>
          <h2 className={classes.et_pb_text_1}>Make Your Own Opportunities</h2>
          <p
            className={classes.et_pb_text_inner}
            style={{ letterSpacing: "1px" }}
          >
            Our mission at Nomadic Insights is to use market research to help
            make our members lives better. We do this by using the earnings we
            receive from market research to fund our member services team.
            Please considering joining our community to help us on our mission
            by participating in market research studies.{" "}
          </p>
          <JoinNowButton>
            <CustomLink to={SURVEY_ROUTE}>JOIN NOW</CustomLink>
          </JoinNowButton>
        </OpportunitiesCard>
      </Container>
    </BackgroundImageWrapper>
  );
};
