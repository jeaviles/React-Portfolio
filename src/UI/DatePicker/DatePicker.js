import React from "react";

import "./DatePicker.css";

const datePicker = props => {
  return (
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
        <div className="Month Card">JAN</div>
        <div className="Month Card">FEB</div>
        <div className="Month Card">MAR</div>
        <div className="Month Card">APR</div>
        <div className="Month Card">MAY</div>
        <div className="Month Card">JUN</div>
        <div className="Month Card">JUL</div>
        <div className="Month Card">AUG</div>
        <div className="Month Card">SEP</div>
        <div className="Month Card">OCT</div>
        <div className="Month Card">NOV</div>
        <div className="Month Card">DEC</div>
      </div>
    </div>
  );
};
export default datePicker;
