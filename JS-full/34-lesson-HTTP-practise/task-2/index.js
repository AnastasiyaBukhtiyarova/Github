const baseUrl = 'https://64b53125f3dbab5a95c6e5d0.mockapi.io/resourse';

export function getUsersList() {
  return fetch(baseUrl).then((response) => response.json());
}

export function getUserById(userId) {
  return fetch(`${baseUrl}/${userId}`).then((response) => response.json());
}

export function createUser(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
}

export function deleteUser(userId) {
  // put your code here

  return fetch(`${baseUrl}/${userId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function updateUser(userId, userData) {
  // put your code here
  return fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
}
getUsersList().then((users) => {
  console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
});

getUserById('2').then((userData) => {
  console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
});
const newUserData = {
  email: 'cool@email.com',
  firstName: 'Iron',
  lastName: 'Man',
  age: 42,
};

createUser(newUserData).then(() => {
  console.log('User created');
});

const updatedUserData = {
  email: 'new@email.com',
  firstName: 'John',
  lastName: 'Doe',
  age: 17,
};

updateUser('1', updatedUserData).then(() => {
  console.log('User updated');
});

deleteUser('2').then(() => {
  console.log('User updated');
});
