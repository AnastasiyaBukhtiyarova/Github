const mult = (number1) => (number2) => number1 * number2;

const number1 = mult(5);
const multNumber1Number2 = number1(4);
console.log(multNumber1Number2);
const twice = mult(2);
const res = twice(7);
console.log(res);
const tripple = mult(3);
const resTripple = tripple(5);
console.log(resTripple);
