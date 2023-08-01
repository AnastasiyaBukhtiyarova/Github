"use strict";

/**
 * @param {number[]} sales
 * @return {number}
 */
function getRevenue(sales = [10, 5, 9, 0, 11, 5]) {
  // put your code here
  let day = 0;
  for (let i = 0; i < sales.length; i++) {
    day += sales[i];
  }
  return day;
}

/**
 * @param {number[]} sales
 * @param {number} plannedRevenue
 * @return {boolean}
 */
function checkRevenue(sales, plannedRevenue) {
  // hint: you should use getRevenue function inside checkRevenue function, to calculate revenue based on sales array
  // put your code here
  if (getRevenue(sales) >= plannedRevenue) {
    return true;
  } else {
    return false;
  }
}

console.log(checkRevenue(1, 5, 9));
