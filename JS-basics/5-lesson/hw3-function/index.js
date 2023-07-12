"use strict";

/**
 * @param {number} minutes
 * @param {number} seconds
 * @param {number} mills
 * @return {number}
 */
const convertMills = (minutes, seconds, mills) =>
  // put your code here
  minutes * 60000 + seconds * 1000 + mills *1;


console.log (convertMills(1, 2, 100)); // ===> 62100
console.log(convertMills(0, 2, 100)); // ===> 2100
console.log(convertMills(5, 11, 230)); // ===> 311230
