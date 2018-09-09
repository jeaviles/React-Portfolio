import React from "react";

import "./Card.css";

const projectCard = props => {
  return <div className="Card">{props.children}</div>;
};

export default projectCard;
