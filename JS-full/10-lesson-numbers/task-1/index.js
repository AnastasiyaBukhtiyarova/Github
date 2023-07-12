const getFiniteNumbers = (arr) => {
  return arr.forEach((el) => console.log(Number.isFinite(el)));
};
const arr1 = [16, 10, -8, 3, 4589, 60.5, 0];
getFiniteNumbers(arr1);
const getFiniteNumbersV2 = (arr) => {
  return arr.filter((el) => console.log(isFinite(el)));
};
const getNaN = (arr) => {
  return arr.filter((el) => console.log(Number.isNaN(el)));
};
const getNaNV2 = (arr) => {
  return arr.filter((el) => console.log(isNaN(el)));
};
const getIntegers = (arr) => {
  return arr.filter((el) => console.log(Number.isInteger(el)));
};

const arr2 = [16, 10, -8, 3, 4589, 60.5, 0, NaN];
const arr3 = [16, 10, -8, 3, 4589, 60.5, 0, NaN];
const arr4 = [16, 10, -8, 3, 4589, 60.5, 0, NaN];
const arr5 = [16, 10, -8, 3, 4589, 60.5, 0, NaN];

getFiniteNumbersV2(arr2);
getNaN(arr3);
getNaNV2(arr4);
getIntegers(arr5);
