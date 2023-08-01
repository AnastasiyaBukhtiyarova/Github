"use strict";

/**
 * @param {string} str
 * @return {string}
 */
function capitalize(str) {
  // put your code here
   return str[0].toUpperCase() + str.slice(1) ;
}
console.log(capitalize("cake"));
console.log(capitalize("developer"));
// examples
capitalize("cake"); // ==> Cake
capitalize("Monday"); // ==> Monday
capitalize("hello, it is me"); // ==> Hello, it is me
