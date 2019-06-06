import React, { Component } from "react";
import "../../css/Communities.css";

class Communities extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="card mainDiv col-md-8 offset-md-2 mt-5">
            <div className="card-title d-flex justify-content-center mt-2 mb-0">
              <strong> Welcome To the World !!</strong>
            </div>
            <div className="card-body">
              <div className="paragraph">
                <p>
                  Spaces are collections and communities created around shared
                  interests and tastes. Read more on the Quora blog.
                </p>
                <p>
                  Spaces are collections and communities created around shared
                  interests and tastes. Read more on the Quora blog.
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Communities;
