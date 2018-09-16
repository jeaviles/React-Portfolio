import React from "react";

import TaxToolPicture from "../../../assets/images/TaxTool.png";
import "../../../UI/Card/Card.css";
import ProjectCard from "../../../UI/Card/ProjectCard";

const taxToolCard = props => {
  return (
    <div id="TaxTool" className="CardContainer" onClick={props.navigate}>
      <ProjectCard
        navigate={props.navigate}
        page="TaxTool"
        title="2018 USA Tax Charts"
        pubDate={"Sep. 15, 2018"}
      >
        This tool displays graphs for single USA 2018 taxes by state depending
        on user input. You can either see the taxes broken down by "effective
        tax rate" or "effective tax dollars".
      </ProjectCard>
      <img id="TaxTool" className="CardImage" src={TaxToolPicture} alt="" />
    </div>
  );
};

export default taxToolCard;
