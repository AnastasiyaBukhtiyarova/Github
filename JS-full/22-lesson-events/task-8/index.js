const el = document.querySelector('.text-input');
const func = (event) => {
  console.log(event.target.value);
};
el.addEventListener('change', func);
