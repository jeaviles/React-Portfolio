import React from "react";

import CardList from "../../UI/CardList/CardList";
import "./ProjectList.css";

const projectList = props => {
  return (
    <React.Fragment>
      <h1 className="ProjectList">Project List</h1>
      <div>
        <CardList navigate={props.navigate} />
      </div>
    </React.Fragment>
  );
};

export default projectList;
