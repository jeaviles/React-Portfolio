import React, { Component } from "react";

import { columns } from "./AmortHeaders";
import amortDataGenerator from "./AmortDataGenerator";
import ReactTable from "react-table";
import "./ReactTable/ReactTable.css";

class AmortTool extends Component {
  state = {
    loanAmt: 300000,
    intRate: 5,
    numMonths: 360,
    firstDate: new Date(Date.now())
  };

  render() {
    const data = amortDataGenerator(
      this.state.loanAmt,
      this.state.intRate,
      this.state.numMonths,
      this.state.firstDate
    );

    console.log(columns);
    return (
      <div>
        <p>Hello!</p>
        <ReactTable
          style={{
            height: "500px" // This will force the table body to overflow and scroll, since there is not enough room
          }}
          columns={columns}
          data={data}
          defaultPageSize={20}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default AmortTool;
