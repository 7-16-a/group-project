import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Footer from './components/Footer.js';
import Route from './components/Route';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <AppNavbar/>
        <header>
          <img src={logo} className="App-logo"/>
          <h1 className="App-warn"> Hang tight while we get this app right! </h1>

        </header>
      </div>
    );
  }
}

export default App;
