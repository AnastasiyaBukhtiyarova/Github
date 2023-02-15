/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */
const user = {
  name: 'Sam',
};
const id = '12';
function addPropertyV1(userData, userId) {
  // put your code here
  userData.id = userId;
  return userData;
}

console.log(addPropertyV1(user, id));

function addPropertyV2(userData, userId) {
  return Object.assign(((userData.id = userId), userData));
}
console.log(addPropertyV2(user, id));

function addPropertyV3(userData, userId) {
  const a = Object.assign({}, userData);
  a.id = userId;
  return a;
}
console.log(addPropertyV3(user, id));

function addPropertyV4(userData, userId) {
  const { ...copied } = userData;
  copied.id = userId;
  return copied;
}
console.log(addPropertyV4(user, id));
