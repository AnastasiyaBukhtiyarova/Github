import { calc } from './calculator.js';

it('should get sum', () => {
  const res = calc('5 + 2');
  expect(res).toEqual('5 + 2 = 7');
});
it('should get expression with minus', () => {
  const res = calc('5 - 2');
  expect(res).toEqual('5 - 2 = 3');
});
it('should get expression with minus', () => {
  const res = calc('5 * 2');
  expect(res).toEqual('5 * 2 = 10');
});
it('should get expression with minus', () => {
  const res = calc('5 / 2');
  expect(res).toEqual('5 / 2 = 2.5');
});
