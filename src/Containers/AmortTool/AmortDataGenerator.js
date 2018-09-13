export const formatDateString = date => {
  const monthMap = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec"
  };

  return monthMap[date.getMonth()] + " " + date.getFullYear();
};

const amortDataGenerator = (amt, rate, period, date) => {
  const incrementMonth = date => {
    const month = date.getMonth();
    const year = date.getFullYear();

    if (month === 11) {
      return new Date(year + 1, 0, 15);
    } else {
      return new Date(year, month + 1, 15);
    }
  };

  rate = rate / (12 * 100);
  const payment =
    (amt * rate * (1.0 + rate) ** period) / ((1.0 + rate) ** period - 1);

  const data = [
    {
      payDate: date,
      beginningBalance: amt,
      payment: payment
    }
  ];

  data[0].interest = data[0].beginningBalance * rate;
  data[0].principal = payment - data[0].interest;
  data[0].endingBalance = data[0].beginningBalance - data[0].principal;
  data[0].cumulativePrincipal = data[0].principal;
  data[0].cumulativeInterest = data[0].interest;

  let i = 1;
  while (data[i - 1].endingBalance.toFixed(2) > 0) {
    data.push({});
    data[i].beginningBalance = data[i - 1].endingBalance;
    data[i].payment = payment;
    data[i].payDate = incrementMonth(data[i - 1].payDate);
    data[i].interest = data[i].beginningBalance * rate;
    data[i].principal = payment - data[i].interest;
    data[i].endingBalance = data[i].beginningBalance - data[i].principal;
    data[i].cumulativeInterest =
      data[i].interest + data[i - 1].cumulativeInterest;
    data[i].cumulativePrincipal =
      data[i].principal + data[i - 1].cumulativePrincipal;
    i++;
  }

  return data.map(row => {
    let formattedRow = { ...row };
    formattedRow.beginningBalance = row.beginningBalance.toFixed(2);
    formattedRow.payment = row.payment.toFixed(2);
    formattedRow.interest = row.interest.toFixed(2);
    formattedRow.principal = row.principal.toFixed(2);
    formattedRow.endingBalance = row.endingBalance.toFixed(2);
    formattedRow.cumulativeInterest = row.cumulativeInterest.toFixed(2);
    formattedRow.cumulativePrincipal = row.cumulativePrincipal.toFixed(2);
    formattedRow.payDate = formatDateString(row.payDate);
    return formattedRow;
  });
};

export default amortDataGenerator;
