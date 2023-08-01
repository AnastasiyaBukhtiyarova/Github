const baseUrl = 'https://64b53125f3dbab5a95c6e5d0.mockapi.io/loginform/user';
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
