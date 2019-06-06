import React, { Component } from "react";
import image from "../../images/undraw_online_discussion_5wgl.svg";
import "../../css/Register.css";
import AuthNavbar from "../layout/AuthNavbar";
import { Form, FormGroup, FormFeedback, Label, Input } from "reactstrap";
import { isExpressionWrapper } from "@babel/types";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      handleName: "",
      email: "",
      password: "",
      touched: {
        name: false,
        handleName: false,
        email: false,
        password: false
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    console.log(JSON.stringify(this.state));
    event.preventDefault();
  }

  handleBlur = feild => event => {
    this.setState({
      touched: { ...this.state.touched, [feild]: true }
    });
  };

  validate(name, handleName, email, password) {
    const error = {
      name: "",
      handleName: "",
      email: "",
      password: ""
    };

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (this.state.touched.email && !filter.test(email)) {
      error.email = "Please provide a valid email address";
    }

    if (this.state.touched.name && name.length < 3)
      error.name = "Name must contains atleast 3 charchters";
    else if (this.state.touched.name && name.length > 20)
      error.name = "Name can contains atmost 20 charchters";

    if (this.state.touched.handleName && handleName.length < 3)
      error.handleName = "Name must contains atleast 3 charchters";
    else if (this.state.touched.handleName && handleName.length > 20)
      error.handleName = "Name can contains atmost 20 charchters";

    if (this.state.touched.password && password.length < 8)
      error.password = "Password must contain atleast 8 letters";

    return error;
  }
  render() {
    const errors = this.validate(
      this.state.name,
      this.state.handleName,
      this.state.email,
      this.state.password
    );
    const isEnable =
      errors.name.length > 0 ||
      errors.handleName.length > 0 ||
      errors.email.length > 0 ||
      errors.password.length > 0;
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
                      onBlur={this.handleBlur("name")}
                      valid={errors.name === ""}
                      invalid={errors.name !== ""}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.name}</FormFeedback>
                  </FormGroup>
                  <FormGroup row>
                    <Label>Handle Name</Label>
                    <Input
                      type="text"
                      name="handleName"
                      id="handleName"
                      placeholder="Display name"
                      value={this.state.handle}
                      onBlur={this.handleBlur("handleName")}
                      valid={errors.handleName === ""}
                      invalid={errors.handleName !== ""}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback className="error">
                      {errors.handleName}
                    </FormFeedback>
                  </FormGroup>
                  <FormGroup row>
                    <Label>Email</Label>
                    <Input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="your@example.com"
                      value={this.state.email}
                      onBlur={this.handleBlur("email")}
                      valid={errors.email === ""}
                      invalid={errors.email !== ""}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.email}</FormFeedback>
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
                      onBlur={this.handleBlur("password")}
                      valid={errors.password === ""}
                      invalid={errors.password !== ""}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.password}</FormFeedback>
                  </FormGroup>
                  <div className="row">
                    <div className="col-md-5">
                      <button disabled={isEnable} type="submit" className="but">
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
