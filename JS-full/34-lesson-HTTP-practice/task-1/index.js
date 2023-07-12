const baseUrl = 'https://64abe8419edb4181202ec69a.mockapi.io/login-form/user';
const emailInputEl = document.querySelector('[type=email]');

const userNameInputEl = document.querySelector('[type=text]');

const passwordInputEl = document.querySelector('[type=password]');
//userNameInputEl.textContent = userNameInputEl.value;
//emailInputEl.textContent = emailInputEl.value;
//passwordInputEl.textContent = passwordInputEl.value;

const userData = {
  email: emailInputEl.value,
  username: userNameInputEl.value,
  password: passwordInputEl.value,
};

const loginForm = document.querySelector('.login-form');
const createUser = (e) => {
  e.preventDefault();
  console.log(new FormData(e));
};

const postRequest = (data) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
const getUser = () => {
  return fetch(baseUrl).then((response) => response.json());
};

const registerButton = document.querySelector('.submit-button');
