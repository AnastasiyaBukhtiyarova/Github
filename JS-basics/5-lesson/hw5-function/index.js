"use strict";

/**
 * @param {number} first
 * @param {number} second
 * @param {number} third
 * @return {number}
 */
function getMax(first, second, third) {
  // put your code here
  let max;
  if (first >= second && first >= third) {
    max = first;
  } else if (second >= first && second >= third) {
    max = second;
  } else if (third>= first && third >= second) {
    max = third;
  }
  return (max);
}
console.log(getMax(-1, 0, -1));
console.log(getMax(5, 3, 2 * 6));
console.log(getMax(5, 4, 3));
// examples
getMax(10, 20, 30); // ===> 30
getMax(100, 20, 30); // ===> 100
getMax(0, 0, 0); // ===> 0
