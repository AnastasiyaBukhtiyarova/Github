const minutes = 60 * 1000;
const hour = 60 * minutes;
const day = 24 * hour;

const getDiff = (startDate, endDate) => {
  const diffDay = Math.abs(endDate - startDate);
  const countDays = Math.trunc(diffDay / day);
  const countDaysInMs = countDays * day;

  const DayInMs = diffDay - countDaysInMs;

  const countHours = Math.trunc(DayInMs / hour);
  const restHourInMs = DayInMs - countHours * hour;

  const countMinutes = Math.trunc(restHourInMs / minutes);
  const countSeconds = Math.trunc(
    (restHourInMs - countMinutes * minutes) / 1000
  );

  return `${countDays}d ${countHours}h ${countMinutes}m ${countSeconds}s`;
};
const startDate = new Date(2023, 5, 6, 9, 47, 3);
const endDate = new Date(2022, 5, 10, 9, 47, 3);
console.log(getDiff(startDate, endDate));
export { getDiff };
