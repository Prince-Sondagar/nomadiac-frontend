import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

// Common Colors
const color1 = "#FFFFFF";
const color2 = "#4C3D3D";

// Font Family
const PrimaryFont = "Petrona";

export const BannerBg = styled(Box)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  background: "rgba(35,19,0,0.6)",
  height: "777px",
  [theme.breakpoints.down("sm")]: {
    height: "500px",
  },
}));
export const Header = styled(Box)(({ theme }) => ({
  textAlign: "initial",
  background: "white",
  display: "flex",
  justifyContent: "space-between",
  padding: "12px 50px",
  [theme.breakpoints.down("sm")]: {
    display: `flex`,
    justifyContent: "space-between",
    padding: '20px',
  },
}));
export const ImageSection = styled(Box)(({ theme }) => ({
  maxWidth: '290px',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%"
  },
}))
export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: PrimaryFont,
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "40px",
  lineHeight: "45px",
  textTransform: "capitalize",
  color: color1,
  paddingBottom: "20px",
  // To make it responsive
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
    lineHeight: "30px",
  },

  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("sm")]: {},
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: PrimaryFont,
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "96px",
  lineHeight: "108px",
  textAlign: "center",
  background:
    "linear-gradient(180.88deg, #FFD95A 34.92%, rgba(255, 217, 90, 0.637378) 98.89%, rgba(255, 217, 90, 0) 135.72%)",
  backgroundClip: "text",
  textFillColor: "transparent",
  [theme.breakpoints.down("lg")]: {
    fontSize: "64px",
    lineHeight: "78px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "48px",
    lineHeight: "56px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "42px",
    lineHeight: "52px",
    padding: "0px 16px",
  },
}));

export const ButtonSection = styled(Box)(({ theme }) => ({
  marginTop: "24px",
}));

export const BannerContent = styled(Box)(({ theme }) => ({
  position: "relative",
}));

export const MenuSection = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    // display:'none'
  },
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  background:
    "linear-gradient(180deg, #917D69 15.43%, rgba(146, 123, 100, 0.997745) 15.44%, rgba(35, 19, 0, 0.75) 80.77%, rgba(35, 19, 0, 0.75) 140.12%)",
  fontstyle: "normal",
  color: color1,
  textTransform: "capitalize",
  fontFamily: "PrimaryFont",
  minWidth: "100px",
  [theme.breakpoints.down("md")]: {
    minWidth: "100px",
  },
  [theme.breakpoints.down("sm")]: {
    minWidth: "100px",
  },
}));
export const GetRegisterButton = styled(Button)(({ theme }) => ({
  background:
    "linear-gradient(180deg, #917D69 15.43%, rgba(146, 123, 100, 0.997745) 15.44%, rgba(35, 19, 0, 0.75) 80.77%, rgba(35, 19, 0, 0.75) 140.12%)",
  fontstyle: "normal",
  color: color1,
  textTransform: "capitalize",
  fontFamily: "PrimaryFont",
  fontWeight: "400",
  fontSize: "48px",
  // padding: "6px 61px !important",
  minWidth: "350px",
  margin: "0 20px",
  [theme.breakpoints.down("lg")]: {
    minWidth: "223px",
    fontSize: "40px",
  },
  [theme.breakpoints.down("md")]: {
    minWidth: "223px",
    fontSize: "36px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "85%",
    fontWeight: "400",
    fontSize: "32px",
  },
}));

export const BannerWrapper = styled(Box)(({ theme }) => ({
  backgroundImage:
    "url(assets/welcome/view-chicago-with-morning-light-usa.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  height: "777px",
  width: "100%",
  left: "0px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    height: "500px",
  },
}));

export const GetReward = styled(Box)(({ theme }) => ({
  width: '50%',
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    width: 'auto',
  }
}));

// Join Now
export const JoinNoWHeading = styled(Typography)(({ theme }) => ({
  background:
    "linear-gradient(180deg, #917D69 15.43%, rgba(146, 123, 100, 0.997745) 15.44%, rgba(182, 169, 156, 0.621875) 80.77%, rgba(243, 241, 241, 0) 140.12%)",
  fontFamily: PrimaryFont,
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "64px",
  lineHeight: "72px",
  textAlign: "center",
  padding: "0 5px",
  textTransform: "capitalize",
  color: color1,
  marginTop: "125px",
  marginBottom: "54px",
  [theme.breakpoints.down("md")]: {
    fontSize: "48px",
    marginBottom: "24px",
    lineHeight: "60px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "42px",
    lineHeight: "52px",
  },
}));

// We Offer Components
export const WeOfferComponentWrapper = styled(Box)(({ theme }) => ({
  backgroundImage: "url(assets/welcome/census-concept-photographed-town.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  height: "685px",
  width: "100%",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    height: "550px",
  },
}));

export const WeOfferContentBanner = styled(Box)(({ theme }) => ({
  height: "100%",
  background: "rgba(35, 19, 0, 0.65)",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  maxWidth: "738px",
  marginLeft: "auto",
  marginRight: "109px",
  [theme.breakpoints.down("md")]: {
    margin: 'auto',
    maxWidth: "92%",
  },
}));

export const WeOfferTitle = styled(Typography)(({ theme }) => ({
  fontFamily: PrimaryFont,
  fontStyle: "normal",
  fontWeight: "400px",
  fontSize: "40px",
  lineHeight: "45px",
  color: color1,
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
    lineHeight: "30px",
  },
}));

export const WeOfferHeading = styled(Typography)(({ theme }) => ({
  fontFamily: PrimaryFont,
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "48px",
  lineHeight: "54px",
  color: color1,
  textAlign: "center",
  margin: "16px 0 30px 0",
  [theme.breakpoints.down("sm")]: {
    fontSize: "28px",
    lineHeight: "32px",
    padding: "0 20px",
  },
}));

export const WeOfferDescription = styled(Typography)(({ theme }) => ({
  fontFamily: PrimaryFont,
  fontStyle: "normal",
  fontWeight: "400px",
  fontSize: "24px",
  lineHeight: "27px",
  color: color1,
  padding: "0 61px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    lineHeight: "22px",
    padding: "0 20px",
  },
}));

// Services
export const ServicesTtitle = styled(Typography)(({ theme }) => ({
  fontFamily: PrimaryFont,
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "40px",
  lineHeight: "45px",
  color: color2,
  paddingTop: "102px",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
    paddingTop: "60px",
  },
}));

export const ServicesHeading = styled(Typography)(({ theme }) => ({
  fontFamily: PrimaryFont,
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "48px",
  lineHeight: "54px",
  color: color2,
  textAlign: "center",
  margin: "10px 0 40px 0",
  [theme.breakpoints.down("md")]: {
    fontSize: "42px",
    lineHeight: "50px",
    padding: "0px 16px 0px 16px",
  },
}));

export const ServicesDescription = styled(Typography)(({ theme }) => ({
  fontFamily: PrimaryFont,
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "24px",
  lineHeight: "27px",
  textAlign: "center",
  color: color2,
  maxWidth: "85%",
  margin: "auto",
  paddingBottom: "112px",
  [theme.breakpoints.down("md")]: {
    paddingBottom: "40px",
    fontSize: "20px",
    lineHeight: "24px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    lineHeight: "20px",
  },
}));

// Services Container
export const ServicesContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flextDirection: "row",
  gap: "16px",
  padding: "68px 16px 63px 16px",
  maxWidth: "85%",
  margin: "auto",
  [theme.breakpoints.down("md")]: {
    padding: "48px 20px 48px 20px",
    maxWidth: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "24px",
  },
}));

export const ServiceList = styled(Box)(({ theme }) => ({
  width: "25%",
  [theme.breakpoints.down("md")]: {
    width: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const ServiceIcon = styled(Box)(({ theme }) => ({
  maxWidth: "120px",
  margin: "0 auto 24px auto",
  [theme.breakpoints.down("lg")]: {
    maxWidth: "90px",
  },
  "& img": {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "16px",
  },
}));

export const ServiceTitle = styled(Box)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "24px",
  lineHeight: "36px",
  textAlign: "center",
  textTransform: "capitalize",
  color: color2,
  margin: "0 auto 18px auto",
  maxWidth: "300px",
  [theme.breakpoints.down("lg")]: {
    maxWidth: "100%",
    fontSize: "24px",
    lineHeight: "30px",
  },
  [theme.breakpoints.down("md")]: {
    lineHeight: "28px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    lineHeight: "24px",
    marginBottom: '10px',
  },
}));

export const ServiceDescription = styled(Box)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "27px",
  textAlign: "center",
  color: color2,
  margin: "auto",
  maxWidth: "300px",
  [theme.breakpoints.down("lg")]: {
    maxWidth: "100%",
    lineHeight: "22px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
    lineHeight: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    lineHeight: "18px",
  },
}));

// Why Shoould You
export const WhyShouldYouWrapper = styled(Box)(({ theme }) => ({
  backgroundImage: "url(assets/welcome/famous-view-chicago-morning-usa.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  height: "685px",
  width: "100%",
  textAlign: "center",
  display: "flex",
  justifyContent: "space-around",
  [theme.breakpoints.down("md")]: {
    displya: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  [theme.breakpoints.down("sm")]: {
    height: '820px'
  },
}));

export const ChargeTheWorldWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "751px",
  height: "100%",
  background: "rgba(35, 19, 0, 0.75)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginRight: "auto",
  marginLeft: "109px",
  [theme.breakpoints.down("lg")]: {
    marginLeft: "20px",
    maxWidth: "85%",
    marginRight: '20px',
  },
  [theme.breakpoints.down("md")]: {
    margin: "auto",
    maxWidth: "85%",
    marginBottom: '20px'
  }
}));

export const ChangeTheWorldTitle = styled(Typography)(({ theme }) => ({
  fontFamily: PrimaryFont,
  fontStyle: "normal",
  fontSize: "40px",
  lineHeight: "45px",
  color: color1,
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
    lineHeight: "30px",
  },
}));
export const ChangeTheWorldHeading = styled(Typography)(({ theme }) => ({
  fontFamily: PrimaryFont,
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "48px",
  lineHeight: "54px",
  textAlign: "center",
  color: color1,
  margin: "20px 60px 35px 60px",
  [theme.breakpoints.down("lg")]: {
    margin: "12px 20px 30px 20px",
    fontSize: "36px",
    lineHeight: "48px",
  },
}));
export const ChangeTheWorldDescription = styled(Typography)(({ theme }) => ({
  fontFamily: PrimaryFont,
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "24px",
  lineHeight: "27px",
  textAlign: "center",
  color: color1,
  padding: "0 60px",
  [theme.breakpoints.down("lg")]: {
    padding: "0 20px",
    fontSize: "18px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    lineHeight: "18px",
  },
}));
export const ChargeWorldMain = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  padding: "35px 20px 10px 20px",
  [theme.breakpoints.down("md")]: {
    padding: "35px 16px 10px 16px",
  },
}));
export const ChargeTheWorldIconWrapper = styled(Box)(({ theme }) => ({
  width: "30%",
  padding: "0 24px",
  [theme.breakpoints.down("md")]: {
    padding: "0 16px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0 8px",
  },
}));
export const ChargeTheWorldIconWrapper2 = styled(Box)(({ theme }) => ({
  width: "35%",
  padding: "0 24px",
  [theme.breakpoints.down("md")]: {
    padding: "0 16px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0 8px",
  },
}));
export const ChargeTheWorldIconWrapper3 = styled(Box)(({ theme }) => ({
  width: "25%",
  padding: "0 60px",
  [theme.breakpoints.down("md")]: {
    padding: "0 16px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0 8px",
  },
  "& img": {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));
export const ChangeTheWorldIconCaption = styled(Typography)(({ theme }) => ({
  fontFamily: PrimaryFont,
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "24px",
  lineHeight: "27px",
  textAlign: "center",
  color: color1,
  paddingTop: "10px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "20px",
    lineHeight: "24px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
    lineHeight: "20px",
  },
}));

// What we have
export const WhatWeHaveBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: "106px 0",
  [theme.breakpoints.down("md")]: {
    padding: "80px 0px",
  },
}));

export const WhatWeHaveTitle = styled(Typography)(({ theme }) => ({
  fontFamily: PrimaryFont,
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "48px",
  lineHeight: "54px",
  textAlign: "center",
  color: color2,
  [theme.breakpoints.down("md")]: {
    fontSize: "42px",
    lineHeight: "48px",
    padding: "0 20px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "36px",
    lineHeight: "42px",
  },
}));

export const WhatWeHaveContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "68px 120px 63px 120px",
  [theme.breakpoints.down("lg")]: {
    padding: "68px 60px 63px 60px",
    gap: "16px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "40px 20px",
    gap: "12px",
    flexWrap: "wrap",
  },
  "& div": {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "calc(50% - 6px)",
    },
    "& img": {
      [theme.breakpoints.down("md")]: {
        maxWidth: "60px",
      },
    },
  },
  "& p": {
    fontFamily: PrimaryFont,
    fontStyle: "normal",
    fontSize: "32px",
    lineHeight: "36px",
    textAlign: "center",
    color: color2,
    margin: "16px 0 0 0",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      lineHeight: "24px",
    },
  },
}));

// Footer
export const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundImage:
    "url(assets/welcome/cheerful-woman-straw-hat-having-fun-stretches-hands-camera.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "716px",
  position: "relative",
  textAlign: "center",
  "& button": {
    maxWidth: "277px",
    margin: "0 auto",
  },
}));

export const FooterContentContainer = styled(Box)(({ theme }) => ({
  background: "rgba(35, 19, 0, 0.65)",
  display: "flex",
  flexDirection: "column",
  maxWidth: "620px",
  height: "calc(100% - 36px)",
  justifyContent: "center",
  marginLeft: "auto",
  marginRight: "109px",
  [theme.breakpoints.down("md")]: {
    height: "calc(100% - 172px)",
    margin: 'auto',
    maxWidth: "92%",
  },
}));

export const FooterContentTtile = styled(Typography)(({ theme }) => ({
  fontFamily: PrimaryFont,
  fontstyle: "normal",
  fontSize: "40px",
  lineheight: "45px",
  color: color1,
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
    lineHeight: "30px",
  },
}));

export const FooterContentHeading = styled(Typography)(({ theme }) => ({
  fontFamily: PrimaryFont,
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "48px",
  lineHeight: "54px",
  textAlign: "center",
  color: color1,
  padding: "8px 0 32px 0",
  [theme.breakpoints.down("sm")]: {
    fontSize: "36px",
    lineHeight: "42px",
  },
}));
export const FooterContentDescription = styled(Typography)(({ theme }) => ({
  fontFamily: PrimaryFont,
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "24px",
  lineHeight: "27px",
  textAlign: "center",
  color: color1,
  padding: "0 100px 48px 100px",
  [theme.breakpoints.down("md")]: {
    padding: "0 20px 24px 20px",
    fontSize: "18px",
    lineHeight: "22px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    lineHeight: "18px",
  },
}));
export const Footer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "36px",
  background: "rgba(35, 19, 0, 0.65)",
  [theme.breakpoints.down("md")]: {
    height: "auto",
  },
  "& nav": {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 100px",
    [theme.breakpoints.down("lg")]: {
      padding: "8px 20px",
    },
    [theme.breakpoints.down("md")]: {
      flexFlow: "column",
      gap: "4px",
    },
    "& a": {
      textDecoration: "none",
      fontFamily: PrimaryFont,
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "14px",
      lineHeight: "16px",
      color: "#FFF7D4",
      [theme.breakpoints.down("lg")]: {
        fontSize: "12px",
      },
    },
  },
}));

// Custom Link
export const CustomLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "white",
}));
