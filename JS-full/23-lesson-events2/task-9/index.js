const el = document.querySelector('.task-status');
const func = (event) => {
  console.log(event.target.checked);
};
el.addEventListener('change', func);