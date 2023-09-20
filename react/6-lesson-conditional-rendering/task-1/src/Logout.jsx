import React, { Component } from 'react';
import Auth from './Auth';

const Logout = (props) => {
  return <button onClick={props.onLogout}>Logout</button>;
};

export default Logout;
