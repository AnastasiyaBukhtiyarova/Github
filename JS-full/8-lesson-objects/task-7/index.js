const getAdults = (obj) => {
  // put your code here
  const filtered = {};
  for (const values in obj) {
    if (obj[values] >= 18) filtered[values] = obj[values];
  }
  return filtered;
};
const users = {
  JohnDoe: 19,
  Tom: 17,
  Bob: 18,
  Sam: 21,
  N: 15,
  Li: 30,
};
const empty = {};

console.log(getAdults(users));
console.log(getAdults(empty));
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }
