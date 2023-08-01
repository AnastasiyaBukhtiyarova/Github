let start = 0;

const add = (num) => {
  start += num;
};
const decrease = (num) => {
  start -= num;
};

const reset = (num) => {
  start = 0;
  return start;
};
const getMemo = (num) => {
  const res = start;
  return res;
};

export { add, decrease, reset, getMemo };
