import { renderTasks } from './events.js';

import { tasks } from './events.js';

Document.addEventListener('DOMContentLoaded', () => {
  renderTasks(tasks);
});
