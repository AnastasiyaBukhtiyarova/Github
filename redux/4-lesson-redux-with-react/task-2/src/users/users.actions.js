export const ADD_USER = 'USER/ADD_USER';
export const DELETE_USER = 'USER/REMOVE_USER ';

export const addUser = (userData) => {
  return {
    type: ADD_USER,
    payload: { userData },
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
