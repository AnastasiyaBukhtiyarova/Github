const calc = (initValue) => {
  let mathResult = initValue;

  const mathOperations = {
    add(value) {
      mathResult += value;
      return this;
    },

    substract(value) {
      mathResult -= value;
      return this;
    },
    multiply(value) {
      mathResult *= value;
      return this;
    },
    divide(value) {
      mathResult /= value;
      return this;
    },
    mathResult() {
      return mathResult;
    },
  };
  return mathOperations;
};
const result = calc(2).add(2).substract(2).divide(10).multiply(0).mathResult();
console.log(result);
export { calc };
