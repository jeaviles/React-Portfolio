import React from "react";

import "./Button.css";

const button = props => {
  return (
    <a href={props.link}>
      <button className="Button">{props.children}</button>
    </a>
  );
};

export default button;
