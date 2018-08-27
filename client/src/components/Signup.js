import React, { Component } from "react";
import "./Signup.css";
import axios from 'axios';


class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    // const newUser = {
    //   name: this.state.name,
    //   email: this.state.email,
    //   password: this.state.password,
    //   password2: this.state.password2
    // };

    axios.post('/api/users/register', this.state).then((res) => {
      localStorage.setItem('token', res.data.token)
      window.location.pathname = '/Login';
    })

    // axios
    // .post('/api/users/register', newUser)
    // .then(res => console.log(res.data))
    // .catch(err => console.log(err));

  }

  render() {
    return (
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <div className="jumbotron">
                <h2 className="display-5 text-center mt-1 p-1">
                  Create your SkyWire account
                  </h2>
                <p className="lead text-center"></p>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg" placeholder="Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                      required />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Email Address"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input type="password"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      required />
                  </div>
                  <div className="form-group">
                    <input type="password"
                      className="form-control form-control-lg"
                      placeholder="Confirm Password"
                      name="password2"
                      value={this.state.password2}
                      onChange={this.onChange}
                      required />
                  </div>
                  <input type="submit" className="btn btn-info btn-block mt-4" />
                </form>
              </div>
              <p className="text-center md-8 p-4">
                Already have an account?{" "}
                <a className="signupLinkStyle text-info" href="/login">
                  Log in here
              </a>
              </p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Signup;
