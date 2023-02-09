/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

const pickProps = (obj, props) => {
  
  let res = {};
  for (let keys in obj) {
    return keys;
  }
  return res;
};
const user = {
  name: 'Ana',
  age: 25,
  favColor: 'orange',
  favAnimal: 'cat',
  favFood: 'desserts',
  favDrink: 'tea',
  hobby: 'sport',
  car: 'rolls roys',
  cartoon: 'shreck',
  music: 'cello',
  series: 'Wednesday',
};
const arr = ['favDrink', 'music', 'favFood'];
const newArr = arr.split(' ');
console.log(newArr);
pickProps(user, arr);
