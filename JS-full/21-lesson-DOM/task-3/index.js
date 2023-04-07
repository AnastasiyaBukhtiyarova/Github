function getItemsList() {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
}
console.log(getItemsList());

function getItemsArray() {
  const elemensArray = Array.from(document.querySelectorAll('.tool')).map;
  console.dir(elemensArray);
  Array.from(elemensArray);
  return elemensArray;
}
console.log(getItemsArray());
export { getItemsList, getItemsArray };
