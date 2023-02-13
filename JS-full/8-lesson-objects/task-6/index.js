/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

const pickProps = (obj, props) => {
  let filtered = {};

  for (let i = 0; i < props.length; i++) {
    let item = obj[props[i]];
    if (item) filtered[props[i]] = item;
  }

  return filtered;
};
const user = {
  name: 'Ana',
  age: 25,
  favColor: 'orange',
  favAnimal: 'cat',
  favFood: 'pizza',
  favDrink: 'tea',
  hobby: 'sport',
  car: 'rolls roys',
  cartoon: 'pussy in boots',
  music: 'cello',
  series: 'Wednesday',
};
const arr = ['favDrink', 'music', 'favFood'];
console.log(pickProps(user, arr));
