const makeCounter = () => {
  let counter = 0;
  return function () {
    return counter++;
  };
};
let counter1 = makeCounter();
console.log(counter1);
console.log(counter1);
console.log(counter1);
console.log(counter1);
console.log(counter1);
