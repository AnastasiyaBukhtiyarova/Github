import React from 'react';
import UserInfo from './users/UserInfo'
import SearchField from './users/SearchField'
import './index.scss';
import store from './store.js'
import { Provider } from 'react-redux';
const App = () => {
  return (
    <div className='page'>
      <Provider store={store}>
        <UserInfo />
        <SearchField />
      </Provider>
    </div>
  );
};
export default App;
