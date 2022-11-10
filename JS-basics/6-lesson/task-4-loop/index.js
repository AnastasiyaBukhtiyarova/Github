"use strict";

/**
 * @param {number} num
 * @return {number}
 */
function factorial(num) {
  // put your code here
  for (let i = num - 1; i > 0 && i <= 100; i--) {
    num = num * i;
  }
  return num;
}
console.log(factorial(4));
