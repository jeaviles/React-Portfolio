import React from "react";
import Plotly from 'plotly.js-cartesian-dist-min'
import createPlotlyComponent from 'react-plotly.js/factory';

const amortPlot = props => {
  const show = props.plotWidth > 500;

  const Plot = createPlotlyComponent(Plotly);

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
