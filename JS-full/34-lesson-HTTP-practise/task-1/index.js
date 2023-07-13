const baseUrl = 'https://64abe8419edb4181202ec69a.mockapi.io/login-form/user';
const emailInputEl = document.querySelector('[type=email]');
const userNameInputEl = document.querySelector('[type=text]');
const passwordInputEl = document.querySelector('[type=password]');
const registerButton = document.querySelector('.submit-button');
registerButton.disabled = true;
const loginForm = document.querySelector('.login-form');

const getUser = () => {
  return fetch(baseUrl).then((response) => response.json());
};
const postUser = (data) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
const onUserValidity = () => {
  if (loginForm.reportValidity() === true) {
    registerButton.removeAttribute('disabled');
  }
};
const onCreateUser = () => {
  const formData = Object.fromEntries(new FormData(loginForm));
  alert(JSON.stringify(formData));
  postUser(formData);
};

const onResetForm = (event) => {
  event.preventDefault();
  event.reset();
};
loginForm.addEventListener('input', onUserValidity);
registerButton.addEventListener('click', onCreateUser);

registerButton.addEventListener('reset', onResetForm);

getUser();
