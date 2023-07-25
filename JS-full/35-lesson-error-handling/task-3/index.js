import { fetchUserData, fetchRepositories } from './gateways.js';
import { renderRepos, clearReposList } from './repos.js';
import { renderUserData } from './user.js';
import { showSpinner, hideSpinner } from './spinner.js';

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};
renderUserData(defaultUser);
const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');
const listElem = document.querySelector('.repo-list');
const onSearchUser = () => {
  showSpinner();
  clearReposList();
  listElem.innerHTML = '';
  const userName = userNameInputElem.value;
  fetchUserData(userName)
    .then((userData) => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then((url) => {
      return fetchRepositories(url);
    })
    .then((reposList) => {
      renderRepos(reposList);
    })

    .catch((err) => {
      alert(err.message);
    })
    .finally(() => {
      hideSpinner();
    });
};
showUserBtnElem.addEventListener('click', onSearchUser);
