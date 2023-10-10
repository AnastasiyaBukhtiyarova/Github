import React, { Component } from 'react';

class ProductsList extends Component {
  state = {
    cartItems: [
      {
        id: '1',
        name: 'iPhone 11',
        price: 999,
      },
      {
        id: '2',
        name: 'iPad Pro',
        price: 799,
      },
    ],
  };
  render() {
    if (!this.props.userData) {
      return null;
    }
    const total = this.state.cartItems.reduce(
      (acc, item) => acc + item.price,
      0
    );
    return (
      <div className="products">
        <ul className="products__list">
          {this.state.cartItems.map((data) => (
            <li key={data.id} className="products__list-item">
              <span className="products__item-name">{data.name}</span>
              <span className="products__item-price">$ {data.price}</span>
            </li>
          ))}
        </ul>
        <div className="products__total">Total: ${total}</div>
      </div>
    );
  }
}

export default ProductsList;
