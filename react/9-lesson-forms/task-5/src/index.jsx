import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Game from './Game';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <Game />
  </StrictMode>
);
