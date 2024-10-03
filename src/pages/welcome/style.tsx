import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  main_nav: {
    background: "white",
    color: "black",
    "& p": {
      fontSize: "14px",
      fontFamily: "'Poppins', sans-serif !important",
    }
  },
  nav_container: {
    alignItems: "end",
    maxWidth: "1080px",
    "& .MuiToolbar-root": {
      minHeight: "80px",
    }
  },
  // banner
  banner: {
    marginBottom: "100px",
    backgroundImage:
      "url(https://nomadicinsights.com/wp-content/uploads/2023/01/consutant-01.jpg)",
    height: "708.29px",
    transform: "translate(0px, 72.1156px)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundSize: "cover",
    width: "100%",
  },

  //   what we offer
  we_offer: {
    height: "auto",
    width: "86%",
    boxShadow: "-80px 50px 0px 0px rgba(12,12,12,0.03)",
    "@media(max-width: 1199px)": {
      width: "70%",
    },
    "@media(max-width: 599px)": {
      width: "90%",
    },
  },
  et_pb_text_0: {
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: "14px",
    color: "#edbb5f!important",
    letterSpacing: "1px",
    lineHeight: "2em",
    fontFamily: "'Poppins', sans-serif",
  },
  et_pb_text_1: {
    fontWeight: "700",
    fontSize: "38px",
    letterSpacing: "3px",
    lineHeight: "1.4em",
    color: "#333",
    marginTop: 0,
    marginBottom: '50px',
    paddingBottom: "50px",
    position: "relative",
    "@media(max-width: 1440px)": {
      fontSize: "34px",
    },
    "@media(max-width: 599px)": {
      fontSize: "26px",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      bottom: 0,
      left: 0,
      height: "2px",
      width: "60px",
      background: "#edbb5f",
    }
  },
  et_pb_text_inner: {
    fontSize: '16px',
    fontWeight: "500",
    letterSpacing: "3px",
    lineHeight: "1.8em",
    fontFamily: "'Poppins', sans-serif",
    color: "#666",
    "& ul": {
      marginTop: "50px",
      "@media(max-width: 1440px)": {
        marginTop: "30px",
      },
    }
  },
  et_pb_text_2: {
    fontSize: "14px",
    letterSpacing: "1px",
    lineHeight: "1.4em",
    paddingLeft: '40px'
  },
  offer_Cards: {
    fontFamily: "Poppins",
    letterSpacing: "1px",
    lineHeight: "2em",
    paddingLeft: '40px',
    fontWeight: "300",
    "@media(max-width: 899px)": {
      paddingLeft: '0',
    },
  },
  charge_world: {
    height: "auto",
    width: "100%",
    boxShadow: "80px -50px 0px 0px rgba(12,12,12,0.03)"
  },

  //   footer
  footer_link: {
    textDecoration: "none !important",
    color: "white !important",
    fontSize: "14px !important",
    fontFamily: "'Poppins', sans-serif !important",
    "&:hover": {
      color: "#ffffffcc !important"
    }
  },
  navigation: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'end',
  },
  footer_btn: {
    backgroundColor: "white !important",
    fontSize: "12px !important",
    color: '#5f7d9c !important',
    borderRadius: "3px !important",
    border: '1px solid #5f7d9c !important',
    fontWeight: '600 !important',
    padding: '6px 30px !important'
  }
});
