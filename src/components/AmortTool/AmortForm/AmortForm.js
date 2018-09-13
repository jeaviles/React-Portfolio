import React from "react";

import DatePicker from "../../../UI/DatePicker/DatePicker";
import "./AmortForm.css";

const amortForm = props => {
  return (
    <form onSubmit={props.submit}>
      <div className="AmortForm">
        <div>
          <label name="loanAmt">Loan Amount($)</label>
          <br />
          <input
            type="number"
            name="loanAmt"
            value={props.loanAmt}
            min="0.01"
            max="100000000"
            step="any"
            onChange={props.inputChanged}
            required={true}
          />
        </div>
        <div>
          <label name="intRate">Interest Rate(%)</label>
          <br />
          <input
            type="number"
            name="intRate"
            min="0.0001"
            max="50"
            step="any"
            value={props.intRate}
            onChange={props.inputChanged}
            required={true}
          />
        </div>
        <div>
          <label name="numMonths">Loan Period(Months)</label>
          <br />
          <input
            type="number"
            name="numMonths"
            min="1"
            max="720"
            step="1"
            value={props.numMonths}
            onChange={props.inputChanged}
            required={true}
          />
        </div>
        <div>
          <label name="payDate">First Pay Date (Click Calendar)</label>
          <br />
          <input
            type="text"
            name="payDate"
            value={props.payDate}
            disabled={true}
          />
          <span
            className="fa fa-calendar fa-lg"
            style={{ cursor: "pointer" }}
            onClick={props.showHandler}
          />
          <DatePicker
            show={props.show}
            click={props.datePickerHandler}
            year={props.year}
          />
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </div>
    </form>
  );
};

export default amortForm;
