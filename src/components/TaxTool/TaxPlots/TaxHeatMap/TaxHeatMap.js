import React from "react";

import Plot from "react-plotly.js";
import { defaultDollarsHeatMap } from "./defaultDollarsHeatMap";
import { defaultRatesHeatMap } from "./defaultRatesHeatMap";

const taxHeatMap = props => {
  let plotData = null;
  let chartTitle = null;

  if (props.mode === "Dollars") {
    chartTitle = "2018 US Dollars Levied by State";
    plotData = defaultDollarsHeatMap;
  } else {
    chartTitle = "2018 US Effective Tax Rates by State";
    plotData = defaultRatesHeatMap;
  }

  return (
    <div>
      <Plot
        data={plotData}
        layout={{
          title: chartTitle,
          width: props.windowWidth,
          annotations: [],
          xaxis: {
            ticks: "",
            side: "bottom"
          },
          yaxis: {
            title: "Income ($)",
            ticks: "",
            ticksuffix: " ",
            autosize: true
          }
        }}
      />
    </div>
  );
};

export default taxHeatMap;
