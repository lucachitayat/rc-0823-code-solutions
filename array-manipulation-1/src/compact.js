/* exported compact */

function compact(array) {
  const compactArray = [];
  for (let x = 0; x < array.length; x++) {
    if (array[x]) {
      compactArray.push(array[x]);
    }
  }
  console.log(compactArray);
  return compactArray;
}
