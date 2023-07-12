const num = [0, 1, 2, 3, 4, 5, 6];
function withdraw(clients, balances, client, amount) {
  for (let i = 0; i < clients.length; i++) {
    if (clients[i] === client) {
      if (balances[i] > amount) {
        return balances[i] - amount;
      } else {
        return -1;
      }
    }
  }
}

// eslint-disable-next-line prettier/prettier
const fClients = ['Ann', 'Sheld', 'Amy'];
const fBalances = [10, 100, 8100];
// eslint-disable-next-line prettier/prettier
const fClient = 'Amy';
const fAmount = 8000;
console.log(withdraw(fClients, fBalances, fClient, fAmount));
