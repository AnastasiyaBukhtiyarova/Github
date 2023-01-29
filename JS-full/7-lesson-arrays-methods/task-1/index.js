const getSpecialNumbers = (numbers) =>
  numbers.filter((element) => element % 3 === 0);

const arr = [1000, 1, 2, 3, 8, 10, 15, -6];
console.log(getSpecialNumbers(arr));
console.log(arr);
