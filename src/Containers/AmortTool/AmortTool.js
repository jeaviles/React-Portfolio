import React, { Component } from "react";

import { columns } from "./AmortHeaders";
import amortDataGenerator from "./AmortDataGenerator";
import amortPlotDataGenerator from "./AmortPlotDataGenerator";
import ReactTable from "react-table";
import Plot from "react-plotly.js";
import AmortForm from "../../components/AmortTool/AmortForm/AmortForm";

import "./ReactTable/ReactTable.css";

const initialDate = new Date(Date.now());
const initialData = amortDataGenerator(300000, 5, 360, new Date(Date.now()));
const initialPlotData = amortPlotDataGenerator(initialData);

class AmortTool extends Component {
  state = {
    loanAmt: 300000,
    intRate: 5,
    numMonths: 360,
    firstDate: initialDate,
    data: initialData,
    plotData: initialPlotData
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
    console.log(this.state);

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

  render() {
    return (
      <div style={{ width: "85%", margin: "auto", textAlign: "center" }}>
        <h1>Amortization Schedule Tool</h1>
        <Plot
          style={{ width: "100%" }}
          data={this.state.plotData}
          layout={{
            title: "Amortization Graph",
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
          submit={this.submitHandler}
          inputChanged={this.inputChangeHandler}
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
