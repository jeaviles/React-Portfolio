import { states } from "../TaxData/taxData";

const makeBarChart = taxData => {
  let data = [
    {
      x: states,
      y: taxData,
      type: "bar"
    }
  ];

  return data;
};

export default makeBarChart;
