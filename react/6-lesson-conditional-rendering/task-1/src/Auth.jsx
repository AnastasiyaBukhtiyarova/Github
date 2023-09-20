import React, { Component } from 'react';
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
  

    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div>
          {this.state.isLoggedIn ? (
            <Logout onLogout={() => this.handleLogout()} />
          ) : (
            <Login onLogin={() => this.handleLogIin()} />
          )}
        </div>
      </div>
    );
  }
}

export default Auth;
