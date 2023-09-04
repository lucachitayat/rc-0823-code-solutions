/* exported initial */

function initial(array) {
  const intialArray = [];
  for (let x = 0; x <= array.length - 2; x++) {
    intialArray.push(array[x]);
  }
  return intialArray;
}
