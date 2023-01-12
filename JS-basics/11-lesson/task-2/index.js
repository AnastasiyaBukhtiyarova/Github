"use strict";

/**
 * @param {object} obj
 * @return {string[]}
 */

 function getKeys(obj) {
  // put your code here
   const key = Object.keys(obj);
  return key;
}
console.log(getKeys({ id: 2, name: "a" })); 

/** 
 function getKeys(obj) {
  // put your code here
  for (const key in obj) {
console.log(key); // return (key);
  }
}
getKeys({ id: 5, name: "oil" }); выводим через консоль лог


function getKeys(obj) {
  // put your code here
  for (const keys in obj) {
    console.log(keys);
  }
}
getKeys({ id: 5, name: "oil" });
**/
/**
 * @param {object} obj
 * @return {array}
 */
function getValues(obj) {
  // put your code here
  const key = Object.values(obj);
  return key;
}
console.log(getValues({ id: 20, name: "cat" }));
