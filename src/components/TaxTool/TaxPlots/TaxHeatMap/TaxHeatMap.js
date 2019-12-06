import React from "react";
import Plotly from 'plotly.js-cartesian-dist-min'
import createPlotlyComponent from 'react-plotly.js/factory';

import { defaultDollarsHeatMap } from "./defaultDollarsHeatMap";
import { defaultRatesHeatMap } from "./defaultRatesHeatMap";

const taxHeatMap = props => {
  let plotData = null;
  let chartTitle = null;

  const Plot = createPlotlyComponent(Plotly);

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
