import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting';
import moment from 'moment';
const rootElement = document.querySelector('#root');
const user = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: moment('05092006', 'DDMMYYYY'),
};
ReactDOM.render(
  <Greeting
    /* firstName={'John'}
    lastName={'Doe'}
    birthDate={-moment('05092006', 'DDMMYYYY').diff(moment(), 'years')}
    */
    firstName={user.firstName}
    lastName={user.lastName}
    birthDate={-user.birthDate.diff(moment(), 'years')}
  />,
  rootElement
);
