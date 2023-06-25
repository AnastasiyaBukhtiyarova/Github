import { initTodoListHandlers } from './toDoList.js';
import { renderTasks } from './renderer.js';

import { deleteTask, getTasksList } from './serverExchange.js';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then((tasksList) => {
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
