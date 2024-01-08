import './index.scss';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';

import React from 'react';

const root = createRoot(document.querySelector('#root'));

root.render(<App />);
