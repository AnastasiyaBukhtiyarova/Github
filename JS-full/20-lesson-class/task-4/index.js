'use strict';

/**
 * @field {string} id +
 * @field {number} price +
 * @field {date} dateCreated
 * @field {boolean} isConfirmed +
 * @field {date} dateConfirmed
 * @field {string} city +
 * @field {string} type +
 */
class Order {
  // put your code here
  constructor(price, city, type, ID) {
    this.price = price;
    this.city = city;
    this.type = type;
    this.id = Math.random().toString();
    this.isConfirmed = false;
    this.dateCreated = new Date();
    this.dateConfirmed = null;
  }

  checkPrice() {
    if (this.price >= 1000) {
      return true;
    }
    return false;
  }

  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }

  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    }
    return false;
  }
}
const order = new Order(1500, 'NY', 'Buy', '12');
console.log(order.checkPrice());
console.log(order.confirmOrder());
console.log(order.isValidType());
export { Order };
