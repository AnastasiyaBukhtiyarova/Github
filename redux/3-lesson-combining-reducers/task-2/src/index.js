import './index.scss';
import store, { increment, decrement, reset } from './store';

store.dispatch(increment());

store.dispatch(decrement());
