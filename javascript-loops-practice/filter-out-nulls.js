/* exported filterOutNulls */

function filterOutNulls(values) {
  const filteredArray = [];
  for (let x = 0; x < values.length; x++) {
    if (values[x] !== null) {
      filteredArray.push(values[x]);
    }
  }
  return filteredArray;
}
