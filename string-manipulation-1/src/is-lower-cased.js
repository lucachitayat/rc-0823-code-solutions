/* exported isLowerCased */

function isLowerCased(word) {
  for (let x = 0; x < word.length; x++)
    if (word[x] !== word[x].toLowerCase()) {
      return false;
    }
  return true;
}
