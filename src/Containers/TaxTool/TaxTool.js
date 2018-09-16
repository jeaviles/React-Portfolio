import React, { Component } from "react";

// import TaxToolForm from "../../components/TaxTool/TaxToolForm/TaxToolForm";

import TaxHeatMap from "../../components/TaxTool/TaxPlots/TaxHeatMap/TaxHeatMap";
import TaxBarChart from "../../components/TaxTool/TaxPlots/TaxBarChart/TaxBarChart";
import TaxUSAMap from "../../components/TaxTool/TaxPlots/TaxUSAMap/TaxUSAMap";
import TaxToolForm from "../../components/TaxTool/TaxToolForm/TaxToolForm.js";

class TaxTool extends Component {
  state = {
    setting: "Default",
    type: "Map",
    income: "30000",
    mode: "Rates"
  };

  formChangeHandler = event => {
    let updatedState = { ...this.state };
    updatedState[event.target.name] = event.target.value;
    this.setState(updatedState);
  };

  render() {
    let chart = null;
    if (this.state.setting === "Default") {
      chart = (
        <TaxHeatMap
          mode={this.state.mode}
          windowWidth={this.props.windowWidth}
        />
      );
    } else {
      if (this.state.type === "Map") {
        chart = (
          <TaxUSAMap
            income={Number(this.state.income)}
            mode={this.state.mode}
            windowWidth={this.props.windowWidth}
          />
        );
      } else {
        chart = (
          <TaxBarChart
            income={Number(this.state.income)}
            mode={this.state.mode}
            windowWidth={this.props.windowWidth}
          />
        );
      }
    }
    return (
      <div className="TaxTool">
        <h1 style={{ textAlign: "center" }}>2018 USA Single Tax Charts</h1>
        <div className="PlotContainer">{chart}</div>
        <TaxToolForm
          setting={this.state.setting}
          type={this.state.type}
          income={this.state.income}
          mode={this.state.mode}
          updated={this.formChangeHandler}
        />
        <p style={{ fontSize: "8pt" }}>
          Disclaimer: Data collected for educational purposes. Some states have
          more complicated tax structures than simple brackets.
        </p>
      </div>
    );
  }
}

export default TaxTool;
