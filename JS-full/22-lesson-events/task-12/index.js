const squaredNumbers = () => {
  const el = document.querySelectorAll('.number');
  el.forEach((el) => {
    el.dataset.squaredNumber = el.dataset.number ** 2;
    console.log(el);
  });
};
console.log(squaredNumbers());
