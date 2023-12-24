import React, { Component } from 'react';
import Header from './Header';
import userData, { Users } from './context.js';
class App extends Component {
  state = {
    name: 'google',
    avatarUrl: 'https://avatars.githubusercontent.com/u/1342004?v=4',
  };

  render() {
    return (
      <Users.Provider value={this.state}>
        <div className="page">
          <Header></Header>
        </div>
      </Users.Provider>
    );
  }
}
export default App;
