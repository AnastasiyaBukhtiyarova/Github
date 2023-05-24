import { getItem } from './storage.js';

const listElem = document.querySelector('.list');
const compareTasks = (a, b) => {
  if (a.done - b.done !== 0) {
    return a.done - b.done;
  }
  if (a.done) {
    return new Date(b.finishDate) - new Date(a.finishDate);
  }
  return new Date(b.createDate) - new Date(a.createDate);
};
const createCheckbox = ({ done }) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');

  checkboxElem.checked = done;

  return checkboxElem;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  const checkboxElem = createCheckbox({ done });

  if (done) {
    listItemElem.classList.add('list__item_done');
  }
  listItemElem.setAttribute('data-id', `${done}`);
  const onClickCheckbox = () => {
    checkboxElem.checked
      ? listItemElem.classList.add('list__item_done')
      : listItemElem.classList.remove('list__item_done');
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
export { renderTasks };
