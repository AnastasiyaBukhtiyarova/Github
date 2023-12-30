export const ADD = 'USERSLIST/ADD';
export const DELETE = 'USERSLIST/DELETE';
export const addUserAction = ({ id, name }) => {
  return {
    type: ADD,
    payload: {
      id,
      name,
    },
  };
};
export const deleteUserAction = ({ id, name }) => {
  return {
    type: DELETE,
    payload: {
      id,
      name,
    },
  };
};
