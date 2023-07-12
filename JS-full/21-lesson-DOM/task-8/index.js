const createButton = (buttonText) => {
  const element = document.querySelector('body');
  const newElement = document.createElement('button');
  newElement.textContent = buttonText;
  return element.append(newElement);
};
const text = 'the button is here';
console.log(createButton(text));
export { createButton };
