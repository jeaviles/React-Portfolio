import React, { Component } from "react";

import { columns } from "./AmortHeaders";
import amortDataGenerator, { formatDateString } from "./AmortDataGenerator";
import amortPlotDataGenerator from "./AmortPlotDataGenerator";
import ReactTable from "react-table";
import Plot from "react-plotly.js";
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

    let updatedDate = new Date(
      Number(this.state.year),
      monthMap[this.state.month],
      15
    );

    const updatedData = amortDataGenerator(
      this.state.loanAmt,
      this.state.intRate,
      this.state.numMonths,
      updatedDate
    );

    const updatedPlotData = amortPlotDataGenerator(updatedData);

    let newState = { ...this.state };

    newState.data = updatedData;
    newState.plotData = updatedPlotData;
    newState.firstDate = updatedDate;

    this.setState(newState);
  };

  showDatePickerHandler = () => {
    this.setState(prevState => {
      return { showDatePicker: !prevState.showDatePicker };
    });
  };

  datePickerHandler = event => {
    if (event.target.innerText) {
      this.setState({ month: event.target.innerText });
      this.showDatePickerHandler();
    } else {
      let newYear = this.state.year;
      if (event.target.className.includes("angle-left")) {
        this.setState({ year: (newYear -= 1) });
      } else if (event.target.className.includes("angle-right")) {
        this.setState({ year: (newYear += 1) });
      } else if (event.target.className.includes("double-left")) {
        this.setState({ year: (newYear -= 5) });
      } else if (event.target.className.includes("double-right")) {
        this.setState({ year: (newYear += 5) });
      }
      if (newYear < 0) {
        this.setState({ year: 0 });
      }
    }
  };

  render() {
    return (
      <div style={{ width: "85%", margin: "auto", textAlign: "center" }}>
        <h1>Amortization Schedule Tool</h1>
        <Plot
          data={this.state.plotData}
          layout={{
            title: "Amortization Graph",
            autosize: true,
            showlegend: true,
            xaxis: {
              title: "Date"
            },
            yaxis: {
              title: "Dollars ($)"
            }
          }}
        />
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
            height: "500px" // This will force the table body to overflow and scroll, since there is not enough room
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
