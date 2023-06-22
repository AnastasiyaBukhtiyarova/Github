import { initTodoListHandlers } from './toDoList.js';
import { renderTasks } from './renderer.js';

import {
  createTask,
  getTasksList,
  updateTask,
  deleteTask,
} from './serverExchange.js';
import { setItem, getItem } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then((tasksList) => {
    setItem('tasksList', tasksList);
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
