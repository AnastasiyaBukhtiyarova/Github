import './index.scss';
import store from './store';
import { setUser, removeUser } from './user.actions.js';
import { addProduct, removeProduct } from './cart.actions.js';
import { setLanguage } from './language.actions.js';

store.subscribe(() => console.log(store.getState()));
store.dispatch(setUser({ name: 'Anna', userId: 1 }));
store.dispatch(setUser({ name: 'Sara', userId: 2 }));
store.dispatch(removeUser(1));
store.dispatch(setLanguage('ua'));
store.dispatch(addProduct({ name: 'milk', id: 1 }));
store.dispatch(setUser({ name: 'Tasha', userId: 3 }));
