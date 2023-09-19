import React, { Component } from 'react';
import Greeting from './Greeting';
class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  handleLogIin() {
    return this.setState({
      isLoggedIn: true,
    });
  }
  handleLogout() {
    return this.setState({
      isLoggedIn: false,
    });
  }
  render() {
    let button;
    if (this.state.isLoggedIn) {
      button = <button onClick={() => this.handleLogout()}>Logout</button>;
    } else {
      button = <button onClick={() => this.handleLogin()}>Login</button>;
    }
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div>{button}</div>
      </div>
    );
  }
}

export default Auth;
