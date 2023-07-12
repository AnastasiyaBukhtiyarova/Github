const arr = [1000, 1, 2, 3, 8, 10, 15, -6];
function getArrayBounds(arr) {
  // put your code here
  if (!Array.isArray(arr)) {
    return null;
  }
  return [arr.length, arr[0], arr[arr.length - 1]];
}
const arrayBounds = getArrayBounds;
console.log(arrayBounds(arr));

