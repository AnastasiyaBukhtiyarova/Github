'use strict';

/**
 * @param {number} length
 * @param {number} from
 * @param {number} to
 * @return {number[]}
 */

const getRandomNumbers = (length, from, to) => {
  // put your code here
  if (from > to || Math.ceil(to) === Math.ceil(from)) return null;
  let floor = Math.floor(to);
  let ceil = Math.ceil(from);
  return Array(length)
    .fill()
    .map((el) => Math.round(Math.random() * (floor - ceil) + ceil));
};

console.log(getRandomNumbers(3, 2.4, 4.5));
console.log(getRandomNumbers(7, 1.4, 1.9));