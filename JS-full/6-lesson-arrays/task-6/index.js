const arr = [0, 5, 6, 10, 40, 50, 60];
// const arr = 8;
function squareArray(num) {
  const res = [];
  if (!Array.isArray(num)) {
    return null;
  }
 for (const i of num) {
    res.push(i * i);
  }
  return res;
}
const b = squareArray;
console.log(b(arr));
