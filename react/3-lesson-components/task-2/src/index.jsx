import './styles.scss';
import './search.scss';
import Search from './Search';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const rootElement = document.querySelector('#root');

ReactDOM.render(<Search name="Bob" />, rootElement);
