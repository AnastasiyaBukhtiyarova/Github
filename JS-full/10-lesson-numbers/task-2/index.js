/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

const concatProps = (obj) => {
  // put your code here
  let toArr = [];
  for (const value in obj) {
    toArr = toArr.concat(obj[value]);
  }
  return toArr;
};

const usersProfile = {
  name: 'Ed',
  age: 26,
  interests: 'books',
  job: 'ruby dev',
  sex: 'male',
  country: 'ukrainian',
  birthday: '11.04.1996',
};
const toArr = concatProps(usersProfile);
console.log(toArr);
/* examples
concatProps({ name: 'John Doe', age: 17, interest: 'football' }); // ==> ['John Doe', 17, 'football'] */
