const getAdults = (adults) => {
  return Object.entries(adults)
    .filter((el) => el[1] >= 18)
    .map((el) => el[0]);
};

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
console.log(getAdults(userAge));
