const divEl = document.querySelector('.rect_div');
const pEl = document.querySelector('.rect_p');
const spanEl = document.querySelector('.rect_span');

const clicked = (text, color) => {
  const element = document.querySelector('.events-list');
  element.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const greenDiv = clicked.bind(null, 'div', 'green');
const greenP = clicked.bind(null, 'p', 'green');
const greenSpan = clicked.bind(null, 'span', 'green');
divEl.addEventListener('click', greenDiv);
pEl.addEventListener('click', greenP);
spanEl.addEventListener('click', greenSpan);

const greyDiv = clicked.bind(null, 'div', 'grey');
const greyP = clicked.bind(null, 'p', 'grey');
const greySpan = clicked.bind(null, 'span', 'grey');
divEl.addEventListener('click', greyDiv, true);
pEl.addEventListener('click', greyP, true);
spanEl.addEventListener('click', greySpan, true);
