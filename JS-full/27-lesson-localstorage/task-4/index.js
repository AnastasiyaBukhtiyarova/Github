localStorage.clear();

const listElem = document.querySelector('.list');
const compareTasks = (a, b) => {
  if (a.done - b.done !== 0) return a.done - b.done;
};

const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getItem = (key) => JSON.parse(localStorage.getItem(key));

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  listItemElem.setAttribute('data-id', id);
  checkboxElem.checked = done;
  if (done) {
    listItemElem.classList.add('list__item_done');
  }
  const onClickCheckbox = () => {
    if (checkboxElem.checked) {
      listItemElem.dataset.id = true;
      listItemElem.classList.add('list__item_done');
    } else {
      listItemElem.dataset.id = false;
      listItemElem.classList.remove('list__item_done');
    }
  };
  checkboxElem.addEventListener('click', onClickCheckbox);
  checkboxElem.classList.add('list__item-checkbox');
  listItemElem.append(checkboxElem, text);
  return listItemElem;
};

const renderTasks = () => {
  const tasksList = getItem('tasksList') || [];
  listElem.innerHTML = '';
  const tasksElems = tasksList.sort(compareTasks).map(createListItem);

  listElem.append(...tasksElems);
};
const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;
  if (!text) {
    return;
  }
  taskTitleInputElem.value = '';
  const tasksList = getItem('tasksList') || [];
  const newTasksList = tasksList.concat({
    text,
    done: false,
  });
  setItem('tasksList', newTasksList);
  renderTasks();
};
const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains('.task-input');
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
      };
    }
    return task;
  });
  setItem('tasksList', newTasksList);
  renderTasks();
};
const initToDoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  const toDoListElem = document.querySelector('.list');
  toDoListElem.addEventListener('click', onToggleTask);
};
document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initToDoListHandlers();
});
const onStorageChange = (e) => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};
window.addEventListener('storage', onStorageChange);
