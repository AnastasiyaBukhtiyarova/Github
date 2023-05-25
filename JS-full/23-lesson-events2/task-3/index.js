const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');
const inputEl = document.querySelector('.task-input');
const createButton = document.querySelector('.create-task-btn');

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

const handleAddTask = (tasksList) => {
  const newTasks = {
    text: inputEl.value,
    done: false,
  };

  tasks.push(newTasks);
  tasks.filter((el) => {
    if (el.text === inputEl.value && el.text.length != '') {
      renderTasks([el]);
    }
  });
};

createButton.addEventListener('click', handleAddTask);

renderTasks(tasks);
