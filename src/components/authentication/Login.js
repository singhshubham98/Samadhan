import React, { Component } from "react";
import image from "../../images/undraw_online_discussion_5wgl.svg";
import "../../css/login.css";
import AuthNavbar from "../layout/AuthNavbar";
class Login extends Component {
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
              <div className="auth__auth">
                <h1 className="auth__title">Access your account</h1>
                <p>Fill in your email and password to proceed</p>
                <form className="form">
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
                  <button type="submit" className="button button__accent">
                    Log in
                  </button>
                  <div className="row loginFooter">
                    <div className="col-md-5">
                      <a href="/forget">
                        <h6 className="forget">Forgot your password?</h6>
                      </a>
                    </div>
                    <div className="col-md-7">
                      <h6 className="signup">
                        Don’t have an account? <a href="/register">Sign up </a>
                      </h6>
                    </div>
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

export default Login;
