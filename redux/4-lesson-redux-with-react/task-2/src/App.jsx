import React from 'react';
import Users from './users/Users.jsx';
import './index.scss';
import store from './store.js'
import { Provider } from 'react-redux';
const App = () => {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
};
export default App;
