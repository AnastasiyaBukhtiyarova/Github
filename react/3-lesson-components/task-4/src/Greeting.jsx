import React from 'react';
import './index.scss';
import moment from 'moment';

const Greeting = (props) => {
  const age = moment().diff(props.birthDate, 'years');
  return (
    <div className="greeting">
      My name is {props.firstName} {props.lastName}. I am {' '}
      {age} years old
    </div>
  );
};

export default Greeting;
