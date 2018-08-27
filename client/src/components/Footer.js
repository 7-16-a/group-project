import React, { Component } from "react";
// import { Form, FormControl, FormGroup, Col, Button } from "react-bootstrap";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bg-secondary text-white mt-1 p-3 text-center">
        <br />
          <div className="text-center">
          <a className="text-white" href="/">
                Enough said?
                </a>
            {/* <button className="btn btn-dark" href="/">
              Log Out
          </button>{' '} */}
          </div>
          <br />
          <div className="text-light mt-1">
            Copyright &copy; {new Date().getFullYear()} SkyWire: Powered by React
          </div>
          <img
            className="footerLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
            alt="react logo"
            height={25}
          />
        </footer>
      </div>
    );
  }
}

export default Footer;
