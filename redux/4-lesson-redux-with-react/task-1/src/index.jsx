import './index.scss';
import store from './store.js';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import { increment, decrement, reset } from './counter.actions.js';
import React from 'react';
import ReactDOM from 'react-dom';
const root = createRoot(document.querySelector('#root'));

root.render(<App />);
