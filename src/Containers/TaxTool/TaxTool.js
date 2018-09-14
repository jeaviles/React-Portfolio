import React, { Component } from "react";

// import TaxToolForm from "../../components/TaxTool/TaxToolForm/TaxToolForm";

import TaxHeatMap from "../../components/TaxTool/TaxPlots/TaxHeatMap/TaxHeatMap";
import TaxBarChart from "../../components/TaxTool/TaxPlots/TaxBarChart/TaxBarChart";
import TaxUSAMap from "../../components/TaxTool/TaxPlots/TaxUSAMap/TaxUSAMap";
import TaxToolForm from "../../components/TaxTool/TaxToolForm/TaxToolForm.js";

class TaxTool extends Component {
  state = {};
  render() {
    return (
      <div className="TaxTool">
        <h1>2018 USA Tax Charts</h1>
        <div className="PlotContainer">
          <TaxBarChart />
        </div>
        <TaxToolForm />
        <p className="Disclaimer">Disclaimer</p>
      </div>
    );
  }
}

export default TaxTool;
