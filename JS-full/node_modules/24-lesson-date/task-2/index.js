const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);
  return weekDays[new Date(dateInFuture).getDay()];
};
const result = dayOfWeek(new Date(2023, 6, 5), 8);
console.log(result);
export { dayOfWeek };
