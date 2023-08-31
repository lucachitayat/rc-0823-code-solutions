/* exported includesSeven */

function includesSeven(array) {
  for (let x = 0; x < array.length; x++) {
    // if(typeof array[x]==="string"){
    //   return
    // }
    // else if(array[x]===7){
    if (array[x] === 7) {
      return true;
    }
  }
  return false;
}
