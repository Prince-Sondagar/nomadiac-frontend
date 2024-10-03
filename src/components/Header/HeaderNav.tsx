import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PROFILE_ROUTE } from "../../constants";
import { AuthContext } from "../../contexts/authContext";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const HeaderNav = () => {
  const navigate = useNavigate();
  const {
    handleLogout,
    //  currentUser
  } = useContext(AuthContext);
  // const { firstName = "" } = currentUser || {}
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  // const nameInitial = firstName?.slice(0, 1)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <div className="header-avatar">
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
        </div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
      >
        <MenuItem
          onClick={() => {
            navigate(PROFILE_ROUTE);
            setAnchorEl(null);
          }}
        >
          Profile
        </MenuItem>
        <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default HeaderNav;
