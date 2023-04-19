const el1 = document.querySelector('button[data-page-number ="1"]');
const el2 = document.querySelector('button[data-page-number ="2"]');
const el3 = document.querySelector('button[data-page-number ="3"]');

const handleClick = (event) => {
  console.log(event.target.dataset.pageNumber);
};
el1.addEventListener('click', handleClick);
el2.addEventListener('click', handleClick);
el3.addEventListener('click', handleClick);