function sum(from, to) {
  let res = 0;

  for (let num = from; num <= to; num += 1) {
    res += num;
  }

  return res;
}

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  return sum(firstFrom, firstTo) > sum(secondFrom, secondTo);
}
sum(2, 10);
console.log(sum);
compareSums(1, 2, 3, 4);
console.log(compareSums);

// examples
sum(5, 10); // ===> 45
sum(11, 11); // ===> 11

compareSums(5, 10, 5, 10); // ===> false
compareSums(5, 15, 3, 5); // ===> true
compareSums(-2, 5, 5, 9); // ===> false
