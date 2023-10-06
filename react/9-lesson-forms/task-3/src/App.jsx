import React, { Component } from 'react';
import UserForm from './UserForm';

class App extends Component {
  createUser = (props) => {
    console.log(props);
  };
  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}
export default App;
