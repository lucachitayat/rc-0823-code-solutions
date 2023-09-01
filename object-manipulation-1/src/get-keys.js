/* exported getKeys */

function getKeys(object) {
  const keysArray = [];
  for (const x in object) {
    keysArray.push(x);
  }
  return keysArray;
}
