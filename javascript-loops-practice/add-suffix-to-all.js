/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  const fullWordList = [];
  for (let x = 0; x < words.length; x++) {
    const newWord = words[x] + suffix;
    fullWordList.push(newWord);
  }
  return fullWordList;
}
