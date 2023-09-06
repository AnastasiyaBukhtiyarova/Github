import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';
import moment from 'moment';
const rootElement = document.querySelector('#root');

ReactDOM.render(
  <Greeting
    firstName={'John'}
    lastName={'Doe'}
    birthDate={moment('05092006', 'DDMMYYYY')}
  />,
  rootElement
);
