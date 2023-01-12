"use strict";

/**
 * @param {number} chickens
 * @param {number} caws
 * @param {number} pigs
 * @return {number}
 * курица 0,2 м
 * корова 1,5 м
 * свинья 0,5 м
 */
function countArea(chickens, caws, pigs) {
  // put your code here
  return (chickens * 0.2 + caws * 1.5 + pigs * 0.5);
}
console.log(countArea(5, 8, 6));
console.log(countArea(3, 0, 2));
console.log(countArea(0, 0, 0));

