import './index.scss';
import store, { increment, decrement, reset } from './store';

store.dispatch(increment());

store.dispatch(decrement());

store.dispatch(reset());

store.subscribe(() => console.log(store.getState()));
