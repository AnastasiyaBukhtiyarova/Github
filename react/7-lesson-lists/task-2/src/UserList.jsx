import React from 'react';
const UserList = ({ users }) => {
  return (
    {
      users.map(user => <ul>
        <li>
          <span></span>
      </li>
    </ul>)}
  )
};
export default UserList;
