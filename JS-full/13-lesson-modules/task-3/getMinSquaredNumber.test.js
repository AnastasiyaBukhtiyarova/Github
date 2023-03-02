import getSquare from './getMinSquaredNumber.js';


it('should get null if argument is not array', () => {
  const res = getSquare(6);
  expect(res).toEqual(null);
});
it('should get null if argument is not array', () => {
  const result = getSquare('6');
  expect(result).toEqual(null);
});
it('should get square of all the array"s elements and return the min number', () => {
  const min = getSquare([5, 3, 6, 0]);
  expect(min).toEqual(0);
});
