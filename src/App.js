import React, { Component } from "react";
import { HashRouter, Route, Switch, NavLink, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import routes from "./routes";
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <img id="here" src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <nav style={{ display: "flex", justifyContent: "space-around" }}>
              <NavLink exact to="/">
                Home
              </NavLink>
              <NavLink to="/About"> About </NavLink>
              <NavLink to="/Contact"> About </NavLink>
            </nav>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <hr />
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
