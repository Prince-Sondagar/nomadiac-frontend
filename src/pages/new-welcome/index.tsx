import { useEffect } from "react";
import { LOGIN_ROUTE, SIGNUP_ROUTE } from "../../constants";
import {
  Header,
  CustomButton,
  GetReward,
  WeOfferComponentWrapper,
  WeOfferContentBanner,
  WeOfferTitle,
  WeOfferHeading,
  WeOfferDescription,
  ServicesTtitle,
  ServicesHeading,
  ServicesDescription,
  ServicesContainer,
  ServiceList,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  WhyShouldYouWrapper,
  ChargeWorldMain,
  ChargeTheWorldWrapper,
  ChangeTheWorldTitle,
  ChangeTheWorldHeading,
  ChangeTheWorldDescription,
  ChargeTheWorldIconWrapper,
  ChangeTheWorldIconCaption,
  ChargeTheWorldIconWrapper2,
  ChargeTheWorldIconWrapper3,
  WhatWeHaveBox,
  WhatWeHaveTitle,
  WhatWeHaveContainer,
  FooterWrapper,
  FooterContentContainer,
  FooterContentTtile,
  FooterContentHeading,
  FooterContentDescription,
  Footer,
  CustomLink,
  GetRegisterButton,
  MenuSection,
  ImageSection,
} from "./customComponents";
import { useSearchParams } from "react-router-dom";
import { setTransactionAndSourceId } from "../../utils";
import { Box } from "@mui/material";

export const WelcomePage = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setTransactionAndSourceId(searchParams.get('clickid') || "", searchParams.get('aid') || "", searchParams.get('subid') || "")
  }, [searchParams]);

  return (
    <Box>
      {/*  Header of the Page */}
      <Header className="header">
        <ImageSection>
          <img src="assets/welcome/logo.png" alt="welcome page Logo " />
        </ImageSection>
        <MenuSection>
          <ul style={{ listStyle: "none", display: "flex" }} className="headerBtn">
            <li style={{ paddingRight: "30px" }}>
              <CustomButton>
                <CustomLink to={SIGNUP_ROUTE}>Sign Up</CustomLink>
              </CustomButton>
            </li>
            <li>
              <CustomButton>
                <CustomLink to={LOGIN_ROUTE}>Login</CustomLink>
              </CustomButton>
            </li>
          </ul>
        </MenuSection>
      </Header>
      {/* Why Should You participate */}
      <WhyShouldYouWrapper>
        <ChargeTheWorldWrapper>
          <ChangeTheWorldTitle>Charge The World</ChangeTheWorldTitle>
          <ChangeTheWorldHeading>
            Why should you participate in market research?
          </ChangeTheWorldHeading>
          <ChangeTheWorldDescription>
            Market research plays an important role in helping companies decide
            what products to develop. Only a small percentage of people
            participate in market research, which means products you want may
            never be developed unless you speak up.
          </ChangeTheWorldDescription>
          <ChargeWorldMain>
            <ChargeTheWorldIconWrapper>
              <img src="assets/welcome/Group21.png" alt="welcome page Logo " />
              <ChangeTheWorldIconCaption>
                A chance to earn extra money with incentives.
              </ChangeTheWorldIconCaption>
            </ChargeTheWorldIconWrapper>
            <ChargeTheWorldIconWrapper2>
              <img src="assets/welcome/Group20.png" alt="welcome page Logo " />
              <ChangeTheWorldIconCaption>
                Influence the product companies develop
              </ChangeTheWorldIconCaption>
            </ChargeTheWorldIconWrapper2>
            <ChargeTheWorldIconWrapper3>
              <img src="assets/welcome/Group34.png" alt="welcome page Logo " />
              <ChangeTheWorldIconCaption>
                Have your voice heard!
              </ChangeTheWorldIconCaption>
            </ChargeTheWorldIconWrapper3>
          </ChargeWorldMain>
        </ChargeTheWorldWrapper>
        <GetReward>
          <GetRegisterButton>
            <CustomLink to={SIGNUP_ROUTE}>Join Now</CustomLink>
          </GetRegisterButton>
        </GetReward>
      </WhyShouldYouWrapper>

      {/* Services */}
      <ServicesTtitle>Member Services</ServicesTtitle>
      <ServicesHeading>What We Can Do For You</ServicesHeading>
      <ServicesDescription>
        Beyond consumer surveys we offer our members access to a variety of
        services such as career development and patient advocacy services. These
        services support our mission to make all our members lives a little bit
        better.
      </ServicesDescription>
      <ServicesContainer>
        <ServiceList>
          <ServiceIcon>
            <img src="assets/welcome/Vector.png" alt="welcome page Logo " />
          </ServiceIcon>
          <ServiceTitle>Paid Market Research </ServiceTitle>
          <ServiceDescription>
            We offer members access to paid market research studies.
          </ServiceDescription>
        </ServiceList>
        <ServiceList>
          <ServiceIcon>
            <img src="assets/welcome/Group11.png" alt="welcome page Logo " />
          </ServiceIcon>
          <ServiceTitle>Career Development </ServiceTitle>
          <ServiceDescription>
            Members of our business insights community enjoy access to a range
            of career development services.
          </ServiceDescription>
        </ServiceList>
        <ServiceList>
          <ServiceIcon>
            <img src="assets/welcome/Group12.png" alt="welcome page Logo " />
          </ServiceIcon>
          <ServiceTitle>Patient Advocacy Services</ServiceTitle>
          <ServiceDescription>
            We offer patients & caregivers access to our patient advocacy
            services.
          </ServiceDescription>
        </ServiceList>
        <ServiceList>
          <ServiceIcon>
            <img src="assets/welcome/Group13.png" alt="welcome page Logo " />
          </ServiceIcon>
          <ServiceTitle>Other Memeber Benefits</ServiceTitle>
          <ServiceDescription>
            We are constantly working to offer our members access to new
            benefits and discounts.
          </ServiceDescription>
        </ServiceList>
      </ServicesContainer>
      {/* What we offer section */}
      <WeOfferComponentWrapper>
        <WeOfferContentBanner>
          <WeOfferTitle>Don't Settle For Less</WeOfferTitle>
          <WeOfferHeading>
            We offer high incentives for surveys & online interviews
          </WeOfferHeading>
          <WeOfferDescription>
            Our surveys pay up to $50 per survey you complete. We also offer our
            members access to online consumer interviews with incentives that
            range between $60 – $120 per hour. Certain clients have maximum
            incentive values they are willing to pay and we vary incentives to
            maximize the number of research opportunities our members receive.
          </WeOfferDescription>
        </WeOfferContentBanner>
      </WeOfferComponentWrapper>
      {/* WHAT KINDS OF STUDIES DO WE HAVE? */}
      <WhatWeHaveBox>
        <WhatWeHaveTitle>What Kinds Of Studies Do We Have?</WhatWeHaveTitle>
        <WhatWeHaveContainer>
          <div>
            <img src="assets/welcome/Group27.png" alt="welcome page Logo " />
            <p>Online Interview</p>
          </div>
          <div>
            <img src="assets/welcome/Group26.png" alt="welcome page Logo " />
            <p>Online Focus Groups</p>
          </div>
          <div>
            <img src="assets/welcome/Group25.png" alt="welcome page Logo " />
            <p>Home Usage Studies</p>
          </div>
          <div>
            <img src="assets/welcome/Group28.png" alt="welcome page Logo " />
            <p>Surveys</p>
          </div>
        </WhatWeHaveContainer>
      </WhatWeHaveBox>

      {/* Footer */}
      <FooterWrapper>
        <FooterContentContainer>
          <FooterContentTtile>From Our Founder</FooterContentTtile>
          <FooterContentHeading>
            Make Your Own Opportunities
          </FooterContentHeading>
          <FooterContentDescription>
            Our mission at Nomadic Insights is to use market research to help
            make our members lives better. We do this by using the earnings we
            receive from market research to fund our member services team.
            Please considering joining our community to help us on our mission
            by participating in market research studies.
          </FooterContentDescription>
          <GetRegisterButton>
            <CustomLink to={SIGNUP_ROUTE}> Join Now</CustomLink>
          </GetRegisterButton>
        </FooterContentContainer>
        <Footer>
          <nav>
            <a
              href="https://nomadicinsights.com/about-us/"
              target="_blank"
              rel="noreferrer"
            >
              About Nomadic Insights, LLC.
            </a>
            <a
              href="https://nomadicinsights.com/privacy-policy/"
              target="_blank"
              rel="noreferrer"
            >
              Privacy
            </a>
            <a
              href="https://nomadicinsights.com/avis-de-confidentialite/"
              target="_blank"
              rel="noreferrer"
            >
              Avis de Confidentialité
            </a>
            <a
              href="https://nomadicinsights.com/cookie-policy/"
              target="_blank"
              rel="noreferrer"
            >
              Cookie Policy
            </a>
            <a
              href="https://nomadicinsights.com/terms-of-service/"
              target="_blank"
              rel="noreferrer"
            >
              Terms of Service
            </a>
            <a
              href="https://app.termly.io/notify/1fbba1b2-8948-4c64-9a0a-7d73ef6f51b9"
              target="_blank"
              rel="noreferrer"
            >
              Do Not Sell My Info
            </a>
            <a
              href="https://app.termly.io/notify/1fbba1b2-8948-4c64-9a0a-7d73ef6f51b9"
              target="_blank"
              rel="noreferrer"
            >
              Data Access Request Form
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              {" "}
              Manage Cookie Preferences
            </a>
          </nav>
        </Footer>
      </FooterWrapper>
    </Box>
  );
};
