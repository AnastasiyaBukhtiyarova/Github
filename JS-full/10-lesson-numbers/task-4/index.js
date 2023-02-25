'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
const getMaxAbsoluteNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length < 1) return null;
  // put your code here
  const abs = Math.abs(...arr);
  return Math.max(abs);
};
const arr = [-8, 1];
console.log(getMaxAbsoluteNumber(arr));
console.log(getMaxAbsoluteNumber([-10, 10, -10]));
console.log(getMaxAbsoluteNumber([2.1, 0, 1.6]));
console.log(getMaxAbsoluteNumber([-6, 3, 5, -1]));
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20]));
