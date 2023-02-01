const withdraw = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);
  console.log(clients.indexOf(client));
  if (balances[index] < amount) {
    return -1;
  }
  return balances[index] - amount;
};
const users = ['Ann', 'John', 'User'];
const usersBalances = [1400, 87, -6];
console.log(withdraw(users, usersBalances, 'Ann', 100));
