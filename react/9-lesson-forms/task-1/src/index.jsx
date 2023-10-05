import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Search from './Search';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <Search />
  </StrictMode>
);
