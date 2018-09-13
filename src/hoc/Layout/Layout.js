import React, { Component } from "react";

import Toolbar from "../../Navigation/Toolbar/Toolbar";
import LandingPage from "../../components/Landing/Landing";
import AmortTool from "../../Containers/AmortTool/AmortTool";
import ProjectList from "../../components/ProjectList/ProjectList";
import "./Layout.css";

class layout extends Component {
  state = {
    showSideDrawer: false,
    currentPage: {
      LandingPage: true,
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
    const updatedCurrenPage = {
      ...this.state.currentPage
    };

    const displayPage = event.target.id;
    console.log(displayPage);

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
      return <ProjectList />;
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
          navigate={this.currentPageHandler}
        />
        <main className="Layout">{this.fetchCurrentPage()}</main>
      </React.Fragment>
    );
  }
}

export default layout;
