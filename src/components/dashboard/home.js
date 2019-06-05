import React, { Component } from "react";
import Navigation from "../layout/Navbar";
import "../../css/home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navigation />
      </React.Fragment>
    );
  }
}

export default Home;
