"use strict";

/**
 * @param {string} str
 * @return {string}
 */
function camelCase(str) {
  // put your code here
  let words = "";
  let result = "";
  const arr = str.split(" ");
  let firstWord = arr[0][0].toLowerCase();
  for (let index = 0; index < arr.length; index++) {
    let el = arr[index];
    words += el[0][0].toUpperCase() + el.slice(1);
    result = firstWord.concat(words.slice(1));
  }
  return result;
}

console.log(camelCase("some function name")); // ===> someFunctionName
console.log(camelCase("Get message")); // ===> getMessage
console.log(camelCase("render tasks list")); // ===> renderTasksList
console.log(camelCase("Cat pet cat"));
console.log(camelCase("user"));
