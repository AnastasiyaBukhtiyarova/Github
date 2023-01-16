'use strict';
//firstFrom <= firstTo. secondFrom <= secondTo. если сумма первого промежутка больше вернуть true
/**
 * @param {number} from
 * @param {number} to
 * @return {number}
 */
function sum(from, to) {
  // put your code here
  let res = 0;
  for (let i = from; i <= to; i++) {
    res += i;
  }
  return res;
}

/**
 * @param {number} firstFrom
 * @param {number} firstTo
 * @param {number} secondFrom
 * @param {number} secondTo
 * @return {boolean}
 */
function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  // hint: you should use sum function inside compareSums
  // put your code here
  let first = sum(firstFrom, firstTo);
  let second = sum(secondFrom, secondTo);
  return first > second;
}
console.log(compareSums(2, 5, 1, 20));

 // ===> false
console.log(compareSums(5, 10, 5, 10));
console.log(compareSums(5, 15, 3, 5)); // ===> true
console.log(compareSums(-2, 5, 5, 9)); // ===> false
console.log(compareSums(0,8, -2, -5)); // true

