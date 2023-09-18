import React, { Component } from 'react';
import Greeting from './Greeting';
class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  onLogin() {
    return this.setState({
      isLoggedIn: true,
    });
  }
  onLogout() {
    return this.setState({
      isLoggedIn: false,
    });
  }
  render() {
    let button;
    if (this.state.isLoggedIn) {
      button = <button onClick={() => this.onLogout()}>Logout</button>;
    } else {
      button = <button onClick={() => this.onLogin()}>Login</button>;
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
