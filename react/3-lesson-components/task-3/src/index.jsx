import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';

import './index.scss';

const rootElement = document.querySelector('#root');

const userInfo = {
  name: 'Tom',
  avatartUrl: 'https://avatars1.githubusercontent.com',
};
ReactDOM.render(
  <Comment user={userInfo} text="Good job!" date={new Date()} />,
  rootElement
);
