import React from "react";

import CardPicture from "../../../assets/images/Landing.png";
import "../../../UI/Card/Card.css";
import ProjectCard from "../../../UI/Card/ProjectCard";

const landingCard = () => {
  return (
    <div className="CardContainer">
      <img className="CardImage" src={CardPicture} alt="" />
      <ProjectCard title="Personal Website" pubDate={"Sep. 5, 2018"}>
        I created this website to display projects that I am currently working
        on. The website was created with React, Javascript & CSS.
      </ProjectCard>
    </div>
  );
};

export default landingCard;
