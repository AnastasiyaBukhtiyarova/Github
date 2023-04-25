const getSection = (num) => {
  const dataNum = document.querySelector(`span[data-number='${num}']`);
  const parent = dataNum.parentNode;
  return parent.dataset.section;
};
const num = 2;
console.log(getSection(num));
