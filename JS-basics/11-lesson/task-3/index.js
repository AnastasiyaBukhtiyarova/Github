"use strict";

/**
 * @param {object} obj
 * @return {object}
 */
function copyObj(obj) {
  // put your code here
  const res = {};
  for (const key in obj) {
    res[key] = obj[key];
  } return res;
}
const user = {
  name: 'Stasy',
  age: 25,
  sex: 'female',
};
const copiedObj = user;
console.log(copyObj(copiedObj));
//copiedObj.test = 'cat';
//console.log(copiedObj);