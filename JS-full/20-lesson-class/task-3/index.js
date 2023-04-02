class Wallet {
  balance = 0;

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance < amount) {
      console.log(`No enough funds`);
      return;
    }
    this.balance -= amount;
  }
}
const wallet = new Wallet();
console.log(wallet.getBalance(20));
console.log(wallet.deposit(10));
console.log(wallet.withdraw(0));
const wallet1 = new Wallet();
console.log(wallet1.withdraw(10));
export { Wallet };
