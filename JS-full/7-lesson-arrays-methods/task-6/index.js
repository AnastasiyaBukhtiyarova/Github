const reverseArray = (arr) => {
  if (!Array.isArray(arr)) return null;
  return arr.slice().reverse(arr);
};
const reversedArr = [1, 0, 3, 6, 9, 8, 66, 320, 4];
const reversedArr2 = ['Tom is my cat'];
const reversedArr3 = [4, 12];

console.log(reverseArray(reversedArr));
console.log(reverseArray(reversedArr2));
console.log(reverseArray(reversedArr3));
