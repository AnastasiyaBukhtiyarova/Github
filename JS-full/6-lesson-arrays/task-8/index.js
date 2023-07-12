const increaseEvenEl = (arr, delta) => {
  // put your code here
  const res = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      res.push(arr[i] + delta);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
};
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));
console.log(increaseEvenEl(increaseEvenEl([7, 11, 1], 10)));
