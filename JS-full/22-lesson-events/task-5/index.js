const el = document.querySelector('.search__btn');
el.addEventListener('click', () => {
  const elem = document.querySelector('.search__input');
  console.log(elem.value);
});
