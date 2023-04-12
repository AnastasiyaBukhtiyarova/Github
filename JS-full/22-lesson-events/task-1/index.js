const el = document.querySelector('.rect-div');
const div = (text, color) => {
  const element = document.querySelector('.events-list');
  element.innerHTML += `<span style= 'color: ${color}; margin-left: 8px;' >'DIV'</span>`;
  return element;
};
const green = div('green');
const grey = div('grey');

el.addEventListener('click', green);
el.addEventListener('click', grey);
