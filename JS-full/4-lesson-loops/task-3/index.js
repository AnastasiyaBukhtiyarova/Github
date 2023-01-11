
let result = 1;
for (let number = 1; number <= 4; number++) {
  console.log('\n=> ' + number + '<=\n\n');
  for (let number2 = 0; number2 <= 10; number2++) {
    result = number * number2
    console.log(number + " х " + number2 + " = " + result);
  }
}
