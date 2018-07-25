import React from "react";
import Login from "../components/Login";
import Landing from "../components/Landing";
import Signup from "./Signup";

class Route extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.renderSwitch(window.location.hash)
    };
    this.renderSwitch = this.renderSwitch.bind(this);
    this.routeSwitch = this.routeSwitch.bind(this);
  }

  componentDidMount() {
    window.addEventListener("hashchange", this.routeSwitch);
    this.setState({ user: this.props.user });
  }

  routeSwitch() {
    this.setState({
      page: this.renderSwitch(window.location.hash)
    });
  }

  renderSwitch(pathname) {
    switch (pathname) {
      // case "#about":
      //   return <About />;
      case "#home":
        return <Landing />;
      case "#login":
        return <Login />;
      // case "#profile":
      //   return <Profile />;
      case "#signup":
        return <Signup />;
      // case "#user":
      //   return <User />;
      case "#post":
      //   return <Post />;
      default:
        return <Landing />;
    }
  }

  render() {
    return <div>{this.state.page}</div>;
  }
}

export default Route;
