import './index.scss';
import store from './store';
import { addUser, deleteUser, updataUser } from './users.actions.js';
import { increment, decrement, reset } from './counter.actions.js';

store.subscribe(() => console.log(store.getState()));
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(reset());
store.dispatch(addUser({ name: 'Anna', userId: 76 }));
store.dispatch(addUser({ name: 'NY', userId: 77 }));
store.dispatch(deleteUser(76));
store.updataUser(updataUser(77, { name: 'YN' }));
