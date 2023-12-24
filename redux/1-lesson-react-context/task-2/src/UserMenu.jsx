import React, { Component } from 'react';
import { Users } from './context.js';
class UserMenu extends Component {
  render() {
    return (
      <div className="menu">
        <span className="menu__greeting">{`Hello, ${this.context.name}`}</span>
        <img
          alt="User Avatar"
          src={this.context.avatarUrl}
          className="menu__avatar"
        />
      </div>
    );
  }
}
export default UserMenu;
UserMenu.contextType = Users;
