import { onCreateTask } from './createTask.js';
import { onToggleTask } from './updateTask.js';
import { deleteTask, getTasksList } from './serverExchange.js';
import { renderTasks } from './renderer.js';
import { setItem, getItem } from './storage.js';

const onDeleteBtn = (e) => {
  const isDeleteButton = e.target.classList.contains('list__item-delete-btn');
  const taskId = e.target.dataset.id;

  if (isDeleteButton) {
    return;
  }
  const tasksList = getItem('tasksList');
  const { text, createDate } = tasksList.find((task) => task.id === taskId);
  const done = e.target.checked;
  const updatedTask = {
    taskId,
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };
  deleteTask(taskId)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

const onListClick = (e) => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');

  const isDeleteButton = e.target.classList.contains('list__item-delete-btn');

  if (isDeleteButton) {
    onDeleteBtn(e);
  } else if (isCheckbox) {
    onToggleTask(e);
  }
};
export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.list');
  // todoListElem.addEventListener('click', onToggleTask);
  todoListElem.addEventListener('click', onListClick);
};
