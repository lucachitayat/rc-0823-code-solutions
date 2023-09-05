/* exported isUpperCased */

function isUpperCased(word) {
  for (let x = 0; x < word.length; x++)
    if (word[x] !== word[x].toUpperCase()) {
      return false;
    }
  return true;
}
