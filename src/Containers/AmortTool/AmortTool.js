import React, { Component } from "react";

import { columns } from "./AmortHeaders";
import amortDataGenerator, { formatDateString } from "./AmortDataGenerator";
import amortPlotDataGenerator from "./AmortPlotDataGenerator";
import ReactTable from "react-table";
import AmortPlot from "../../components/AmortTool/AmortPlot/AmortPlot";
import AmortForm from "../../components/AmortTool/AmortForm/AmortForm";

import "./ReactTable/ReactTable.css";

const initialDate = new Date(Date.now());
const initialData = amortDataGenerator(300000, 5, 360, new Date(Date.now()));
const initialPlotData = amortPlotDataGenerator(initialData);
const initialYear = initialDate.getFullYear();
const initialMonth = initialDate.getMonth();

const monthMap = {
  JAN: 0,
  FEB: 1,
  MAR: 2,
  APR: 3,
  MAY: 4,
  JUN: 5,
  JUL: 6,
  AUG: 7,
  SEP: 8,
  OCT: 9,
  NOV: 10,
  DEC: 11
};

class AmortTool extends Component {
  state = {
    loanAmt: 300000,
    intRate: 5,
    numMonths: 360,
    firstDate: initialDate,
    data: initialData,
    plotData: initialPlotData,
    showDatePicker: false,
    year: initialYear,
    month: initialMonth
  };

  inputChangeHandler = event => {
    const target = event.target;
    const name = target.name;
    const value = name !== "firstDate" ? Number(target.value) : null;

    this.setState({
      [name]: value
    });
  };

  submitHandler = event => {
    event.preventDefault();

    const updatedData = amortDataGenerator(
      this.state.loanAmt,
      this.state.intRate,
      this.state.numMonths,
      this.state.firstDate
    );

    const updatedPlotData = amortPlotDataGenerator(updatedData);

    let newState = { ...this.state };

    newState.data = updatedData;
    newState.plotData = updatedPlotData;

    this.setState(newState);
  };

  showDatePickerHandler = () => {
    this.setState(prevState => {
      return { showDatePicker: !prevState.showDatePicker };
    });
  };

  datePickerHandler = event => {
    let newMonth = null;
    let newYear = this.state.year;

    if (event.target.innerText) {
      newMonth = event.target.innerText;
      this.showDatePickerHandler();
    } else {
      if (event.target.className.includes("angle-left")) {
        newYear -= 1;
      } else if (event.target.className.includes("angle-right")) {
        newYear += 1;
      } else if (event.target.className.includes("double-left")) {
        newYear -= 5;
      } else if (event.target.className.includes("double-right")) {
        newYear += 5;
      }
      if (newYear < 0) {
        newYear = 0;
      }
    }

    let updatedDate = new Date(
      Number(newYear),
      this.state.firstDate.getMonth(),
      15
    );

    if (newMonth) {
      updatedDate = new Date(Number(newYear), monthMap[newMonth], 15);
    }

    this.setState(prevState => {
      return {
        year: newYear,
        month: newMonth ? newMonth : prevState.month,
        firstDate: updatedDate
      };
    });
  };

  render() {
    const dynamicWidth = this.props.windowWidth + "px";
    return (
      <div style={{ width: "85%", margin: "auto", textAlign: "center" }}>
        <h1>Amortization Schedule Tool</h1>
        <div style={{ width: { dynamicWidth }, overflow: "hidden" }}>
          <AmortPlot
            plotWidth={this.props.windowWidth * 0.83}
            plotData={this.state.plotData}
          />
        </div>
        <AmortForm
          loanAmt={this.state.loanAmt}
          intRate={this.state.intRate}
          numMonths={this.state.numMonths}
          payDate={formatDateString(this.state.firstDate)}
          submit={this.submitHandler}
          inputChanged={this.inputChangeHandler}
          show={this.state.showDatePicker}
          showHandler={this.showDatePickerHandler}
          year={this.state.year.toString()}
          datePickerHandler={this.datePickerHandler}
        />
        <ReactTable
          style={{
            height: "500px", // This will force the table body to overflow and scroll, since there is not enough room
            width: { dynamicWidth }
          }}
          columns={columns}
          data={this.state.data}
          defaultPageSize={20}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default AmortTool;
