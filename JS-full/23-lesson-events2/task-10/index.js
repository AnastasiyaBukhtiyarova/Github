const el = document.querySelectorAll('.pagination__page');
const handleClick = (event) => {
  console.log(event.target.dataset.pageNumber);
};
el.forEach((el) => {
  el.addEventListener('click', handleClick);
});
