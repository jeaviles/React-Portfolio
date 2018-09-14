import React from "react";

import "./TaxToolForm.css";

const taxToolForm = props => {
  return (
    <div className="TaxToolForm">
      <div>
        <label name="setting">Setting:</label>
        <br />
        <select name="setting">
          <option value="default">Default</option>
          <option value="custom">Custom</option>
        </select>
      </div>
      <div>
        <label name="chart">Type:</label>
        <br />
        <select name="chart">
          <option value="map">Map</option>
          <option value="custom">Bar</option>
        </select>
      </div>
      <div>
        <label name="income">Income($):</label>
        <br />
        <input
          type="number"
          name="income"
          value="30000"
          min="0.01"
          max="1000000000000000"
          step="any"
          required={true}
        />
      </div>
    </div>
  );
};

export default taxToolForm;
