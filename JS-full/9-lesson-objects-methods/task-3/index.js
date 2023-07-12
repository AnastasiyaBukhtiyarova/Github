function getKeys(obj) {
  // put you code here
  return Object.keys(obj).forEach((el) => console.log(el));
}
const userAge = {
  Zlata: 21,
  Eva: 25,
  Lili: 16,
  Eduard: 17,
  Zakhar: 30,
  Sabina: 15,
  Egor: 18,
  Anton: 20,
};
getKeys(userAge);
