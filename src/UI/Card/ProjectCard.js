import React from "react";

import "./Card.css";

const projectCard = props => {
  return (
    <div className="CardBody">
      <u>{props.title}</u>
      <br />
      {props.children}
      <br />
      {props.pubDate}
    </div>
  );
};

export default projectCard;
