export default (num) => {
  if (!Array.isArray(num)) return null;
  const square = num.map((el) => {
    return el * el;
  });
  return Math.min(...square);
};
