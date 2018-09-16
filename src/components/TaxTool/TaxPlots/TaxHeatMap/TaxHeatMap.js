import React from "react";

import Plot from "react-plotly.js";
import makeHeatMap from "./makeHeatMap";
import { heatMapRateData } from "./HeatMapDefault";

const taxHeatMap = props => {
  const plotData = makeHeatMap(props.mode);

  let subTitle = null;
  let chartTitle = null;

  if (props.mode === "Dollars") {
    subTitle = "Dollars $";
    chartTitle = "2018 US Dollars Levied by State";
  } else {
    subTitle = "Tax Rate %";
    chartTitle = "2018 US Effective Tax Rates by State";
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

// data={heatMapRateData}
