// put your code here
const a = 0;
const b = 1000;
let result = 0;
for (let i = a; i <= b; i += 1) {
  if (i % 2 === 1) {
    console.log('Found');
    result += i;
  }
  if (result * 5 >= 5000) {
    console.log('Bigger');
  } else {
    console.log('Smaller');
  }
}
