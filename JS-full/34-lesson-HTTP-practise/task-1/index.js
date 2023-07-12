const baseUrl = 'https://64abe8419edb4181202ec69a.mockapi.io/login-form/user';
const emailInputEl = document.querySelector('[type=email]');
const userNameInputEl = document.querySelector('[type=text]');
const passwordInputEl = document.querySelector('[type=password]');
const registerButton = document.querySelector('.submit-button');
const loginForm = document.querySelector('.login-form');

const getUser = () => {
  return fetch(baseUrl).then((response) => response.json());
};
const recordUser = (data) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

const createUser = () => {
  const formData = Object.fromEntries(new FormData(loginForm));
  alert(JSON.stringify(formData));
  recordUser(formData);
};
const onUserValidity = () => {
  if (loginForm.reportValidity() === true) {
    createUser();
    registerButton.removeAttribute('disabled');
  }
};
const onResetForm = (event) => {
  event.reset();
};
registerButton.addEventListener('click', onUserValidity);
registerButton.addEventListener('reset', onResetForm);

getUser();
