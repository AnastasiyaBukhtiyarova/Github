'use strict';

const user = JSON.stringify({
  name: 'new@email.com',
  firstName: 'John',
  lastName: 'Doe',
  age: 17,
  id: '1',
});
//export
const parseUser = (user) => {
  try {
    return JSON.parse(user);
  } catch (err) {
    return null;
  }
};
console.log(parseUser(user));
