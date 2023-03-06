import { reverseArray } from '../../6-lesson-arrays/task-9';

import { withdraw } from '../../7-lesson-arrays-methods/task-7';

import { getAdults } from '../../8-lesson-objects/task-7';

it('should get reversed array', () => {
  const res = reverseArray([0, 1, 3, 5, 6, 8]);
  expect(res).toEqual([8, 6, 5, 3, 1, 0]);
});
it('should get reversed array', () => {
  const res = reverseArray([3, 2, 1, 0, -1, -2]);
  expect(res).toEqual([-2, -1, 0, 1, 2, 3]);
});
it('should get reversed array', () => {
  const res = reverseArray([8, 3]);
  expect(res).toEqual([3, 8]);
});
it('shuld get withdraw balance', () => {
  const res = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 100);
  expect(res).toEqual(1300);
});
it('shuld get withdraw balance', () => {
  const res = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 10000);
  expect(res).toEqual(-1);
});
it('shuld get withdraw balance', () => {
  const res = withdraw(['Ali', 'Sia', 'Mia'], [10000, 87, 6], 'Ali', 10000);
  expect(res).toEqual(0);
});
it('should get users of 18 and older', () => {
  const res = getAdults({ Ann: 56, Andrey: 7 });
  expect(res).toEqual({ Ann: 56 });
});
it('should get users older than 18', () => {
  const res = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(res).toEqual({ 'John Doe': 19, Bob: 18 });
});
it('should get users older than 18', () => {
  const res = getAdults({ Fiona: 5, Lia: 10, D: 8 });
  expect(res).toEqual({});
});
