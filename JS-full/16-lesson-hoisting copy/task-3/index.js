export function createArrayOfFunctions(num) {
  var arr = [];
  if (num === undefined) return [];
  if (typeof num !== 'number') return null;
  for (let i = 0; i < num; i++) {
    arr[i] = function () {
      return i;
    };
  }
  return arr;
}
