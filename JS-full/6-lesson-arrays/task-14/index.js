'use strict';

/**
 * @param {number[]} arr
 * @param {number} num
 * @return {boolean}
 */
const includes = (arr, num) => {
  // put your code here
  let a;
  for (let i = 0; i < arr.length; i++) {
    a = arr[i];
    if (arr[i] === num) {
      return true;
    }
  } return a === num;
};

/*   const includes = (arr, num) => {
  // put your code here
  return arr.includes(num);
}; */
console.log(includes([0, 1, 5, 9, 20, 4], 13));
console.log(includes([8, 5, 3], 8));
console.log(includes([23, 86], 85));
console.log(includes([0], 0));
