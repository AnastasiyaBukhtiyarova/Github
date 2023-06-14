/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

const makePromise = (number) => {
  const p = new Promise((resolve) => {
    resolve(number);
  });
  return p;
};
/*
 * пример использования
 */
makePromise(17).then((number) => {
  console.log(number); // 17
});
//part 2

const promiseNumber1 = 67;
const promiseNumber2 = 23;
const promiseNumber3 = 8;

/*
 * создай промис и присвой переменной resultPromise
 * чтобы в консоль вывелась сумма всех чисел из трех промисов
 */

// update code below

// export
const resultPromise = new Promise((resolve) => {
  resolve([promiseNumber1, promiseNumber2, promiseNumber3]);
});

resultPromise
  .then((numbersList) => {
    console.log(numbersList);
    const sum = numbersList.reduce((acc, num) => acc + num, 0);
    return sum;
  })
  .then((result) => {
    console.log(result); // 98
  });
