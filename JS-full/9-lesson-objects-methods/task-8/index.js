'use strict';

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */
function buildObject(keysList, valuesList) {
  // put you code here
  let res = {};
  for (let i = 0; i < keysList.length; i++) {
    for (let i = 0; i < valuesList.length; i++) {
      res[keysList[i]] = valuesList[i];
    }
  }
  return res;
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(buildObject(keys, values)); 



// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(buildObject(keys, values));
