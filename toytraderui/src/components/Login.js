import React, { Component } from "react";
import { Button, Container, Tabs, Tab, Form } from "react-bootstrap";
import NavBar from "./NavBar";
import "../css/login.css";

export default class Login extends Component {
  render() {
    return (
      <div className="home">
        <NavBar history={this.props.history}></NavBar>
        <Container>
          <div className="login u-dimension-1">
            <h3 className="pt-5">Sign In To Buy/Sell/Rent toys</h3>
            <Form className="pt-2">
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  onChange={this.handleChange}
                ></Form.Control>
                <div style={{ fontSize: 12, color: "red" }}></div>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  onChange={this.handleChange}
                ></Form.Control>
                <div style={{ fontSize: 12, color: "red" }}></div>
              </Form.Group>
              <Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="btn-block"
                  onClick={this.handleUserLogin}
                >
                  Sign In
                </Button>
              </Form.Group>
            </Form>
            <div className="text-center">
              <a href="/SignUp">Create your Account</a>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
