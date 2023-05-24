import { onCreateTask } from './createTask.js';

import { onToggleTask } from './updateTask.js';

export const initToDoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);
};
const toDoListElem = document.querySelector('.list');
toDoListElem.addEventListener('click', onToggleTask);
