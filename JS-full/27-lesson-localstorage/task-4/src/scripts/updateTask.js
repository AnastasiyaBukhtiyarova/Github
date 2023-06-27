import { renderTasks } from './renderer.js';
import { getTasksList, updateTask } from './serverExchange.js';
import { setItem, getItem } from './storage.js';
import { deleteTask } from './serverExchange.js';

export const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');

  if (isCheckbox) {
    const tasksList = getItem('tasksList');
    const newTasksList = tasksList.map((task) => {
      if (task.id === e.target.dataset.id) {
        const done = e.target.checked;
        return {
          ...task,
          done,
          finishDate: done ? new Date().toISOString() : null,
        };
      }
      return task;
    });
    setItem('tasksList', newTasksList);

    renderTasks();
  }
};
