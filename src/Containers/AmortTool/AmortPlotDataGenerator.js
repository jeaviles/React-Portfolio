const amortPlotDataGenerator = data => {
  const plotData = [
    {
      x: [],
      y: [],
      name: "Beginning Balance",
      type: "line"
    },
    {
      x: [],
      y: [],
      name: "Ending Balance",
      type: "line"
    },
    {
      x: [],
      y: [],
      name: "Cumulative Interest",
      type: "line"
    },
    {
      x: [],
      y: [],
      name: "Cumulative Principal",
      type: "line"
    }
  ];

  const payDates = data.map(row => {
    return row.payDate;
  }, []);

  const beginningBalances = data.map(row => {
    return row.beginningBalance;
  }, []);

  const endingBalances = data.map(row => {
    return row.endingBalance;
  }, []);

  const cumulativeInterests = data.map(row => {
    return row.cumulativeInterest;
  }, []);

  const cumulativePrincipals = data.map(row => {
    return row.cumulativePrincipal;
  }, []);

  plotData.forEach(trace => trace.x.push(...payDates));
  plotData[0].y.push(...beginningBalances);
  plotData[1].y.push(...endingBalances);
  plotData[2].y.push(...cumulativeInterests);
  plotData[3].y.push(...cumulativePrincipals);

  return plotData;
};

export default amortPlotDataGenerator;
