import React, { Component } from "react";
import NavBar from "./NavBar";
import "../css/home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <NavBar history={this.props.history}></NavBar>
        <div>Home</div>
      </div>
    );
  }
}
