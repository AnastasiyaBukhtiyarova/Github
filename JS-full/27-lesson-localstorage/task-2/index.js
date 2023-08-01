const counterElem = document.querySelector('.counter');
const counterVelueElem = document.querySelector('.counter__value');

const onCounterChange = (e) => {
  const isButton = e.target.classList.contains('counter__button');
  if (!isButton) {
    return;
  }

  const action = e.target.dataset.action;
  const oldValue = Number(counterVelueElem.textContent);

  const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;

  counterVelueElem.textContent = newValue;

  localStorage.setItem('counterVelue', newValue);
};

counterElem.addEventListener('click', onCounterChange);

const onStorageChenge = (e) => {
  counterVelueElem.textContent = e.newValue;
};

window.addEventListener('storage', onStorageChenge);

const onDocumentLoaded = () => {
  counterVelueElem.textContent = localStorage.getItem('counterValue') || 0;
};

document.addEventListener('DOMContentloaded', onDocumentLoaded);
