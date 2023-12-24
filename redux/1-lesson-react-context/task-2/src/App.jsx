import React, { Component } from 'react';
import Header from './Header';
import { userData, Users } from './context.js';
class App extends Component {
  state = {
    userData: {
      name: 'Nikola Tesla',
      avatarUrl: 'https://avatars3.githubusercontent.com/u10001',
    },
  };

  render() {
    return (
      <Users.Provider value={this.state.userData}>
        <div className="page">
          <Header></Header>
        </div>
      </Users.Provider>
    );
  }
}
export default App;
