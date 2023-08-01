function sumOfSquares(...args) {
  return args.reduce((acc, el) => {
    return (acc += el ** 2);
  }, 0);
}

console.log(sumOfSquares(5, 5));

export { sumOfSquares };
