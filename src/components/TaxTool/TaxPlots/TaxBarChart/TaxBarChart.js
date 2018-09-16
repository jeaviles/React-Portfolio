import React from "react";

import Plot from "react-plotly.js";
import makeBarChart from "./makeBarChart";
import getTaxData from "../TaxData/getTaxData";

const taxBarChart = props => {
  let subTitle = null;
  let chartTitle = null;

  if (props.mode === "Dollars") {
    subTitle = "Dollars $";
    chartTitle = "2018 US Dollars Levied by State";
  } else {
    subTitle = "Tax Rate %";
    chartTitle = "2018 US Effective Tax Rates by State";
  }
  const plotData = makeBarChart(
    getTaxData(props.income, props.mode),
    props.type
  );
  return (
    <Plot
      data={plotData}
      layout={{
        title: chartTitle,
        width: props.windowWidth,
        yaxis: {
          title: subTitle,
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
