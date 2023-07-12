const squareArray = (arr) => {
  if (!Array.isArray(arr)) return null;
  return arr.map((num) => num * num);
};

const squareArr = [1, 0, 3, 6, 9, 8, 66, 320, 4];
const squareArr2 = 'Tom is my cat';
const squareArr3 = [4, 12];

console.log(squareArray(squareArr));
console.log(squareArray(squareArr2));
console.log(squareArray(squareArr3));
