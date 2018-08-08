import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
// import FooterPage from "./components/FooterPage";
import Landing from "./components/Landing";
import Login from "./components/Login";
import About from "./components/About";
import Post from './components/Post';

import Signup from "./components/Signup";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
          <br />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about" component={About} />
            <Route exact path="/posts" component={Post} />
          </div>
          {/* <FooterPage /> */}
        </div>
      </Router>
    );
  }
}

export default App;
