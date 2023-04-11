// put your code here
const setTitle = (text) => {
  const findEl = document.querySelector('.title');
  return (findEl.textContent = text);
};
const text = 'text';
console.log(setTitle(text));
export { setTitle };
