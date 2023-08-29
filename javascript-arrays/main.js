const colors = ['red', 'white', 'blue'];
console.log('Colors[0]: ', colors[0]);
console.log('colors[1]: ', colors[1]);
console.log('colors[2]: ', colors[2]);

console.log(
  'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.'
);

colors[2] = 'green';

console.log(
  'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.'
);

console.log('value of colors: ', colors);

const students = ['Kyle', 'Malcolm', 'Luca', 'Ghost'];
const numberOfStudents = students.length;
console.log('Number of students: ', numberOfStudents);

const lastIndex = numberOfStudents - 1;
// const lastIndex= (students.length-1)
const lastStudent = students[lastIndex];
console.log('Last student in the array: ', lastStudent);
console.log('Student List: ', students);
