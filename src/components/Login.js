import React, { Component } from "react";
import "./Login.css";
import { Container, Row, Col, Input, Button } from 'mdbreact';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    console.log(user);
  }
  render() {
    return (
    <Container>
      <Row>
        <div className="loginform">
        <form onSubmit={this.onSubmit}>
              <h4 className="display-5 text-center mt-1 p-1 animated zoomIn">
                Sign into your SkyWire account
                </h4>
              <div className="grey-text">
              <Input label="Email"
               icon="envelope" 
               group type="email" 
               validate error="wrong" 
               success="right"
               value={this.state.email}
               onChange={this.onChange} />
               <Input label="password"
               icon="lock"
               group type="password"
               validate 
               value={this.state.password}
               onChange={this.onChange}
               />
               </div>
               <div className="text-center">
               <Button type ="submit" className="btn btn-info">
               Login
              </Button>
             </div>
          </form>
          </div>
          <div className="signupaccount">
          Don't have an account, yet? <br/>
         <Link to="/signup"> Sign Up </Link>
         </div>
      </Row>
    </Container>
    );
  }
};

//   login() {
//     axios.post('/api/v1/users/login', this.state).then(() => {
//       alert('success')
//     }).catch((err) => {
//       console.log('error')
//     })
//   }
// }

export default Login;
