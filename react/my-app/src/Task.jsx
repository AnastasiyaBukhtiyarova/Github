import React from 'react';

import classNames from 'classnames';
const Task = ({ done, text, onChange, id,onDelete }) => {
  return (
    <li
      className={classNames('list-item', {
        'list-item_done list-item__text': done,
      })}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      {text}
      <button className="list-item__delete-btn" onClick={()=> onDelete(id)}></button>
    </li>
  );
};
export default Task;
