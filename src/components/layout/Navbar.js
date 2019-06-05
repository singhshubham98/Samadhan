import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "../../css/Navbar.css";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar fixed="top" expand="md" className="navDiv">
          <NavbarBrand className="navbarBrand ml-4" href="/home">
            Samadhan
          </NavbarBrand>
          <NavbarToggler className="toggleButton" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto mt-2" navbar>
              <NavItem>
                <NavLink href="/communities" className="nav-link">
                  <i className="fa fa-users" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/home" className="nav-link">
                  <i className="fa fa-search" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/notifications" className="nav-link">
                  <i className="fa fa-bell" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/communities" className="nav-link">
                  <i className="fa fa-user" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/logout" className="nav-link">
                  <i className="fa fa-sign-out" />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
