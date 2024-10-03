import { WALLET_ROUTE, PROFILE_ROUTE, SURVEY_ROUTE } from "./constants";
import { Icon } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { MdAccountBox } from "react-icons/md";
import WalletIcon from '@mui/icons-material/Wallet';

export const baseConfig = {
  projectLink: SURVEY_ROUTE,
  docsRepositoryBase: "",
  titleSuffix: "",
  search: true,
  header: true,
  headerText: "Nomadic Insights",
  footer: false,
  footerText: (
    <>
      {/* <span>
        © MIT {new Date().getFullYear()}, Made with ❤️ by {""}
        <a href="https://github.com/mrtzdev" target="_blank" rel="noreferrer">
          Mrtzdev
        </a>
      </span> */}
    </>
  ),

  logo: (
    <>
      <img
        src={process.env.PUBLIC_URL + "/logo.png"}
        alt="logo"
        width="30"
        height="22"
      />
    </>
  ),
};

/// Navigation sidebar
export const appNavs = [
  {
    eventKey: "survey",
    icon: <Icon><Edit /></Icon>,
    title: "Surveys",
    to: SURVEY_ROUTE,
  },
  // {
  //   eventKey: "tables",
  //   icon: <Icon as={MdOutlineTableChart} />,
  //   title: "Tables",
  //   to: TABLE_ROUTE,
  //   children: [
  //     {
  //       eventKey: "basic-table",
  //       title: "Basic Table",
  //       to: TABLE_ROUTE,
  //     },
  //     {
  //       eventKey: "users",
  //       title: "Users Table",
  //       to: USER_TABLE_ROUTE,
  //     },
  //   ],
  // },
  // {
  //   eventKey: "forms",
  //   icon: <Icon as={MdModeEditOutline} />,
  //   title: "Forms",
  //   to: FORMS_ROUTE,
  //   children: [
  //     {
  //       eventKey: "form-basic",
  //       title: "Basic",
  //       to: FORMS_ROUTE,
  //     },
  //     {
  //       eventKey: "form-wizard",
  //       title: "Edit Form",
  //       to: EDIT_FORM_ROUTE,
  //     },
  //   ],
  // },
 
  {
    eventKey: "wallet",
    icon: <Icon><WalletIcon /></Icon>,
    title: "Wallet",
    to: WALLET_ROUTE,
  },
  {
    eventKey: "profile",
    icon: <Icon><MdAccountBox /></Icon>,
    title: "Profile",
    to: PROFILE_ROUTE,
  },
];
