'use strict';

/**
 * @param {number} from
 * @param {number} to
 * @return {number[]}
 */
function getSpecialNumbers(from, to) {
  // put your code here
  let arr = [];
  for (let i = from; i <= to; i++) {
    if (i % 3 === 0) {
      arr.push(i);
    }
  }
  return arr;
}
const res = getSpecialNumbers;
console.log(getSpecialNumbers(1, 10));
