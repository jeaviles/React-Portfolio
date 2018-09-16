import getTaxData from "../TaxData/getTaxData";
import { states } from "../TaxData/taxData";

const makeHeatMap = userType => {
  const xValues = states;

  const yValues = [
    250000,
    240000,
    230000,
    220000,
    210000,
    200000,
    190000,
    180000,
    170000,
    160000,
    150000,
    140000,
    130000,
    120000,
    110000,
    100000,
    90000,
    80000,
    70000,
    60000,
    50000,
    40000,
    30000,
    20000,
    10000
  ];

  let zValues = [];

  for (let i = 0; i < yValues.length; i++) {
    zValues.push(getTaxData(yValues[i], userType));
  }

  const hoverText = zValues.map((row, i) => {
    return row.map(item => {
      if (userType === "Dollars") {
        return `State: ${xValues[i]}<br>Income: ${
          yValues[i]
        }<br>Amount: ${item}`;
      } else {
        return `State: ${xValues[i]}<br>Income: ${
          yValues[i]
        }<br>Rate: ${item}%`;
      }
    });
  });

  const data = [
    {
      x: xValues,
      y: yValues,
      z: zValues,
      type: "heatmap",
      showscale: true,
      hoverinfo: "text",
      text: hoverText
    }
  ];

  return data;
};

export default makeHeatMap;
