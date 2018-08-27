import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="jumbotron text-center">
        <div className="landing">
          <div className="dark-overlay landing-inner text-dark">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>Online Journal</h2>
                <p> Welcome! Get started here.</p>
                <Link to="/login" className="btn btn-lg btn-info">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
