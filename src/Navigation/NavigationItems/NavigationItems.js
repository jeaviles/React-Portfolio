import React from "react";
import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => {
  let classes = "NavigationItems";
  if (props.DesktopOnly) {
    classes = ["NavigationItems", "DesktopOnly"].join(" ");
  }

  return (
    <React.Fragment>
      <ul className={classes}>
        <NavigationItem navigate={props.navigate}>
          Projects <span className="fa fa-th fa-lg" />
        </NavigationItem>
        <NavigationItem link="mailto:joseph_aviles@hotmail.com">
          Contact Me <span className="fa fa-envelope-o fa-lg" />
        </NavigationItem>
        <NavigationItem link="https://www.linkedin.com/in/joseph-aviles-78590494">
          Linked <span className="fa fa-linkedin-square fa-lg" />
        </NavigationItem>
        <NavigationItem link="https://github.com/jeaviles">
          GitHub <span className="fa fa-github-square fa-lg" />
        </NavigationItem>
      </ul>
    </React.Fragment>
  );
};

export default navigationItems;
