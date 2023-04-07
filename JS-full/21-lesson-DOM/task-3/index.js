function getItemsList() {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
}
console.log(getItemsList());

function getItemsArray() {
  const elementsArray = Array.from(document.querySelectorAll('.tool'));
  console.log(elementsArray);
  return elementsArray;
}
console.log(getItemsArray());

export { getItemsList, getItemsArray };
