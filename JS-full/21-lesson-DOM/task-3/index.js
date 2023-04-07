function getItemsList() {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
}
console.log(getItemsList());
function getItemsArray() {
  const elemensArray = document.querySelectorAll('.tool');
  console.dir([elemensArray]);
  Array.from(elemensArray);
  return elemensArray;
}
console.log(getItemsArray());
export { getItemsList, getItemsArray };
