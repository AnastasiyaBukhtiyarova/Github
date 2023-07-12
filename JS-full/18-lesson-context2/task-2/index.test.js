import { wallet } from './index.js';

it('should get max', () => {
  let res = wallet.getMax();
  expect(res).toEqual(9);
});
it('should get min', () => {
  expect(wallet.getMin()).toEqual(-1);
});
