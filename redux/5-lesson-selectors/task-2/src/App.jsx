import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './index.scss';
import TransferList from './options/TransferList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <TransferList />
      </div>
    </Provider>
  );
};

export default App;
