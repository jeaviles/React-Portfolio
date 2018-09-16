import { states, stateCodes } from "../TaxData/taxData";

const makeUSAMap = (userData, maxValue, userType) => {
  let title = null;
  if (userType === "Dollars") {
    title = "Dollars $";
  } else {
    title = "Rate %";
  }

  const data = [
    {
      type: "choropleth",
      locationmode: "USA-states",
      locations: stateCodes,
      z: userData,
      text: states,
      zmin: 0,
      zmax: maxValue,
      autocolorscale: true,
      colorbar: {
        title: title,
        thickness: 20
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
