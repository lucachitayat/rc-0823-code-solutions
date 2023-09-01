/* exported reverse */

function reverse(array) {
  const reversedArray = [];
  for (let x = array.length - 1; x >= 0; x--) {
    reversedArray.push(array[x]);
  }
  return reversedArray;
}
