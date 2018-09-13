import React from "react";

import "./DatePicker.css";

const datePicker = props => {
  return props.show ? (
    <div>
      <div className="DatePicker Card">
        <div className="YearContainer">
          <div className="Year Card double-left" onClick={props.click}>
            <span className=" fa fa-angle-double-left fa-lg" />
          </div>
          <div className="Year Card angle-left" onClick={props.click}>
            <span className=" fa fa-angle-left fa-lg" />
          </div>
          <div className="Year" style={{ cursor: "auto" }}>
            {props.year}
          </div>
          <div className="Year Card angle-right" onClick={props.click}>
            <span className=" fa fa-angle-right fa-lg" />
          </div>
          <div className="Year Card double-right" onClick={props.click}>
            <span className=" fa fa-angle-double-right fa-lg" />
          </div>
        </div>
        <div className="Month Card" onClick={props.click}>
          JAN
        </div>
        <div className="Month Card" onClick={props.click}>
          FEB
        </div>
        <div className="Month Card" onClick={props.click}>
          MAR
        </div>
        <div className="Month Card" onClick={props.click}>
          APR
        </div>
        <div className="Month Card" onClick={props.click}>
          MAY
        </div>
        <div className="Month Card" onClick={props.click}>
          JUN
        </div>
        <div className="Month Card" onClick={props.click}>
          JUL
        </div>
        <div className="Month Card" onClick={props.click}>
          AUG
        </div>
        <div className="Month Card" onClick={props.click}>
          SEP
        </div>
        <div className="Month Card" onClick={props.click}>
          OCT
        </div>
        <div className="Month Card" onClick={props.click}>
          NOV
        </div>
        <div className="Month Card" onClick={props.click}>
          DEC
        </div>
      </div>
    </div>
  ) : null;
};
export default datePicker;
