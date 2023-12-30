import { addUserAction, deleteUserAction } from './users.actions.js';
const initialState = {
  usersList: [],
};
export const usersListReducer = (state = initialState, action) => {
  switch (action.type) {
    case deleteUserAction:
      return {
        ...state,
        usersList: [...state.usersList].filter(
          (user) => user.id !== action.payload
        ),
      };
    case addUserAction:
      return {
        ...state,
        usersList: [...state.usersList].concat(action.payload),
      };
    default:
      return state;
  }
};
