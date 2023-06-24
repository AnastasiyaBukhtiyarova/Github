import { renderTasks } from './renderer.js';
import { getTasksList, updateTask } from './serverExchange.js';
import { setItem, getItem } from './storage.js';

export const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');

  if (isCheckbox) {
    return;
  }

  const tasksList = getItem('tasksList');
  const taskId = e.target.dataset.id;
  const done = e.target.checked;
  const { text, createDate } = tasksList.find((task) => task.id === taskId);

  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
