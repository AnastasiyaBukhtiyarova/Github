import { setItem, getItem } from './storage.js';
import { renderTasks } from './renderer.js';

export const onToggleTask = (event) => {
  const isCheckbox = event.target.classlist.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }
  const tasksList = getItem('tasksList');
  const newTasksList = tasksList.map((task) => {
    if (task.id === event.target.dataset.id) {
      const done = event.target.checked;
      return {
        ...task,
        done,
      };
    }
    return task;
  });
  setItem('tasksList', newTasksList);
  renderTasks();
};
