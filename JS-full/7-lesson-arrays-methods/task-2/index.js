const sortDesc = (numbers) => numbers.slice().sort((a, b) => b - a);

const arr = [1000, 1, 2, 3, 8, 10, 15, -6];
console.log(sortDesc(arr));
console.log(arr);
