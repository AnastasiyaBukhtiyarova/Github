const sum = (arr) => {
  if (!Array.isArray(arr)) return null;
  return arr.reduce((num, total) => num + total);
};
const sumArr = [1, 0, 3, 6, 9, 8, 66, 320, 4];
const sumArr2 = 'Tom is my cat';
const sumArr3 = [4, 12];

console.log(sum(sumArr));
console.log(sum(sumArr2));
console.log(sum(sumArr3));
