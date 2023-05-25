import { getItem } from './storage.js';

const listElem = document.querySelector('.list');
const compareTasks = (a, b) => {
  if (a.done - b.done !== 0) return a.done - b.done;
};

const createListItem = ({ text, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  listItemElem.setAttribute('data-id', id);

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
export { renderTasks };
