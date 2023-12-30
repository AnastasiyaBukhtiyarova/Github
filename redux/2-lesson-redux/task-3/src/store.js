import { createStore } from 'redux';
import { usersListReducer } from './users.reducer.js';
const store = createStore(usersListReducer);

export default store;
