import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";

import Signup from "./components/Signup";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
          <h1 className="App-warn">Tell me all about it</h1>
          <br />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
