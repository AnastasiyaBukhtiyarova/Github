const el = document.querySelector('.btn');
const el1 = document.querySelector('button+button');
const handleClick = (event) => {
  console.log(event.target.textContent);
};
el.addEventListener('click', handleClick);
el1.addEventListener('click', handleClick);
