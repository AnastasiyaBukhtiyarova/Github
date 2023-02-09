const transformToObject = (arr) => {
  const transformedToObj = {};
  arr.forEach((el) => {
    transformedToObj[el] = el;
  });

  return transformedToObj;
};

const arr = [1000, 1, 2, 3, 8, 10, 15, -6];
console.log(transformToObject(arr));
console.log(arr);
