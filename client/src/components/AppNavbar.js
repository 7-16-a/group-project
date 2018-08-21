import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class AppNavbar extends Component {

  render() {
    return (
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">SkyWire</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/login">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Signup">Signup</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/About">About</a>
      </li>
    </ul>
  </div>
</nav>
    );
  }
}



export default AppNavbar;
