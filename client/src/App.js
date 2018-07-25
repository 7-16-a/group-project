import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer.js";
import Route from "./components/Route";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <header>
          <h1 className="App-warn">Tell me all about it</h1>
        </header>
        <Route />
        <Footer />
      </div>
    );
  }
}

export default App;
