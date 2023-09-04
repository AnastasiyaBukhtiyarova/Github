import React from 'react';
import './comment.scss';
import './index.scss';
import moment from 'moment';

import UserInfo from './UserInfo';

const rootElement = document.querySelector('#root');

const userInfo = {
  name: 'Tom',
  avatartUrl: 'https://avatars1.githubusercontent.com',
};
const formatDate = (date) => moment(date).format('DD MMM YYYY');

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo user={props.author} />
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;

ReactDOM.render(
  <Comment user={userInfo} text="Good job!" date={new Date()} />,
  rootElement
);