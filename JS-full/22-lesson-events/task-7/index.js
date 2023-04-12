const clearList = () => {
  const clear = document.querySelector('.categories');
  clear.innerHTML = '';
  return clear.innerHTML;
};
console.log(clearList());
export { clearList };
