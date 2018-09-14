import { states, stateCodes } from "../TaxData/taxData";

const makeUSAMap = (userData, maxValue) => {
  var data = [
    {
      type: "choropleth",
      locationmode: "USA-states",
      locations: stateCodes,
      z: userData,
      text: states,
      zmin: 0,
      zmax: maxValue,
      colorscale: [
        [0, "rgb(242,240,247)"],
        [0.2, "rgb(218,218,235)"],
        [0.4, "rgb(188,189,220)"],
        [0.6, "rgb(158,154,200)"],
        [0.8, "rgb(117,107,177)"],
        [1, "rgb(84,39,143)"]
      ],
      colorbar: {
        title: "Dollars $",
        thickness: 0.2
      },
      marker: {
        line: {
          color: "rgb(255,255,255)",
          width: 2
        }
      }
    }
  ];

  return data;
};

export default makeUSAMap;
