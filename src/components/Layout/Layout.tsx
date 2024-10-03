import { FC, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { baseConfig } from "../../config";
import SideBar from "../SideBar";
import Header from "../Header";
import Footer from "../Footer";
import "./Layout.css";
import { Box } from "@mui/material";
import { AuthContext } from "../../contexts/authContext";

const Layout: FC = () => {
  const [open, setOpen] = useState(true)
  const { currentPanelist } = useContext(AuthContext);
  const { id } = currentPanelist || {};

  return (
    <Box className="layout-container">
      {baseConfig.header &&
        <Header open={open as boolean} setOpen={setOpen} />
      }

      <SideBar open={open} />

      {id &&
        <img src={`https://sb.scorecardresearch.com/p?c1=14&c2=38092974&c3=${id}&c4=s&cj=1`} alt="tags" />
      }

      <Box className="page-container" style={{ paddingLeft: open ? "400px" : "100px" }}>
        <Box px={3}>
          <Outlet />
        </Box>
      </Box>

      {baseConfig.footer &&
        <Footer />
      }
    </Box>
  );
};

export default Layout;
