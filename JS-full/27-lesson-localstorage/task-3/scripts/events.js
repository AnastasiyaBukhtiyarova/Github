import { setItem, getItem } from './storage.js';
import { renderTasks } from './render.js';

const createButton = document.querySelector('.create-task-btn');
const inputEl = document.querySelector('.task-input');

const tasks = getItem('tasksList') || [];

const handleAddTask = (tasksList) => {
  const newTasks = {
    text: inputEl.value,
    done: false,
  };
  tasks.push(newTasks);
};

setItem('tasksList', tasks);

tasks.filter((el) => {
  if (el.text === inputEl.value && el.text.length != '') {
    renderTasks([el]);
  }
});
createButton.addEventListener('click', handleAddTask);
Document.addEventListener('DOMContentLoaded', () => {
  renderTasks(tasks);
});

const onStorageChange = (e) => {
  if (e.key === 'tasks') renderTasks(tasks);
};
window.addEventListener('storage', onStorageChange);
renderTasks(tasks);
export { handleAddTask, tasks, renderTasks };
