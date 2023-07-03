import { renderTasks } from './renderer.js';
import { setItem, getItem } from './storage.js';
import {
  createTask,
  getTasksList,
  updateTask,
  deleteTask,
} from './serverExchange.js';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');

  const text = taskTitleInputElem.value;
  if (!text) {
    return;
  }
  taskTitleInputElem.value = '';

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  };
  createTask(newTask)
    .then(() => getTasksList())
    .then((newTask) => {
      setItem('tasksList', newTask);
      renderTasks();
    });
};
