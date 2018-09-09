import React from "react";

import "./Landing.css";
import ProfilePic from "../../assets/images/Joseph.jpg";
import Button from "../../UI/Button/Button";

const landing = props => {
  return (
    <div className="Landing" style={{ marginBottom: "10px" }}>
      <div
        style={{
          margin: "auto",
          width: "95%",
          height: "95%",
          borderRadius: "50%",
          overflow: "hidden"
        }}
      >
        <img
          src={ProfilePic}
          style={{ width: "100%", height: "100%" }}
          alt=""
        />
      </div>
      <p>
        <strong>Joseph Aviles</strong>
      </p>
      <p>
        I am a Normalization Engineer at Clearwater Analytics in Boise, Idaho. I
        enjoy creating tools, automating tasks and learning new things.
      </p>
      <Button link="mailto:joseph_aviles@hotmail.com">
        Contact Me <span className="fa fa-envelope-o fa-lg" />
      </Button>
    </div>
  );
};

export default landing;
