import React, { Component } from "react";
import { Col, Container, Row, Footer, Button } from 'mdbreact';
import axios from "axios";

class FooterPage extends Component {
  render() {
    return (
      <div className="main-container text-center">
        <Footer color="stylish-color-dark" className="font-small lighten-3 pt-4 mt-4">
          {/* Enough said?
          <div className="text-center">
            <Button class="btn btn-rounded btn-blue-grey" href="/">
              Log Out
          </Button>{' '}
          </div> */}
          <br />

          Copyright &copy; {new Date().getFullYear()} SkyWire: Powered by React
       <img
            className="footerLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
            alt="react logo"
            height={25}
          />
         
         </Footer>
        
         </div>
        
    )
  }
}

export default FooterPage;