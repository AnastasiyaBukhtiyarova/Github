export const getSquaredArray = (num) => {
  return num.map((el) => el + el);
};
getSquaredArray([2, 4, 5]);
export const getOddNumbers = (num) => {
  return num.filter((el) => el % 2 === 1);
};
export default (a, b) => {
  return a + b;
};
