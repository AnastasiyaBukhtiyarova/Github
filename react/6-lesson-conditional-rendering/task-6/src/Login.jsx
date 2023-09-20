import React, { Component } from 'react';
import Auth from './Auth';

const Login = (props) => {
  return <button onClick={props.onLogin}>Login</button>;
};

export default Login;
