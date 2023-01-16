const a = 0;
const b = 1000;
let res = 0;
for (let i = a; i <= b; i += 1) {
  res += i;
}
const c = res % 1234 === 0;
const d = res % 1234 !== 0;
console.log(c > d);
