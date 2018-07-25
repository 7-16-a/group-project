import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <div className="jumbotron text-center">
          <h2>Online Journal</h2>
          <p> Welcome! Get started here.</p>
          <Button bsStyle="info" href="#login">
            Log In
          </Button>
        </div>
      </div>
    );
  }
}

export default Landing;
