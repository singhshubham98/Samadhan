import React, { Component } from "react";
import image from "../../images/undraw_online_discussion_5wgl.svg";
import "../../css/login.css";
class Login extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-md-6 limit">
          <img src={image} alt="" />
        </div>
        <div class="col-md-6">
          <div class="auth__auth">
            <h1 class="auth__title">Access your account</h1>
            <p>Fill in your email and password to proceed</p>
            <form
              method="post"
              action="/example"
              autocompelete="new-password"
              role="presentation"
              class="form"
            >
              <input name="email" class="fakefield" />
              <label>Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="you@example.com"
              />
              <label>Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                autocomplete="off"
              />
              <button type="submit" class="button button__accent">
                Log in
              </button>
              <a href="">
                <h6 class="left-align">Forgot your password?</h6>
              </a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
