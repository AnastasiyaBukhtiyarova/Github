const wallet = {
  transactions: [1, 5, 9, 3, -1],
  getMax() {
    return Math.max.apply(null, this.transactions);
  },
  getMin() {
    return Math.min.apply(null, this.transactions);
  },
};

console.log(wallet.getMax());
console.log(wallet.getMin());
export { wallet };
