const userAvatar = document.querySelector('.user__avatar');
const userName = document.querySelector('.user__name');
const userLocation = document.querySelector('.user__location');
const clickButton = document.querySelector('.btn');
const inputElement = document.querySelector('.name-form__input');
const defaultAvatar =
  'https://img3.akspic.ru/previews/5/5/4/1/7/171455/171455-zhivopis-illustracia-art-voda-oblako-500x.jpg';
userAvatar.src = defaultAvatar;

const userDataFetch = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`).then(
    (fetchRequest) => fetchRequest.json()
  );
};

const getUserNameData = (userData) => {
  // console.log(userData);
  const { avatar_url, location, name } = userData;
  userAvatar.src = avatar_url;
  userName.textContent = name;
  userLocation.textContent = location ? `from ${location}` : '';
};
const onSearchUser = () => {
  const userName = inputElement.value;
  userDataFetch(userName).then((userData) => getUserNameData(userData));
};

clickButton.addEventListener('click', onSearchUser);
