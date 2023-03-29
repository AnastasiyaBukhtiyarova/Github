//export
let arr = [];
function createArrayOfFunctions(num) {
  for (let i = 0; i < 10; i += 1) {
    arr[i] = arr.push(function () {
      return i;
    };)
  }
}

console.log(createArrayOfFunctions(9));
