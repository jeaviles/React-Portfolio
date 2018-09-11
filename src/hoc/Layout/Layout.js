import React, { Component } from "react";

import Toolbar from "../../Navigation/Toolbar/Toolbar";
import LandingPage from "../../components/Landing/Landing";
import AmortTool from "../../Containers/AmortTool/AmortTool";
import "./Layout.css";

class layout extends Component {
  state = {
    showSideDrawer: false,
    currentPage: {
      LandingPage: false,
      ProjectList: false,
      AmortTool: true
    }
  };

  toggleDrawerHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  currentPageHandler = displayPage => {
    const updatedCurrenPage = {
      ...this.state.currentPage
    };

    Object.keys(updatedCurrenPage).forEach(page => {
      if (displayPage === page) {
        updatedCurrenPage[page] = true;
      } else {
        updatedCurrenPage[page] = false;
      }
    });

    console.log(updatedCurrenPage);
  };

  fetchCurrentPage = () => {
    if (this.state.currentPage["LandingPage"]) {
      return <LandingPage />;
    } else if (this.state.currentPage["ProjectList"]) {
      return <LandingPage />;
    } else if (this.state.currentPage["AmortTool"]) {
      return <AmortTool />;
    }
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar
          toggleSideDrawer={this.toggleDrawerHandler}
          showDrawer={this.state.showSideDrawer}
        />
        <main className="Layout">{this.fetchCurrentPage()}</main>
      </React.Fragment>
    );
  }
}

export default layout;
