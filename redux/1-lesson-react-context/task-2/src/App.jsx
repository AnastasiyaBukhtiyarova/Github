import React, { Component } from 'react';
import Header from './Header';
import { users } from './context.js';
class App extends Component {
  state = {
    users,
  };
  render() {
    return (
      <div className="page">
        <Header></Header>
      </div>
    );
  }
}
export default App;
