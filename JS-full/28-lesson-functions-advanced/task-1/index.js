const calc = (initValue) => {
  let result = initValue;

  const mathOperations = {
    add(value) {
      result += value;
      return this;
    },

    substract(value) {
      result -= value;
      return this;
    },
    multiply(value) {
     result *= value;
      return this;
    },
    divide(value) {
      result /= value;
      return this;
    },
    result() {
      return result;
    },
  };
  return mathOperations;
};
const result = calc(2).add(2).substract(2).divide(10).multiply(0).result();
console.log(result);
export { calc };
