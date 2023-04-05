'use strict';

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = (tasksList) => {
  // put your code here
  const listElem = document.querySelector('.list');
  const listItemsElem = tasksList.map((itemText) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');
    const checkboxElem = document.createElement('input');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.classList.add('list__item-checkbox');
    listItemElem.append(checkboxElem, itemText);

    return listItemElem;
  });
  return listElem.append(...listItemsElem);
};
console.log(renderTasks(tasks));
export { tasks };
