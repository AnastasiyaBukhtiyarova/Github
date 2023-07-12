import getSum, { getSquaredArray, getOddNumbers } from './calculator.js';

it('should get squared all of array elements', () => {
  expect([4, 16, 25]).toEqual([4, 16, 25]);
});
it('should get odd numbers', () => {
  const arr = [1, 2, 4, 5, 7];
  const result = getOddNumbers(arr);
  expect(result).toEqual([1, 5, 7]);
});
it('should get sum', () => {
  const res = getSum(5, 6);
  expect(res).toEqual(11);
});
