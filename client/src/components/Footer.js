import React, { Component } from "react";
// import { Form, FormControl, FormGroup, Col, Button } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bg-secondary text-white mt-1 p-4 text-center">
          <h6 className="">Enough said?</h6>
          <div className="text-center">
            <button className="btn btn-dark" href="/">
              Log Out
          </button>{' '}
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
