import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions.js';
const initialState = {
  products: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.payload.productsList),
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
export default cartReducer;
