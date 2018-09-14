import React, { Component } from "react";

import Toolbar from "../../Navigation/Toolbar/Toolbar";
import LandingPage from "../../components/Landing/Landing";
import AmortTool from "../../Containers/AmortTool/AmortTool";
import ProjectList from "../../components/ProjectList/ProjectList";
import TaxTool from "../../Containers/TaxTool/TaxTool";
import "./Layout.css";

class layout extends Component {
  state = {
    showSideDrawer: false,
    currentPage: {
      LandingPage: false,
      ProjectList: false,
      AmortTool: false
    }
  };

  toggleDrawerHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  currentPageHandler = event => {
    const updatedCurrentPage = {
      ...this.state.currentPage
    };

    const displayPage = event.target.id;

    Object.keys(updatedCurrentPage).forEach(page => {
      if (displayPage === page) {
        updatedCurrentPage[page] = true;
      } else {
        updatedCurrentPage[page] = false;
      }
    });

    this.setState({ currentPage: updatedCurrentPage, showSideDrawer: false });
  };

  updateDimensions = () => {
    let w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName("body")[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
      height =
        w.innerHeight || documentElement.clientHeight || body.clientHeight;

    this.setState({ windowWidth: width, windowHeight: height });
  };

  componentWillMount = () => {
    this.updateDimensions();
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.updateDimensions);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
  };

  render() {
    let currentPage = null;

    if (this.state.currentPage.LandingPage) {
      currentPage = (
        <LandingPage
          navigate={this.currentPageHandler}
          windowWidth={this.state.windowWidth}
        />
      );
    } else if (this.state.currentPage.ProjectList) {
      currentPage = <ProjectList navigate={this.currentPageHandler} />;
    } else if (this.state.currentPage.AmortTool) {
      currentPage = <AmortTool windowWidth={this.state.windowWidth} />;
    }

    return (
      <React.Fragment>
        <Toolbar
          toggleSideDrawer={this.toggleDrawerHandler}
          showDrawer={this.state.showSideDrawer}
          navigate={this.currentPageHandler}
        />
        <main className="Layout">
          {currentPage}
          <TaxTool />
        </main>
      </React.Fragment>
    );
  }
}

export default layout;
