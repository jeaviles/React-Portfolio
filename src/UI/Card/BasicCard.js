import React from "react";

import "./Card.css";

const basicCard = props => {
  return <div className="Card">{props.children}</div>;
};

export default basicCard;
