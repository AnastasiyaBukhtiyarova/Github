"use strict";

function isLetter(c) {
 return c.toLowerCase() !== c.toUpperCase();
}

/**
 * @param {string} str
 * @return {boolean}
 */
function isValidWord(str) {
  // put your code here

  const strArr = str.split('');
  for (let index = 0; index < strArr.length; index += 1) {
    if (!isLetter(strArr[index])) {
      return false;
  } else if (str.length < 2) {
    return false;
  }
  } return true;
}


console.log(isValidWord("hello"));
console.log(isValidWord("ti"));
console.log(isValidWord("Tom"));
console.log(isValidWord("123"));

console.log(isValidWord("t"));
