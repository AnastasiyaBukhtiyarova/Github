const tasks = [];

const listElem = document.querySelector('.list');
const inputEl = document.querySelector('.task-input');

const createButton = document.querySelector('.create-task-btn');

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
  
  localStorage.getItem('tasks');
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
localStorage.setItem('tasks', JSON.stringify(renderTasks(tasks)));