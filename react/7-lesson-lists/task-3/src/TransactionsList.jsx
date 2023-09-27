import React, { Component } from 'react';
import Transaction from './Transaction';
class TransactionsList extends Component {
  state = {
    transactions: <Transaction />,
  };

  render() {
    console.log(this.props.transactions);
    return (
      <ul>
        {this.props.transactions.map((data) => (
          <Transaction key={data.id} {...data} />
        ))}
      </ul>
    );
  }
}
export default TransactionsList;
