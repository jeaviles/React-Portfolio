import React from "react";
import "./BackDrop.css";

const backDrop = props => {
  return props.show ? (
    <div className="BackDrop" onClick={props.clicked}>
      <span className="BackDropX fa fa-times-rectangle fa-lg" />
    </div>
  ) : null;
};

export default backDrop;
