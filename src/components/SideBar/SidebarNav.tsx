import "./SideBar.css";
import { NavLink } from "react-router-dom";
import { Icon } from "@mui/material";
import SidebarWallet from "./SidebarWallet";
export interface NavItemData {
  eventKey?: string;
  title?: string;
  icon?: JSX.Element;
  to?: string;
  target?: string;
  children?: NavItemData[];
}

export interface SidebarNavProps {
  navs?: NavItemData[];
  open: boolean;
}

const SideBarNav = (props: SidebarNavProps) => {
  const { navs, open } = props;
  let activeClassName = "active";

  return (
    <div
      className="sidebar-nav"
      style={{ width: open ? "400px" : "100px"}}
    >
      <SidebarWallet />
      <ul >
        {navs?.map((item) => {
          const { children, ...rest } = item;

          if (children) {
            return (
              <li key={item.eventKey}>
                <NavLink
                  to={item.to as string}
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  <Icon>{item.icon}</Icon>
                  {open ? item.title : ""}
                </NavLink>
                <ul>
                  {children.map((child) => {
                    return (
                      <li key={child.eventKey}>
                        <NavLink
                          to={child.to as string}
                          className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                          }
                        >
                          {open ? child.title : ""}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          }

          if (rest.target === "_blank") {
            return <></>;
          }

          return (
            <li key={item.eventKey}>
              <NavLink
                to={item.to as string}
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                <Icon>{item.icon}</Icon>
                {open ? item.title : ""}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBarNav;
