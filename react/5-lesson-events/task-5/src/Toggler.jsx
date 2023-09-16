import React, { Component } from 'react';

class ButtonStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'off',
    };
  }
  switchStatus() {
    if (this.state.status === 'off') {
      return this.setState({
        status: 'on',
      });
    }
    return this.setState({
      status: 'off',
    });
  }

  render() {
    return (
      <div className="toggler" onClick={() => this.switchStatus()}>
        *{this.state.status} status here*
      </div>
    );
  }
}
export default ButtonStatus;
