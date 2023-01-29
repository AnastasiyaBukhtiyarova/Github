const flatArray = (arr) => {
  return arr.flat().sort((a, b) => a - b);
};

const array = [1000, 1, 2, 3, 8, [0, 0, 2569], 10, 15, -6];
console.log(flatArray(array));
console.log(array);
