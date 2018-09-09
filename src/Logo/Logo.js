import React from "react";
import "./Logo.css";

const logo = props => {
  return (
    <div className="Logo" style={{ height: props.height }}>
      <div className="Letters">
        <span className="LogoJ">J</span>
        <span className="LogoA">A</span>
      </div>
    </div>
  );
};

export default logo;
