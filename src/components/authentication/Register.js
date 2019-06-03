import React, { Component } from "react";
import image from "../../images/undraw_online_discussion_5wgl.svg";
import "../../css/Register.css";
import AuthNavbar from "../layout/AuthNavbar";
class Register extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <AuthNavbar />
        <div className="loginDiv">
          <div className="row">
            <div className="col-md-6 limit">
              <img src={image} alt="" />
            </div>
            <div className="col-md-6">
              <div className="auth">
                <h1 className="auth__title">Create an account</h1>
                <p>
                  Fill in your name, handle name, email and password to proceed
                </p>
                <form className="form">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your Full Name"
                  />
                  <label>Handle Name</label>
                  <input
                    type="text"
                    name="handle"
                    id="handle"
                    placeholder="Display name"
                  />
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="your@example.com"
                  />
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                    autoComplete="off"
                  />
                  <div className="row">
                    <div className="col-md-5">
                      <button type="submit" className="button button__accent">
                        Register
                      </button>
                    </div>
                    <div className="col-md-6 mt-2">
                      <a href="/">
                        <p
                          style={{ color: "blue", textDecoration: "underline" }}
                        >
                          I’m already a member
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="loginFooter">
                    <p>
                      By signing up, you agree to our Terms , Data Policy and
                      Cookies Policy .
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
