/* exported oddOrEven */

function oddOrEven(numbers) {
  const oddOrEvenArray = [];
  for (let x = 0; x < numbers.length; x++) {
    if (numbers[x] % 2 === 1) {
      oddOrEvenArray.push('odd');
    } else {
      oddOrEvenArray.push('even');
    }
  }
  console.log(oddOrEvenArray);
  return oddOrEvenArray;
}
