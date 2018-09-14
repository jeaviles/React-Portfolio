import React from "react";
import "./NavigationItem.css";

const navigationItems = props => {
  return (
    <React.Fragment>
      <li className="NavigationItem">
        <a
          style={{ color: "#ecebe8" }}
          href={props.link}
          onClick={props.navigate}
          id={props.page}
        >
          {props.children}
        </a>
      </li>
    </React.Fragment>
  );
};

export default navigationItems;
