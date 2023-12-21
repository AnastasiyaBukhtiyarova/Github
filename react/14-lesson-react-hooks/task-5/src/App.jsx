import React, { Component, useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import Clock from './Clock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      visible: !this.state.visible,
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
        <div>
          {this.state.visible && <Clock location={'London'} offset={0} />}
          {this.state.visible && <Clock location={'Kyiv'} offset={2} />}
        </div>
      </div>
    );
  }
}

export default App;
