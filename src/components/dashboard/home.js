import React, { Component } from "react";
import Navigation from "../layout/Navbar";
import "../../css/home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <div className="fDiv">
          <div className="row">
            <div className="col-md-3 down3">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    Some example text. Some example text.
                  </p>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 down6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    Some example text. Some example text.
                  </p>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 down6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Some example text. Some example text.
                </p>
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
