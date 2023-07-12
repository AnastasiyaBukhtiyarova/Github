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

const clearButton = document.querySelector('.clear-btn');
clearButton.addEventListener('click', () => {
  const eventsList = document.querySelector('.events-list');
  eventsList.innerHTML = '';
});

const removeHandlers = document.querySelector('.remove-handlers-btn');
removeHandlers.addEventListener('click', () => {
  divEl.removeEventListener('click', greenDiv);
  pEl.removeEventListener('click', greenP);
  spanEl.removeEventListener('click', greenSpan);
  divEl.removeEventListener('click', greyDiv, true);
  pEl.removeEventListener('click', greyP, true);
  spanEl.removeEventListener('click', greySpan, true);
});

const attachHandlers = document.querySelector('.attach-handlers-btn');
attachHandlers.addEventListener('click', () => {
  divEl.addEventListener('click', greenDiv);
  pEl.addEventListener('click', greenP);
  spanEl.addEventListener('click', greenSpan);
  divEl.addEventListener('click', greyDiv, true);
  pEl.addEventListener('click', greyP, true);
  spanEl.addEventListener('click', greySpan, true);
});
