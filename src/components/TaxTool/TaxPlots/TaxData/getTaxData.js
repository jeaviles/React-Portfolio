import { stateTaxData } from "./taxData";

const getTaxData = (income, type = "rate") => {
  let taxData = [];

  stateTaxData.forEach(function(state) {
    const lowerBounds = state[1]["lowerBounds"].filter(bound => bound < income);
    let amountLevied = 0;
    let tempIncome = income;

    for (let i = lowerBounds.length - 1; i >= 0; i--) {
      amountLevied += (tempIncome - lowerBounds[i]) * state[1]["rates"][i];
      tempIncome = lowerBounds[i];
    }

    if (type === "dollars") {
      taxData.push(Math.round(amountLevied * 100) / 100.0);
    } else {
      taxData.push(
        Math.round((amountLevied / income) * 100.0 * 1000.0) / 1000.0
      );
    }
  });

  return taxData;
};

export default getTaxData;
