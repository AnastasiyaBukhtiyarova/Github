"use strict";

/**
 * @param {number} amount
 * @param {string} currency
 * @return {number}
 */
function countCommision(amount, currency) {
  // put your code here
  let c;
  if (amount <= 1000 && currency === 'UAH') {
    c = amount / 100 * 2;
  } else if (amount > 1000 && currency === 'UAH') {
    c = amount / 100 * 1;
  } else if  (amount <= 5000 && currency === 'USD') {
    c = amount / 100 * 0.5;
  } else if (amount > 5000 && currency === 'USD') {
    c = amount / 100 * 0.25;
  } else if (amount <= 3000 && currency === 'EUR') {
    c = amount / 100 * 0.75;
  } else  if(amount > 3000 && currency === 'EUR') {
    c = 0;
  }
  return (c);
}
console.log(countCommision(1500, 'UAH'));
console.log(countCommision(5500, 'USD'));
console.log(countCommision(1000, 'EUR'));

// examples
countCommision(20000, "USD"); // ===> 50
countCommision(500, "UAH"); // ===> 10
countCommision(2000, "UAH"); // ===> 20
