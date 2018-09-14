import React from "react";

import CardPicture from "../../../assets/images/Amort.png";
import "../../../UI/Card/Card.css";
import ProjectCard from "../../../UI/Card/ProjectCard";

const amortCard = props => {
  return (
    <div id="AmortTool" className="CardContainer" onClick={props.navigate}>
      <ProjectCard
        navigate={props.navigate}
        page="AmortTool"
        title="Amortization Tool"
        pubDate={"Sep. 10, 2018"}
      >
        This tool creates an amortization schedule for mortgage loans. It also
        provides an interactive data visualization for analysis. I created it
        with React, Javascript, CSS & Plotlyjs.
      </ProjectCard>
      <img id="AmortTool" className="CardImage" src={CardPicture} alt="" />
    </div>
  );
};

export default amortCard;
