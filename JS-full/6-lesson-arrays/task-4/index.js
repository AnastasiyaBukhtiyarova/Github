'use strict';

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
const arr = [1, 5, 6, 7, 8, 9, 200, 1000000];
function swap(numbers) {
  // put your code here
  const [first, ...rest] = numbers;
  return [...rest, first];
}
const newArr = swap;
console.log(newArr(arr));
/* @param {number[]} numbers
 * @return {number[]}
 */

function swapManual(numbers) {
  // put your code here
  let a = numbers.slice();
  let b = a.shift();
  a.push(b);
  return a;
}
const newArrLoop = swapManual;
console.log(newArrLoop(arr));
