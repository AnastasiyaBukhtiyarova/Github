const getParsedIntegers = (arr) => {
  return arr.map((el) => Number.parseInt(el));
};
const arr = [0, 25.6, 3.65898, 8, 5.0532, 659.58745];
console.log(getParsedIntegers(arr));
const getParsedIntegersV2 = (arr) => {
  return arr.map((el) => parseInt(el));
};
const arr1 = [0.15, 25.1, 89, 546897496, 60.5696];
console.log(getParsedIntegersV2(arr1));
const getParsedFloats = (arr) => {
  return arr.map((el) => Number.parseFloat(el));
};
console.log(getParsedFloats(arr1));
const getParsedFloatsV2 = (arr) => {
  return arr.map((el) => parseFloat(el));
};
console.log(getParsedFloatsV2(arr1));
