/* exported findIndex */

function findIndex(array, value) {
  for (let x = 0; x < array.length; x++) {
    if (array[x] === value) {
      return x;
    }
  }
  return -1;
}
