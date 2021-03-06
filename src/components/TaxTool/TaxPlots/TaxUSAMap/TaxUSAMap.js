import React from "react";
import Plotly from 'plotly.js-geo-dist-min'
import createPlotlyComponent from 'react-plotly.js/factory';

import makeUSAMap from "./makeUSAMap";
import getTaxData from "../TaxData/getTaxData";

const taxUSAMap = props => {
  let chartTitle = null;
  if (props.mode === "Dollars") {
    chartTitle = "2018 US Dollars Levied by State";
  } else {
    chartTitle = "2018 US Effective Tax Rates by State";
  }

  const Plot = createPlotlyComponent(Plotly);
  const taxData = getTaxData(props.income, props.mode);
  const plotData = makeUSAMap(taxData, Math.max(taxData), props.mode);

  return (
    <Plot
      data={plotData}
      layout={{
        title: chartTitle,
        width: props.windowWidth,
        geo: {
          scope: "usa",
          showlakes: true,
          lakecolor: "rgb(255,255,255)"
        }
      }}
    />
  );
};

export default taxUSAMap;
