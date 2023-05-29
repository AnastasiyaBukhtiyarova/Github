import { getItem } from './storage.js';

const listElem = document.querySelector('.list');

/*const createCheckbox = ({ done, id }) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');

  checkboxElem.setAttribute('data-id', id);
  checkboxElem.checked = done;
  checkboxElem.dataset.id = Math.random().toString();

  checkboxElem.classList.add('list__item-checkbox');

};
*/
const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  const checkboxElem = document.createElement('input');

  checkboxElem.checked = done;
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.classList.add('list__item-checkbox');
  if (done) {
    listItemElem.classList.add('list__item_done');
  }

  const onClickCheckbox = () => {
    if (checkboxElem.checked) {
      checkboxElem.setAttribute('data-id', id);
      checkboxElem.dataset.id = Math.random().toString();
      listItemElem.classList.add('list__item_done');
    } else if (!checkboxElem.checked) {
      checkboxElem.removeAttribute('data-id');
      listItemElem.classList.remove('list__item_done');
    }
  };

  checkboxElem.addEventListener('click', onClickCheckbox);

  listItemElem.append(checkboxElem, text);

  return listItemElem;
};

export const renderTasks = () => {
  const tasksList = getItem('tasksList') || [];
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(createListItem);

  listElem.append(...tasksElems);
};
