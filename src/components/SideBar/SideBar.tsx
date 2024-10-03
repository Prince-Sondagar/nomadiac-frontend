import  { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./SideBar.css";
import { appNavs } from "../../config";
import SideBarNav from "./SidebarNav";

type IsideBar= {
  open: boolean
}

const SideBar = ({open}:IsideBar) => {
  const [expand, setExpand] = useState(false);

  let location = useLocation();

  useEffect(() => {
    setExpand(false);
  }, [location]);

  return (
    <>
      <div className={"sidebar " + (expand ? "visible" : "")}>
        <SideBarNav navs={appNavs} open={open} />
      </div>
    </>
  );
};

export default SideBar;
