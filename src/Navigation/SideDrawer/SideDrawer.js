import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";
import BackDrop from "../../UI/BackDrop/BackDrop";

const sideDrawer = props => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.showDrawer) {
    attachedClasses = ["SideDrawer", "Open"];
  }

  return (
    <React.Fragment>
      <BackDrop show={props.showDrawer} clicked={props.clicked} />
      <div className={attachedClasses.join(" ")}>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
