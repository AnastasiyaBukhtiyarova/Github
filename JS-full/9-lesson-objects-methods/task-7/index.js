const getTotalRevenue = (transactions) => {
  // put your code here
  return Object.values(transactions)
    .reduce((acc, el) => acc.concat(el), [])
    .map((el) => el.amount)
    .reduce((acc, el) => acc + el);
};

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];
console.log(getTotalRevenue(dayTransactions));
