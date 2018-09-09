import React, { Component } from "react";
import "./App.css";

import Layout from "./hoc/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Layout />
        </div>
      </div>
    );
  }
}

export default App;
