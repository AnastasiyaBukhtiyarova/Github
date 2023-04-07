function getItemsList() {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
}
console.log(getItemsList());
function getItemsArray() {
  const elemensArray = document.querySelectorAll('.tool');
  Array.from(elemensArray);
  console.dir(elemensArray);
  return elemensArray;
}
console.log(getItemsArray());
