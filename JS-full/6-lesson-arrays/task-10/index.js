const checker = (arr) => {
  if (!Array.isArray(arr)) return null;
  let sumofMinMax = [];
  let min = [];
  let max = [];

  min = Math.min(...arr);
  max = Math.max(...arr);
  sumofMinMax = min + max;

  return sumofMinMax > 1000;
};

const num = [10, 1, 2, 3, 1004, 5, 6];
console.log(checker(num));
