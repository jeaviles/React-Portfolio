import React from "react";

import "./Landing.css";
import ProfilePic from "../../assets/images/Joseph.jpg";
import Button from "../../UI/Button/Button";
import CardList from "../../UI/CardList/CardList";

const landing = props => {
  let projects = null;
  if (props.windowWidth > 1099) {
    projects = (
      <div className="col CardListCol">
        <CardList navigate={props.navigate} />
      </div>
    );
  }

  return (
    <div className="DesktopLanding">
      <div className="col">
        <div className="Landing">
          <div className="ProfilePicCrop">
            <img src={ProfilePic} className="ProfilePic" alt="" />
          </div>
          <p>
            <strong>Joseph Aviles</strong>
          </p>
          <p>
            I am a Software Development Engineer at Clearwater Analytics in Boise,
            Idaho. I enjoy creating tools, automating tasks and learning new
            things.
          </p>
          <Button link="mailto:joseph_aviles@hotmail.com">
            Contact Me <span className="fa fa-envelope-o fa-lg" />
          </Button>
        </div>
      </div>
      {projects}
    </div>
  );
};

export default landing;
