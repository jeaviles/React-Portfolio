import React from "react";

import "./DatePicker.css";

const datePicker = props => {
  return props.show ? (
    <div>
      <div className="DatePicker Card">
        <div className="YearContainer">
          <div className="Year Card">
            <i className=" fa fa-angle-double-left fa-lg" />
          </div>
          <div className="Year Card">
            <i className=" fa fa-angle-left fa-lg" />
          </div>
          <div className="Year">2018</div>
          <div className="Year Card">
            <i className=" fa fa-angle-right fa-lg" />
          </div>
          <div className="Year Card">
            <i className=" fa fa-angle-double-right fa-lg" />
          </div>
        </div>
        <div className="Month Card" onClick={props.showHandler}>
          JAN
        </div>
        <div className="Month Card" onClick={props.showHandler}>
          FEB
        </div>
        <div className="Month Card" onClick={props.showHandler}>
          MAR
        </div>
        <div className="Month Card" onClick={props.showHandler}>
          APR
        </div>
        <div className="Month Card" onClick={props.showHandler}>
          MAY
        </div>
        <div className="Month Card" onClick={props.showHandler}>
          JUN
        </div>
        <div className="Month Card" onClick={props.showHandler}>
          JUL
        </div>
        <div className="Month Card" onClick={props.showHandler}>
          AUG
        </div>
        <div className="Month Card" onClick={props.showHandler}>
          SEP
        </div>
        <div className="Month Card" onClick={props.showHandler}>
          OCT
        </div>
        <div className="Month Card" onClick={props.showHandler}>
          NOV
        </div>
        <div className="Month Card" onClick={props.showHandler}>
          DEC
        </div>
      </div>
    </div>
  ) : null;
};
export default datePicker;
