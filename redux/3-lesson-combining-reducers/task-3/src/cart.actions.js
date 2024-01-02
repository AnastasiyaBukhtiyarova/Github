export const ADD_PRODUCT = 'PRODUCTS/ADD_PRODUCTS';
export const REMOVE_PRODUCT = 'PRODUCTS/REMOVE_PRODUCTS';

export const addProduct = (productsList) => {
  return {
    type: ADD_PRODUCT,
    payload: {
      productsList,
    },
  };
};
export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    payload: { id },
  };
};
