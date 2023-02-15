const copyObj = (obj) => Object.assign({}, obj);

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

console.log(copyObj(userAge));
