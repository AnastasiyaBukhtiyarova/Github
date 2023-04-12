const finishForm = () => {
  const element = document.querySelector('.login-form');
  const newInput = document.createElement('input');
  newInput.setAttribute('type', 'text');
  newInput.setAttribute('name', 'login');
  const changeElement = document.querySelector('input[name=password');
  changeElement.setAttribute('type', 'password');
  return element.before(newInput);
};
console.log(finishForm());
//export { finishForm };
