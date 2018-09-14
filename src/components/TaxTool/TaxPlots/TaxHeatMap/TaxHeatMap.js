import React from "react";

import Plot from "react-plotly.js";
import makeHeatMap from "./makeHeatMap";
import { heatMapRateData } from "./HeatMapDefault";

const taxHeatMap = props => {
  // const plotData = makeHeatMap();
  return (
    <div>
      <Plot
        data={heatMapRateData}
        layout={{
          title: "2018 US Dollars Levied by State",
          annotations: [],
          xaxis: {
            ticks: "",
            side: "top"
          },
          yaxis: {
            title: "Income ($)",
            ticks: "",
            ticksuffix: " ",
            autosize: true
          }
        }}
      />
      <p>Hello!</p>
    </div>
  );
};

export default taxHeatMap;
