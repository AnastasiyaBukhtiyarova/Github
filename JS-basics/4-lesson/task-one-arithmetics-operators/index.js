const income = 1000;

const rent = 400;
let otherExpenses = 500;

let balance = income - rent - otherExpenses;

console.log(balance);

let freelanceIncome = 200 * 2;
console.log(freelanceIncome);

balance = income + freelanceIncome - rent - otherExpenses;
console.log(balance);
balance /= 2;
console.log(balance);
