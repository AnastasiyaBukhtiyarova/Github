const superRound = (num, prec) => {
  const pow = Math.pow(10, prec);
  return [
    Math.floor(num * pow) / pow,
    Math.trunc(num * pow) / pow,
    Math.ceil(num * pow) / pow,
    Math.round(num * pow) / pow,
    +num.toFixed(prec),
  ];
};
console.log(superRound(3.8523466, 2));
