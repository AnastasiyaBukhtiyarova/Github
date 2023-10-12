import React from 'react';
const CartTitle = ({ userName, count }) => {
  return <div>{`${userName}, you added ${count} items`}</div>;
};
export default CartTitle;
