/* exported sumAll */

function sumAll(array) {
  //  const allValues=[]
  let summedNumber = 0;
  for (let x = 0; x < array.length; x++) {
    const currentNumber = array[x];
    summedNumber += currentNumber;
  }
  return summedNumber;
}
