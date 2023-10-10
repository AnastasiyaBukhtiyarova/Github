import React, { Component } from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';
class ShoppingCart extends Component {
  render() {
    return (
      <div className="column">
        <CartTitle userName={userData.firstName} />
        <ProductsList userData={this.props.userData} />
      </div>
    );
  }
}
export default ShoppingCart;
