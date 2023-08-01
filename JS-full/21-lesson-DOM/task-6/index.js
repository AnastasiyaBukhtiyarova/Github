const setTitle = (text) => {
  const findEl = document.querySelector('.title');
  return (findEl.textContent = text);
};
const text = 'text';
export { setTitle };
