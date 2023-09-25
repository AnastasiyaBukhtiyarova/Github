import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Page from './Page';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <Page />
  </StrictMode>
);
