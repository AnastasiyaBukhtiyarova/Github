"use strict";

/**
 * @return {number}
 */
function sumOfMillions() {
  // put your code here
  let number =0; 
  for (let index = 0; index <= 10000000; index = index + 1) {
    number += index;
  }
  return (number);
}
console.log(sumOfMillions());
// examples
// sumOfMillions function should calculate and return sum from 0 + 1 + 2 + ... + 10000000
