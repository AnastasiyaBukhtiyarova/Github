//1й способ

/**
 * @param {number} price
 * @param {number} balance
 * @return {boolean}
 */
function canBuyProduct(price, balance) {
  // put your code here
  if (balance - price >= 500 ) {
    return ('true');
  } else {
    return ('false');
  }
}
console.log(canBuyProduct(5000, -300));
console.log(canBuyProduct(0, 0));
console.log(canBuyProduct(8000, 9000));


//2й способ

/**
 * @param {number} price
 * @param {number} balance
 * @return {boolean}
 */
function canBuyProduct(price, balance) {
  // put your code here
  let shopping;
  if (balance - price >= 500) {
    shopping = true;
  } else {
    shopping = false;
  }
  return shopping;
}
console.log(canBuyProduct(5000, -300));
console.log(canBuyProduct(0, 0));
console.log(canBuyProduct(8000, 9000));