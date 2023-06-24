import { onCreateTask } from './createTask.js';
import { onToggleTask } from './updateTask.js';
import { deleteTask, getTasksList } from './serverExchange.js';
import { setItem } from './storage.js';
import { renderTasks } from './renderer.js';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onToggleTask);
};
export const onClickDeleteBtn = (e) => {
  const taskId = e.target.dataset.id;
  deleteTask(taskId)
    .then(getTasksList)
    .then((newTasksList) => setItem('tasksList', newTasksList));
  renderTasks();
};
