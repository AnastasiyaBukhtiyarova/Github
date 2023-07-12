const getSubArray = (arr, numberOfElements) => {
  const a = [];
  for (let i = 0; i < numberOfElements; i++) {
    a.push(arr[i]);
  }
  return a;
};
const res = [5, 40, 60, 80, 1, 2, 32, 69, -9];
const resF = getSubArray;
console.log(resF(res, 3));
console.log(resF(res, 8));
