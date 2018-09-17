import React from "react";

import Plot from "react-plotly.js";

const amortPlot = props => {
  const show = props.plotWidth > 500;
  return (
    <Plot
      data={props.plotData}
      layout={{
        title: "Amortization Graph",
        showlegend: show,
        width: props.plotWidth,
        yaxis: {
          title: "Dollars ($)"
        }
      }}
    />
  );
};

export default amortPlot;
