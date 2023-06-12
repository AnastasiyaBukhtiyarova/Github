export const shmoment = (date) => {
  let result = new Date(date);
  const newSetDate = {
    add(value, valueDate) {
      if (value === 'years')
        result = new Date(result.setFullYear(result.getFullYear() + valueDate));
      if (value === 'months')
        result = new Date(result.setMonth(result.getMonth() + valueDate));
      if (value === 'days')
        result = new Date(result.setDate(result.getDate() + valueDate));
      if (value === 'hours')
        result = new Date(result.setHours(result.getHours() + valueDate));
      if (value === 'minutes')
        result = new Date(result.setMinutes(result.getMinutes() + valueDate));
      if (value === 'seconds')
        result = new Date(result.setSeconds(result.getSeconds() + valueDate));
      if (value === 'milliseconds')
        result = new Date(
          result.setMilliseconds(result.getMilliseconds() + valueDate)
        );
      return this;
    },
    subtract(value, valueDate) {
      if (value === 'years')
        result = new Date(result.setFullYear(result.getFullYear() - valueDate));
      if (value === 'months')
        result = new Date(result.setMonth(result.getMonth() - valueDate));
      if (value === 'days')
        result = new Date(result.setDate(result.getDate() - valueDate));
      if (value === 'hours')
        result = new Date(result.setHours(result.getHours() - valueDate));
      if (value === 'minutes')
        result = new Date(result.setMinutes(result.getMinutes() - valueDate));
      if (value === 'seconds')
        result = new Date(result.setSeconds(result.getSeconds() - valueDate));
      if (value === 'milliseconds')
        result = new Date(
          result.setMilliseconds(result.getMilliseconds() - valueDate)
        );

      return this;
    },
    result() {
      return result;
    },
  };
  return newSetDate;
};
