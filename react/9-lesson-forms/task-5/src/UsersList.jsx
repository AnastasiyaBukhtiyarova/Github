import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';
class UsersList extends Component {
  state = {
    value: '',
    count: 0,
    filteredUser: this.props.users,
  };
  handleInput = (event) => {
    let users = this.props.users.filter((user) =>
      user.name.toLowerCase().match(event.target.value.toLowerCase())
    );

    console.log(users);

    this.setState({
      value: event.target.value,
      filteredUser: users,
      count: users.length,
    });
  };
  render() {
    return (
      <div>
        <Filter
          filterText={this.state.value}
          onChange={this.handleInput}
          count={this.state.count}
        />

        <ul className="users">
          {this.state.filteredUser.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}
export default UsersList;
