import React from "react";
import "./Login.css";
import { Form, FormControl, FormGroup, Col, Button } from "react-bootstrap";

class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <div className="jumbotron text-left">
          <Col lg={1}>
            <h2>Login</h2>
          </Col>
          <br />
          <Form horizontal action="/login" method="post">
            <FormGroup controlId="formHorizontalUser">
              <Col sm={1}>Username:</Col>
              <Col sm={8}>
                <FormControl type="text" name="username" />
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPassword">
              <Col sm={1}>Password:</Col>
              <Col sm={8}>
                <FormControl type="password" name="password" />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={12}>
                <Button bsStyle="info" type="submit">
                  Submit
                </Button>
              </Col>
            </FormGroup>
          </Form>
          <Col sm={8}>
            <p>
              Don't have an account yet?{" "}
              <a className="loginLinkStyle" href="#signup">
                Sign up here
              </a>
            </p>
          </Col>
        </div>
      </div>
    );
  }
}

export default Login;