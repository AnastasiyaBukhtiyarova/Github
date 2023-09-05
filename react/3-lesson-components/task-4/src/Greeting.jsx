import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import moment from 'moment';
//const rootElement = document.querySelector('#root');
const Greeting = (props) => {
  return (
    <div className="greeting">
      My name is {props.firstName} {props.lastName}. I am {props.birthDate}{' '}
      years old
    </div>
  );
};

export default Greeting;
