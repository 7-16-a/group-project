import React, { Component } from "react";
import "./Login.css";
import { Form, FormControl, FormGroup, Col, Button } from "react-bootstrap";
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

    axios.post('/api/users/login', this.state).then((res) => {
      localStorage.setItem('token', res.data.token)
      window.location.pathname = '/Home';
    })

    // axios
    //   .post('/api/users/login', user)
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err));

  }
  render() {
    return <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className="jumbotron">
              <h2 className="display-5 text-center mt-1 p-1">
                Sign into your SkyWire account
                </h2>
              <p className="lead text-center" />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange} />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange} />
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
            <p className="text-center md-8 p-4">
              Don't have an account yet? <a className="signupLinkStyle" href="/signup">
                Sign up in here
                </a>
            </p>
          </div>
        </div>
      </div>
    </div>;
  }
}

export default Login;
