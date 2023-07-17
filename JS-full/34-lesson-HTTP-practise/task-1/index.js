const baseUrl = 'https://64abe8419edb4181202ec69a.mockapi.io/login-form/user';
const registerButton = document.querySelector('.submit-button');
const loginForm = document.querySelector('.login-form');

const postUser = (event) => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(loginForm));
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      alert(JSON.stringify(data));
      loginForm.reset();
    });
};
const onUserValidity = () => {
  if (loginForm.reportValidity() === true) {
    registerButton.removeAttribute('disabled');
  } else {
    registerButton.setAttribute('disabled', true);
  }
};

const onResetForm = (event) => {};
loginForm.addEventListener('input', onUserValidity);
registerButton.addEventListener('click', postUser);
