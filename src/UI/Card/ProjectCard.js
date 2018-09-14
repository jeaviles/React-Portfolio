import React from "react";

import "./Card.css";

const projectCard = props => {
  return (
    <div className="CardBody" id={props.page} onClick={props.navigate}>
      <h3 id={props.page}>
        <u id={props.page}>{props.title}</u>
      </h3>
      <p id={props.page}>{props.children}</p>
      <p id={props.page}>{props.pubDate}</p>
    </div>
  );
};

export default projectCard;
