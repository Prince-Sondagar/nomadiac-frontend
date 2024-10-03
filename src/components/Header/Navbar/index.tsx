// Packages Block
import * as React from "react";
import { Divider, Drawer, IconButton, Box, AppBar, Icon } from "@mui/material";
import { List, CssBaseline } from "@mui/material";
import { Typography, Toolbar, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { baseConfig } from "../../../config";
import { CustomLink } from "../../../theme/styledComponents";
import HeaderNav from "../HeaderNav";
import { HomePageLogo } from "../../Logo/HomePageLogo";
import SidebarWallet from "../../SideBar/SidebarWallet";
import { Edit } from "@mui/icons-material";
import { MdAccountBox } from "react-icons/md";
import WalletIcon from "@mui/icons-material/Wallet";
import { Link, NavLink } from "react-router-dom";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
let activeClassName = "active";

const navItems = [
  { link: "/survey", title: "Suveys", icon: <Edit /> },
  { link: "/profile", title: "Profile", icon: <MdAccountBox /> },
  { link: "/wallet", title: "Wallet", icon: <WalletIcon /> },
];

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Sidebar navigation drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to="/" style={{ textDecoration: "none", color: "#edbb5f" }}>
          {baseConfig.headerText}
        </Link>
      </Typography>
      <Divider />
      <SidebarWallet />
      <Box className="sidebar-nav">
        <List>
          {navItems.map(({ link, title, icon }) => (
            <li key={title}>
              <NavLink
                to={link}
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                <Icon>{icon}</Icon>
                {title}
              </NavLink>
            </li>
          ))}
        </List>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className="header-menu"
        component="nav"
        sx={{ background: "#edbb5f", height: "70px" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ flexGrow: 1 }}>
            <CustomLink to="/">
              <HomePageLogo />
            </CustomLink>
          </Typography>
          <Box>
            <HeaderNav />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          className="sidebar-drawer"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
