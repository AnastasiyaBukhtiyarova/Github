import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { getTasksList } from './serverExchange.js';
import { createTask } from './serverExchange.js';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');

  const text = taskTitleInputElem.value;
  if (!text) {
    return;
  }
  taskTitleInputElem.value = '';
 // const tasksList = getItem('tasksList');
  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then(() => {
      setItem('tasksList', newTask);

      renderTasks();
    });
};
