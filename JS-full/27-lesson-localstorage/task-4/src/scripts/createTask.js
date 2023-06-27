import { renderTasks } from './renderer.js';
import { setItem, getItem } from './storage.js';
import { createTask, getTasksList } from './serverExchange.js';

export function onCreateTask() {
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
  console.log(newTask);
  createTask(newTask)
    .then(() => getTasksList())
    .then(() => {
      setItem('tasksList', newTask);

      renderTasks();
    });
}
