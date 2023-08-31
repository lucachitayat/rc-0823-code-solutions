/* exported getStudentNames */

function getStudentNames(students) {
  const firstNamesArray = [];
  for (let x = 0; x < students.length; x++) {
    firstNamesArray.push(students[x].name);
  }
  return firstNamesArray;
}
