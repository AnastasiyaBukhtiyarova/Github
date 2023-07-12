const finishList = () => {
  const element = document.querySelector('.list');
  const li1 = document.createElement('li');
  li1.textContent = 1;
  element.prepend(li1);
  const li4 = document.createElement('li');
  li4.textContent = 4;
  const elSpecial = document.querySelector('.special');
  elSpecial.before(li4);
  const li6 = document.createElement('li');
  li6.textContent = 6;
  elSpecial.after(li6);
  const li8 = document.createElement('li');
  li8.textContent = 8;
  element.append(li8);
  return element;
};
console.log(finishList());
export { finishList };
