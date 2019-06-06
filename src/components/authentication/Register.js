import React, { Component } from "react";
import image from "../../images/undraw_online_discussion_5wgl.svg";
import "../../css/Register.css";
import AuthNavbar from "../layout/AuthNavbar";
import { Form, FormGroup, FormFeedback, Label, Input } from "reactstrap";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      handleName: "",
      email: "",
      password: "",
      errors: {
        name: "",
        handleName: "",
        email: "",
        password: "",
        disabled: true
      }
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = event => {
    console.log(JSON.stringify(this.state));
    event.preventDefault();
    this.setState({
      name: "",
      handleName: "",
      email: "",
      password: "",
      errors: {
        name: "",
        handleName: "",
        email: "",
        password: "",
        disabled: true
      }
    });
  };

  handleBlur = event => {
    const { errors, ...inputs } = this.state;
    this.validation(inputs);
  };

  validation = ({ name, handleName, email, password }) => {
    const errors = {
      name: "",
      handleName: "",
      email: "",
      password: "",
      disabled: false
    };
    var filter = /^([a-zA-Z0-9_\.\-])+\@iiitvadodara.ac.in/;
    if (name.length === 0) {
      errors.name = "Name must contains atleast 1 charchter";
      errors.disabled = true;
    } else if (name.length > 30) {
      errors.name = "Name can contains atmost 30 charchters";
      errors.disabled = true;
    } else if (handleName.length < 3) {
      errors.handleName = "Name must contains atleast 3 charchters";
      errors.disabled = true;
    } else if (handleName && handleName.length > 20) {
      errors.handleName = "Name can contains atmost 20 charchters";
      errors.disabled = true;
    }
    if (email && !filter.test(email)) {
      errors.email = "Please provide a valid email address";
      errors.disabled = true;
    }
    if (password && password.length < 8) {
      errors.password = "Password must contain atleast 8 letters";
      errors.disabled = true;
    }
    this.setState({ errors });

    return errors;
  };
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
                <Form className="form" onSubmit={this.handleSubmit}>
                  <FormGroup row>
                    <Label>Name</Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your Full Name"
                      value={this.state.name}
                      onBlur={this.handleBlur}
                      onChange={this.handleInputChange}
                    />
                    <p className="error">{this.state.errors.name}</p>
                  </FormGroup>
                  <FormGroup row>
                    <Label>Handle Name</Label>
                    <Input
                      type="text"
                      name="handleName"
                      id="handleName"
                      placeholder="Display name"
                      value={this.state.handle}
                      onBlur={this.handleBlur}
                      onChange={this.handleInputChange}
                    />
                    <p className="error">{this.state.errors.handleName}</p>
                  </FormGroup>
                  <FormGroup row>
                    <Label>Email</Label>
                    <Input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="your@example.com"
                      value={this.state.email}
                      onBlur={this.handleBlur}
                      onChange={this.handleInputChange}
                    />
                    <p className="error">{this.state.errors.email}</p>
                  </FormGroup>
                  <FormGroup row>
                    <Label>Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                      autoComplete="off"
                      value={this.state.password}
                      onBlur={this.handleBlur}
                      onChange={this.handleInputChange}
                    />
                    <p className="error">{this.state.errors.password}</p>
                  </FormGroup>
                  <div className="row">
                    <div className="col-md-5">
                      <button
                        disabled={this.state.errors.disabled}
                        type="submit"
                        className="but"
                      >
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
                </Form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
