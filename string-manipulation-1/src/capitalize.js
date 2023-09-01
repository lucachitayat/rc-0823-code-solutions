/* exported capitalize */

function capitalize(word) {
  const lowerFirst = word.toLowerCase();
  const capitalFirst = lowerFirst.charAt(0).toUpperCase();
  return capitalFirst + lowerFirst.slice(1);
}
