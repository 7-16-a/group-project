import React from "react";
import "./Signup.css";
import { Form, FormControl, FormGroup, Col, Button } from "react-bootstrap";

class Signup extends React.Component {
  render() {
    return (
      <div className="Signup">
        <div className="jumbotron text-left">
          <Col sm={2}>
            <h2>Signup</h2>
          </Col>
          <br />
          <Form horizontal action="/register" method="post">
            <FormGroup controlId="formHorizontalUser">
              <Col sm={2}>Choose a Username:</Col>
              <Col sm={8}>
                <FormControl type="text" name="username" />
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPassword">
              <Col sm={2}>Choose a Password:</Col>
              <Col sm={8}>
                <FormControl type="text" name="password" />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={8}>
                <Button bsStyle="info" type="submit" value="Submit">
                  Submit
                </Button>
              </Col>
            </FormGroup>
          </Form>
          <Col sm={8}>
            <p>
              Already have an account?{" "}
              <a className="signupLinkStyle" href="#login">
                Log in here
              </a>
            </p>
          </Col>
        </div>
      </div>
    );
  }
}

export default Signup;
