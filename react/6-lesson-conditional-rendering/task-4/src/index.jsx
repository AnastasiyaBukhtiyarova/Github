import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Status from './Status';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <Status />
  </StrictMode>
);
