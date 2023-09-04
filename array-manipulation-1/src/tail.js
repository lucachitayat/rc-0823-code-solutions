/* exported tail */

function tail(array) {
  const newArray = [];
  for (let x = 1; x < array.length; x++) {
    newArray.push(array[x]);
  }
  return newArray;
}
