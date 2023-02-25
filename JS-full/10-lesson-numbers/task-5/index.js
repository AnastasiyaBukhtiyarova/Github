const getTotalPrice = (arr) => {
  const sum = arr.reduce((el, acc) => el + acc);
  return '$' + Math.floor(sum * 100) / 100;
};
const arr = [8, 5, -3, 0.63215555544485, 659.3265448, 25];
const totalPrice = getTotalPrice(arr);
console.log(totalPrice);
