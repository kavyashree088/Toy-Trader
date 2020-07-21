import React, { Component } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/LoginPage" component={Login}></Route>
          <Route path="/SignUp" component={Login}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
