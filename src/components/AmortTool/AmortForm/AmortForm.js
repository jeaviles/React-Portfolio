import React from "react";

import DatePicker from "../../../UI/DatePicker/DatePicker";

const amortForm = props => {
  return (
    <div>
      <form onSubmit={props.submit}>
        <label name="loanAmt">Loan Amount ($)</label>
        <input
          type="number"
          name="loanAmt"
          value={props.loanAmt}
          min="0.01"
          max="100000000"
          step="any"
          onChange={props.inputChanged}
          required="true"
        />

        <label name="intRate">Interest Rate (%)</label>
        <input
          type="number"
          name="intRate"
          min="0.0001"
          max="50"
          step="any"
          value={props.intRate}
          onChange={props.inputChanged}
          required="true"
        />

        <label name="numMonths">Loan Period (Months)</label>
        <input
          type="number"
          name="numMonths"
          min="1"
          max="720"
          step="1"
          value={props.numMonths}
          onChange={props.inputChanged}
          required="true"
        />

        <input type="submit" value="submit" />
      </form>

      <DatePicker />
    </div>
  );
};

export default amortForm;
