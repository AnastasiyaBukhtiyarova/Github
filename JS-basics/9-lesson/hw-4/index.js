"use strict";

/**
 * @param {array} arr
 * @param {number} numberOfElements
 * @return {array}
 */
const getSubArray = (arr, numberOfElements) => {
  // put your code here
  const subArray = [];
  for (let number = 0; number < numberOfElements; number += 1) {
    subArray[number] = arr[number];
  }
  return subArray;
};
console.log(getSubArray([1, 8, 0, 3, 5, 6], 3));
console.log(getSubArray([1, 8, 0, 3, 5, 6], 1));
console.log(getSubArray([10, 2, 5, 28], 2));

// examples
getSubArray([11, 4, 8, 3], 2); // ==> [11, 4]
getSubArray([1, 2, 3, 4, 5], 3); // ==> [1, 2, 3]
getSubArray(["some string", "hello", "I am happy"], 1);
