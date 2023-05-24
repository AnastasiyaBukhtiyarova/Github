import { setItem, getItem } from './storage.js';
import { renderTasks } from './renderer.js';

export const onToggleTask = (e) => {
  const isCheckbox = e.target.classlist.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }
  const tasksList = getItem('tasksList');
  const newTasksList = tasksList.map((task) => {
    if (task.id === e.target.dataset.id) {
      const done = e.target.checked;
      return {
        ...task,
        done,
        finishDate: done ? newDate().toISOString() : null,
      };
    }
    return task;
  });
  setItem('tasksList', newTasksList);
  renderTasks();
};
