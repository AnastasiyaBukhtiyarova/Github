export const isFetchingSelectors = (state) => {
  return state.users.isFetching;
};
export const userDataSelectors = (state) => {
  return state.users.userData;
};
