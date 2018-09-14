import React from "react";
import "./Logo.css";

const logo = props => {
  return (
    <div
      className="Logo"
      style={{ height: props.height }}
      onClick={props.navigate}
      id="LandingPage"
    >
      <div id="LandingPage">
        <span id="LandingPage" className="LogoJ">
          J
        </span>
        <span id="LandingPage" className="LogoA">
          A
        </span>
      </div>
    </div>
  );
};

export default logo;
