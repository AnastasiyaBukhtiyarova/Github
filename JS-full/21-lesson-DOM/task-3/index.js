'use strict';
const getItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
};
getItemsList();
const getItemsArray = () => {
  const elementsArray = document.querySelectorAll('.tool');
  Array.from(elementsArray);
  console.dir(elementsArray);
};
getItemsArray();
export { getItemsArray, getItemsList };
