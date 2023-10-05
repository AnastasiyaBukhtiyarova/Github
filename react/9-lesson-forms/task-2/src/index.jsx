import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import UserForm from './UserForm';
import App from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <UserForm />
  </StrictMode>
);
