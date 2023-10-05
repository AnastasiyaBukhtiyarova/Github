import React, { Component } from 'react';
import './index.scss';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', () => {
      this.setState({
        status: true,
      });
    });
    window.addEventListener('offline', () => {
      this.setState({
        status: false,
      });
    });
  }
  render() {
    return <div className="status status_offline">{this.state.status}</div>;
  }
}
export default ConnectionStatus;
