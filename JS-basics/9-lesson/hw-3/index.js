"use strict";

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function reverseArray(arr) {
  // put your code here
 const  copyArr = arr.slice();
  return copyArr.reverse();
}


console.log(reverseArray([11, 4, 8, 3])); // ==> [3, 8, 4, 11]
reverseArray([]); // ==> []
reverseArray([100, 50]); // ==> [50, 100]
