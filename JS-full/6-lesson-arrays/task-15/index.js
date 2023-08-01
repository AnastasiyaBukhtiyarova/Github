const removeDuplicates = (array) => {
  if (!Array.isArray) {
    return null;
  }
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (newArr.indexOf(array[i]) < 0) {
      newArr.push(array[i]);
    }
  }
  return newArr;
};
console.log(removeDuplicates([0, 1, 20, 30, 5, 20]));
