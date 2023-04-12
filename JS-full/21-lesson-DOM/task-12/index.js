const squaredNumbers = () => {
  const element = document.querySelector('.number');
  element.dataset.squaredNumber = element.dataset.number ** 2;
  return element;
};
console.log(squaredNumbers());
