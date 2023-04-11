const setButton = (buttonText) => {
  const element = document.querySelector('body');
  element.innerHTML += '<button>' + buttonText + '</button>';
  return element.innerHTML;
};
const text = 'i am a button';
console.log(setButton(text));
//export { setButton };
