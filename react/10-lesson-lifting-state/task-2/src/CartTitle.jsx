import React from 'react';
const CartTitle = ({ userName, count }) => {
  return (
    <div>{`${ userName }, you added ${count} products`}</div>
  );
};
export default CartTitle;
