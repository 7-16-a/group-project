import React from "react";
import Login from './components/Login';


class Route extends React.Component {

constructor(props){
  super(props);
  this.state = {
    page: this.renderSwitch(window.location.hash)
  };
  this.renderSwitch = this.renderSwitch.bind(this);
  this.routeSwitch = this.routeSwitch.bind(this);
}

componentDidMount() {
    window.addEventListener("hashchange", this.routeSwitch);
    this.setState({user: this.props.user})
}

routeSwitch() {
  this.setState({
    page: this.renderSwitch(window.location.hash)
    });
}

  renderSwitch(pathname) {
    switch(pathname) {
      case "#about":
        return <About />;
      case "#home":
        return <Landing />;
      case "#login":
        return <Login />;
      case "#profile":
        return <Profile />;
      case "#result":
        return <Result />;
      case "#signup":
        return <Signup />;
      case "#list":
        return <List />;
      case "#user":
        return <User />;
      case "#error1":
        return <Error1 />;
      case "#error2":
        return <Error2 />;
      case "#error3":
        return <Error3 />;
      case "#error6":
        return <Error6 />;
      default:
        return <Landing />;
    }
  }

  render() {
    return(
      <div>
      {this.state.page}
      </div>
    )
  }
}

export default Route;
