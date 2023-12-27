import { createStore } from 'redux';
import './index.scss';
import store, { decrement, reset, increment } from './store';

const resultElem = document.querySelector('.counter__result');
const resetBtn = document.querySelector('[data-action="reset"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const onIncrement = () => {
  store.dispatch(increment());
};
const onDecrement = () => {
  store.dispatch(decrement());
};
const onReset = () => {
  store.dispatch(reset());
};
incrementBtn.addEventListener('click', onIncrement);
decrementBtn.addEventListener('click', onDecrement);
resetBtn.addEventListener('click', onReset);
store.subscribe(() => {
  const state = store.getState();
  const historyString = state.history.join('');
  const currentvalue = state.history.reduce((acc, value) => acc + value, 0);
  resultElem.textContent =
    state.history.length === 0 ? '' : `${historyString} = ${currentvalue}`;
});
