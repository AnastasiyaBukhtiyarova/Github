const calc = (sum) => {
  let [a, operator, b] = sum.split(' ');
  let res;
  switch (operator) {
    case '+':
      res = +a + +b;
      break;
    case '-':
      res = a - b;
      break;
    case '*':
      res = a * b;
      break;
    case '/':
      res = a / b;
      break;
  }
  return `${sum} = ${res}`;
};
console.log(calc('1 + 2'));
