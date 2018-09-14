import React from "react";

import Plot from "react-plotly.js";
import makeUSAMap from "./makeUSAMap";
import getTaxData from "../TaxData/getTaxData";

const taxUSAMap = props => {
  const show = props.plotWidth > 500;
  const taxData = getTaxData(30000);
  const plotData = makeUSAMap(taxData, Math.max(taxData));

  return (
    <Plot
      data={plotData}
      layout={{
        title: "2018 US Dollars Levied by State",
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
