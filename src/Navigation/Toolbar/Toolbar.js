import React from "react";

import Logo from "../../Logo/Logo";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import SideDrawer from "../SideDrawer/SideDrawer";
import "./Toolbar.css";

const toolbar = props => {
  return (
    <header className="Toolbar">
      <Logo height="80%" />
      <DrawerToggle clicked={props.toggleSideDrawer} />
      <SideDrawer
        clicked={props.toggleSideDrawer}
        showDrawer={props.showDrawer}
      />
    </header>
  );
};

export default toolbar;
