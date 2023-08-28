const student = {
  firstName: 'Kenny',
  lastName: 'Powers',
  age: 36,
};

const fullName = student.firstName + ' ' + student.lastName;

console.log('Full name: ', fullName);

student.livesInIrvine = false;

student.previousOccupation = 'Research Insights Analyst';

console.log('Do they live in Irivine?', student.livesInIrvine);
console.log('Previous occupation: ', student.previousOccupation);

const vehicle = {
  make: 'Toyota',
  model: 'Prius C',
  year: 2014,
};

vehicle.color = 'gold';
vehicle.isConvertible = false;
console.log('Vehicle used: ', vehicle);

const pet = {
  name: 'Fufu',
  type: 'Shiba-Inu',
};
delete pet.name;
delete pet.type;
console.log('Pet stats: ', pet);
