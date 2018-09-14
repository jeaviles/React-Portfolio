import React from "react";

import Plot from "react-plotly.js";
import makeBarChart from "./makeBarChart";
import getTaxData from "../TaxData/getTaxData";

const taxBarChart = props => {
  const plotData = makeBarChart(getTaxData(30000));
  return (
    <Plot
      data={plotData}
      layout={{
        title: "2018 US Dollars Levied by State",
        yaxis: {
          title: "Dollars $",
          titlefont: {
            size: 16,
            color: "rgb(107, 107, 107)"
          }
        }
      }}
    />
  );
};

export default taxBarChart;
