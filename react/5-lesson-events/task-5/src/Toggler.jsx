import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'Off',
    };
  }
  switchStatus() {
    if (this.state.status === 'Off') {
      return this.setState({
        status: 'On',
      });
    }
    return this.setState({
      status: 'Off',
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
export default Toggler;
