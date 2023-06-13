'use strict';

/**
 * @param {string} userId
 * @return {promise}
 */
 const requestUserData = (userId) => {
  const promise = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 20,
          userId,
          email: `${userId}@gmail.com`,
        });
      }, 1000);
    }
  });
  return promise;
};
const result = requestUserData('user')
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
