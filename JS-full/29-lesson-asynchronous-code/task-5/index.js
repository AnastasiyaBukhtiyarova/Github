const today = new Date();
const milisec = 1;
const sec = milisec * 1000;
const min = sec * 60;
const hour = min * 60;
const day = 24 * min;
console.log(today);

const day1 = today - new Date(5 * day);
console.log(day1 / day);
