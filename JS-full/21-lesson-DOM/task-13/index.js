const getSection = (num) => {
  const dataNumberNum = document.querySelector('span[data-number=num]');
  return dataNumberNum;
};
const num = 2;
console.log(getSection(num));
