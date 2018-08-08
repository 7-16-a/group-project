import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Landing.css";


class Landing extends Component {
  render() {
    return (

      <div className="text-center">
        <div className="landing">
              <h1 class="animated fadeInUpBig"> Skywire </h1>
                <h3>Tell me all about it</h3>
                <Link to="signup" className="btn btn-cyan">
                Get Started
                </Link>
                <br/>
                <Link to="/login" className="btn btn-teal">
                    Login   
                </Link>
            </div>
           </div>
    );
  }
}

export default Landing;