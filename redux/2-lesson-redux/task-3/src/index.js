import { createStore } from 'redux';
import { addUserAction, deleteUserAction } from './users.actions.js';
import store from './store';

store.dispatch(addUserAction({ id: 1, name: 'Anna' }));
store.dispatch(addUserAction({ id: 76, name: 'Tom' }));
store.dispatch(deleteUserAction(76));
console.log(store.getState());
