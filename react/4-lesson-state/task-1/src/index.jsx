import React from 'react';
import App from './App.jsx'
import ReactDOM from 'react-dom';
import './index.scss';

const rootElement = document.querySelector('#root');
//const element = <div className="counter">17</div>;
 ReactDOM.render(<App />, rootElement)