import React from "react";
import Plotly from 'plotly.js-cartesian-dist-min'
import createPlotlyComponent from 'react-plotly.js/factory';

import makeBarChart from "./makeBarChart";
import getTaxData from "../TaxData/getTaxData";

const taxBarChart = props => {
  let subTitle = null;
  let chartTitle = null;

  const Plot = createPlotlyComponent(Plotly);

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
