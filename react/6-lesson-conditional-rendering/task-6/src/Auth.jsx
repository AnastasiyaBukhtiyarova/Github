import React, { Component } from 'react';
import { StrictMode } from 'react';
import Login from './Login';
import Logout from './Logout';
import Greeting from './Greeting';

import './index.scss';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = function handleLogIin() {
    return this.setState({
      isLoggedIn: true,
    });
  };
  handleLogout = function handleLogout() {
    return this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    let button;
    /* if (this.state.isLoggedIn) {
      button = <button onClick={() => this.handleLogout()}>Logout</button>;
    } else {
      button = <button onClick={() => this.handleLogin()}>Login</button>;
    }
    */
    if (this.state.isLoggedIn) {
      button = <Logout />;
    } else {
      button = <Login />;
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
