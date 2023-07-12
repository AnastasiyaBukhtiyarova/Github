export const reverseArray = (num) => {
  if (!Array.isArray(num)) return null;
  const arrCopy = num.slice();
  return arrCopy.reverse(num);
};
const arrReverse = reverseArray;
const arr = [0, 1, 2, 3, 4, 5, 6];
console.log(arrReverse(arr));
