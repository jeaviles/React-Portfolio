import React from "react";

import CardPicture from "../../../assets/images/Landing.png";
import "../../../UI/Card/Card.css";
import ProjectCard from "../../../UI/Card/ProjectCard";

const landingCard = props => {
  return (
    <div id="LandingPage" className="CardContainer" onClick={props.navigate}>
      <ProjectCard
        page="LandingPage"
        title="Personal Website"
        pubDate={"Sep. 5, 2018"}
        navigate={props.navigate}
      >
        I created this website to display projects that I am currently working
        on. The website was created with React, Javascript & CSS.
      </ProjectCard>
      <img id="LandingPage" className="CardImage" src={CardPicture} alt="" />
    </div>
  );
};

export default landingCard;
