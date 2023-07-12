function filterNames(arr, text) {
  const filtered = arr.filter(
    (names) => text.includes(names) && arr.length > 5
  );
  return filtered;
}
const namesArr = [
  'Ann ',
  'Lou ',
  'Tom ',
  'Malgorzata ',
  'Kim ',
  'Woody ',
  'George ',
  'Zlata ',
  'Mia ',
  'Ed ',
  'Oliver ',
  'Sam ',
  'Sheld ',
];

console.log(
  filterNames(namesArr, ['Lou ', 'Sam ', 'Zlata ', 'Ann ', 'Woody '])
);
console.log(filterNames(namesArr, 'Lou'));
