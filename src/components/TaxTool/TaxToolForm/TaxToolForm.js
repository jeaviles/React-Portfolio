import React from "react";

import "./TaxToolForm.css";

const taxToolForm = props => {
  let disabled = false;
  if (props.setting === "Default") {
    disabled = true;
  }
  return (
    <div className="TaxToolForm" style={{ marginLeft: props.margin }}>
      <div>
        <label name="setting">Setting:</label>
        <br />
        <select name="setting" value={props.setting} onChange={props.updated}>
          <option value="Default">Default</option>
          <option value="Custom">Custom</option>
        </select>
      </div>
      <div>
        <label name="mode">Mode:</label>
        <br />
        <select name="mode" value={props.mode} onChange={props.updated}>
          <option value="Rates">Rates</option>
          <option value="Dollars">Dollars</option>
        </select>
      </div>
      <div hidden={disabled}>
        <label name="type">Type:</label>
        <br />
        <select name="type" value={props.type} onChange={props.updated}>
          <option value="Map">Map</option>
          <option value="Bar">Bar</option>
        </select>
      </div>
      <div hidden={disabled}>
        <label name="income">Income($):</label>
        <br />
        <input
          type="number"
          name="income"
          value={props.income}
          min="0.01"
          max="1000000000000000"
          step="any"
          required={true}
          onChange={props.updated}
          id="income"
        />
      </div>
    </div>
  );
};

export default taxToolForm;
