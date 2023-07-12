const start = 1;
const end = 10;
let result = 0;
for (let i = start; i <= end; i += 1)
  if (i % 5 === 0) {
    console.log(i);
  }
for (let i = start; i <= end; i += 1)
  if (i % 2 === 0 && i % 4 > 0) {
    result += i;
  }
console.log(result);
for (let i = start; i <= end; i += 1)
  if (i % 3 === 0) {
    result -= i;
    console.log(result);
  }

for (let i = start; i <= end; i += 1) {
  if (i % 4 === 0) result *= 4;
}
console.log(result);
