const num = [0, 1, 2, 3, 4, 5, 6];
const sortDesc = (arr) => {
  if (!Array.isArray(arr)) return null;
  arr.sort((a, b) => b - a);
  return arr;
};
console.log(sortDesc(num));
const sortAsc = (arr) => {
  if (!Array.isArray(arr)) return null;
  arr.sort((a, b) => a - b);
  return arr;
};
console.log(sortAsc(num));
