const baseUrl = 'https://64abe8419edb4181202ec69a.mockapi.io/login-form/user';
const registerButton = document.querySelector('.submit-button');
const loginForm = document.querySelector('.login-form');

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
  } else {
    registerButton.setAttribute('disabled', true);
  }
  console.log(loginForm.reportValidity());
};
const onCreateUser = () => {
  const formData = Object.fromEntries(new FormData(loginForm));
  alert(JSON.stringify(formData));
};

const onResetForm = (event) => {
  event.preventDefault();
  event.reset();
};
loginForm.addEventListener('input', onUserValidity);
registerButton.addEventListener('click', onCreateUser);

registerButton.addEventListener('reset', onResetForm);
