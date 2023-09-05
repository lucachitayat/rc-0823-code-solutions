/* exported reverseWord */

function reverseWord(word) {
  let reverseWord = '';
  for (let x = word.length - 1; x >= 0; x--) {
    reverseWord += word.at(x);
  }
  return reverseWord;
}
