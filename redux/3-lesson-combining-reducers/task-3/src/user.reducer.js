import { SET_USER, REMOVE_USER } from './user.actions';
const initialState = {
  usersList: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return { usersList: action.payload };
    }

    case REMOVE_USER: {
      return null;
    }

    default:
      return state;
  }
};
export default userReducer;
