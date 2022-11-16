"use strict";

/**
 * @param {string} str
 * @return {string}
 */
function getAbbreviation(str) {
  // put your code here
  let abreviation = "";
  let arr = str.split(" ");
  for (let index = 0; index < arr.length; index++) {
    let el = arr[index];

    if (el.length >= 3) {
      abreviation += el[0].toUpperCase();
    }
  } 
  return abreviation;
}
console.log(getAbbreviation("some company name"));
console.log(getAbbreviation("Union of Soviet Socialist Republics"));
console.log(getAbbreviation("United States"));
console.log(getAbbreviation("union of awesome cats"));

