/* exported getValues */

function getValues(object) {
  const valuesArray = [];
  for (const x in object) {
    valuesArray.push(object[x]);
  }
  return valuesArray;
}
