const listElem = document.querySelector('.list');

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.setAttribute('data-id', `${done}`);
      const onClickCheckbox = () => {
        checkbox.checked
          ? listItemElem.classList.add('list__item_done')
          : listItemElem.classList.remove('list__item_done');
      };
      checkbox.addEventListener('click', onClickCheckbox);

      checkbox.classList.add('list__item-checkbox');

      listItemElem.append(checkbox, text);
      return listItemElem;
    });

  listElem.append(...tasksElems);
};

export { renderTasks };
