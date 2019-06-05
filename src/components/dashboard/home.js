import React, { Component } from "react";
import Navigation from "../layout/Navbar";
import "../../css/home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navigation />

        <div className="content-wrapper">
          <div className="w-container">
            <div className="w-row">
              <div className="w-col w-col-3">
                <div className="sidebar-header">Feed</div>
                <div className="white-wrapper">
                  <p>Alogrithm</p>
                  <p>Alogrithm</p>
                  <p>Alogrithm</p>
                  <p>Alogrithm</p>
                  <p>Alogrithm</p>
                  <p>Alogrithm</p>
                  <p>Alogrithm</p>
                </div>
              </div>
              <div className="content-column w-col w-col-9">
                <div className="card mb-4">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="round">
                        <i className="fa fa-user logo" />
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="card-title">
                        Topic name
                        <span style={{ float: "right" }} className="text-muted">
                          {" "}
                          11h ago
                        </span>
                      </div>
                      <div className="card-subtitle text-muted">
                        10h ago | Topic
                      </div>
                      <div className="body">
                        The copy warned the Little Blind Text, that where it
                        came from it would have been rewritten a thousand times
                        and everything that was left from its origin would be
                        the word "and" and the Little Blind
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
