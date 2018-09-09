import React, { Component } from "react";

import Toolbar from "../../Navigation/Toolbar/Toolbar";
import LandingPage from "../../components/Landing/Landing";
import "./Layout.css";

class layout extends Component {
  state = {
    showSideDrawer: false
  };

  toggleDrawerHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar
          toggleSideDrawer={this.toggleDrawerHandler}
          showDrawer={this.state.showSideDrawer}
        />
        <main className="Layout">
          <LandingPage />
        </main>
      </React.Fragment>
    );
  }
}

export default layout;
