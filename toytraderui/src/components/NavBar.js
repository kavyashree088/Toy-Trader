import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import image from "../images/logo.jpg";
import "../css/navbar.css";

export default class NavBar extends Component {
  onLogin = () => {
    this.props.history.push("/LoginPage");
  };

  render() {
    return (
      <Navbar className="navbar">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={image}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <b className="navHeader"> Toy Trader</b>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Button
            onClick={this.onLogin}
            className="right-margin"
            variant="outline-warning"
          >
            Login
          </Button>
          <Button variant="danger">Sign Up</Button>
        </Nav>
      </Navbar>
    );
  }
}
