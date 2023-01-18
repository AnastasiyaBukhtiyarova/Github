'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
const arrOfNumbers = [0, 15, -2, -100, 9, 3];
function getSum(arr) {
  if (!Array.isArray(arr)) return null;
  let sum = 0;
  // put your code here
  for (let res of arr) {
    sum += res;
  }
  return sum;
}
const sum = getSum;
console.log(sum(arrOfNumbers));
