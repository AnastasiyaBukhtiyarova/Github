"use strict";

/**
 * @param {object[]} users
 * @return {object}
 */
function usersCountByCity(users) {
  // put your code here
  let resCity = {};
  for (const gorod of users) {
    if (gorod.city in resCity) {
      resCity[gorod.city] ++;
    } else {
      resCity[gorod.city] = 1;
    } 
  }
  return resCity;
  
}

// examples
const users = [
  {
    id: 888,
    name: "Denis",
    age: 44,
    city: "Kyiv",
  },
  {
    id: 333,
    name: "Alex",
    age: 33,
    city: "Lviv",
  },
  {
    id: 392,
    name: "Nastya",
    age: 22,
    city: "Kyiv",
  },
  {
    id: 123,
    name: "Violetta",
    age: 15,
    city: "Odesa",
  },
  {
    id: 640,
    name: "Mykola",
    age: 31,
    city: "Lviv",
  },
];

console.log(usersCountByCity(users));

//usersCountByCity(users); // ===> { 'Kyiv': 2, 'Lviv': 2, 'Odesa': 1 }
