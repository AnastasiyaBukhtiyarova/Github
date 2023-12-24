import React, { Component } from 'react';
import Header from './Header';
import { userData, Users } from './context.js';
class App extends Component {
  state = {
    user: userData,
  };

  render() {
    return (
      <Users.Provider value={this.state.user}>
        <div className="page">
          <Header></Header>
        </div>
      </Users.Provider>
    );
  }
}
export default App;
