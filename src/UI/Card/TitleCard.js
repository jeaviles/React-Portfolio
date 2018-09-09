import React from "react";

import "./Card.css";

const titleCard = props => {
  return <div className="Card">{props.children}</div>;
};

export default titleCard;
