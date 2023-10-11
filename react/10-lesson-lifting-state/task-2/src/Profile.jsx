import React, { Component } from 'react';
import UserForm from './UserForm';
const Profile = ({ firstName, lastName, handleChange }) => {
  return (
    <div className="column">
      <UserForm firstName={firstName} lastName={lastName} handleChange={handleChange} />
    </div>
  );
};
export default Profile;
