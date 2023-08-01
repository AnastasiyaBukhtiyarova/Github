function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) return null;
  return arr.map((num) => {
    if (num % 2 === 0) {
      return num + delta;
    }
    return num;
  });
}
const increasedArr = [1, 0, 3, 6, 9, 8, 66, 320, 4];
const increasedArr2 = 'Tom is my cat';
const increasedArr3 = [4, 12];

console.log(increaseEvenEl(increasedArr, 5));
console.log(increaseEvenEl(increasedArr2, 5));
console.log(increaseEvenEl(increasedArr3, 5));
