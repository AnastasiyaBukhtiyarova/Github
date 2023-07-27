'use strict';

const user = {
  name: 'new@email.com',
  firstName: 'John',
  lastName: 'Doe',
  age: 17,
  id: '1',
};
//export
const parseUser = (user) => {
  try {
   console.log(JSON.parse(JSON.stringify(user)));
  } catch (err) {
    console.log('null');
  }
};
parseUser(user);
