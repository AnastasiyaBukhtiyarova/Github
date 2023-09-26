import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: null,
      processing: false,
    };
  }

  login = () => {
    this.setState({
      processing: true,
    });
    setTimeout(() => {
      this.setState({
        processing: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  logout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { processing, isLoggedIn } = this.state;

    if (processing) {
      return <Spinner size={24} />;
    }

    if (isLoggedIn) {
      return <Logout onLogout={this.logout} />;
    }
    return <Login onLogin={this.login} />;
  }
}

export default Auth;
