/* ===> 1 <=== */
const student = {
  name: 'Tom',
};

function sayName() {
  console.log(this.name);
}
function sayStudentName() {
  const res = sayName.bind(student);
  return res();
}
sayStudentName();
function SayBruceName() {
  const res = sayName.bind({ name: 'Bruce' });
  return res();
}
SayBruceName();

const company = {
  companyName: 'Microsoft',
};

function greeting(firstName, lastName) {
  console.log(
    `Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`
  );
}
function specialGreeting() {
  const res = greeting.bind(company, 'Bob', 'Marley');
  return res();
}
specialGreeting();
const country = {
  countryName: 'Ukraine',
  capital: 'Kyiv',
};

function getPopulation(population) {
  return `Population in ${this.countryName} is ${population}`;
}
function getUkrainePopulation() {
  const res = getPopulation.bind(country, 43000);
  return res();
}
console.log(getUkrainePopulation());

const transaction = {
  amount: 1200,
  operation: 'sell',
  currency: 'USD',
  exchange: 'NYSE',
  printTransaction() {
    console.log(
      `${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`
    );
  },
};

const anotherTransaction = {
  amount: 400,
  operation: 'buy',
  currency: 'USD',
  exchange: 'NASDAQ',
};
function printSpecialTransaction() {
  const res = transaction.printTransaction.bind(anotherTransaction);
  return res();
}
printSpecialTransaction();

