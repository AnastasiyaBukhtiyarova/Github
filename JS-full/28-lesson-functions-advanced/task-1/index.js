const calc = (initValue) => {
  let result = initValue;

  const calculator = {
    add(value) {
      result += value;
      return this;
    },

    substract(value) {
      result -= value;
      return this;
    },
    mult(value) {
      result *= value;
      return this;
    },
    div(value) {
      result /= value;
      return this;
    },
    result() {
      return result;
    },
  };
  return calculator;
};
const result = calc(2).add(2).substract(2).div(10).mult(0).result();
console.log(result);
export { calc };
