/* exported filterOutStrings */
// A new array containing all of the original input values except the strings.

function filterOutStrings(values) {
  const filteredArray = [];
  for (let x = 0; x < values.length; x++) {
    if (typeof values[x] !== 'string') {
      filteredArray.push(values[x]);
    }
  }
  return filteredArray;
}
