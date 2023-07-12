const add = (value) => value + 3;
const div = (value) => value / 5;
const mult = (value) => value * 6;

const compose =
  (...funcs) =>
  (value) => {
    return funcs.reduce((acc, funcs) => funcs(acc), value);
  };
const doEverything = compose(add, div, mult);
console.log(doEverything(5));
