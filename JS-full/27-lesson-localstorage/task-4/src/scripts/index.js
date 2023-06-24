import { initTodoListHandlers } from './toDoList.js';
import { renderTasks } from './renderer.js';

import {  getTasksList,updateTask } from './serverExchange.js';


document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then((tasksList) => {
    // getItem('tasksList');
    // console.log(tasksList);
    renderTasks();
  });
  initTodoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);
