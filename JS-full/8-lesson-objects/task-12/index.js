const arrAverage = (arr) => {
  if (!Array.isArray(arr)) return null;
  return arr.reduce((num, average) => num + average) / arr.length;
};
const averagedArr = [10, 2];
const averagedArr1 = [89, 30, -50, -6, 25, 10001];

console.log(arrAverage(averagedArr));
console.log(arrAverage(averagedArr1));
