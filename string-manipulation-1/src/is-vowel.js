/* exported isVowel */

function isVowel(character) {
  const firstStandardize = character.toUpperCase();
  if (
    firstStandardize === 'A' ||
    firstStandardize === 'E' ||
    firstStandardize === 'I' ||
    firstStandardize === 'O' ||
    firstStandardize === 'U'
  ) {
    return true;
  }
  return false;
}
