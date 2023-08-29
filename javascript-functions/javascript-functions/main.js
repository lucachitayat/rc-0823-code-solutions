function convertMinutesToSeconds(minutes) {
  const convertedToSeconds = minutes * 60;
  console.log(minutes + ' minutes converted to secconds: ', convertedToSeconds);
}

convertMinutesToSeconds(5);

function greet(name) {
  console.log('Hey, ' + name + '!');
}

greet('Chauncey');

function getArea(width, height) {
  // const areaGot=width*height
  console.log(
    'The area for an object given a width of ' +
      width +
      ' and a height of ' +
      height +
      ' is equal to ' +
      width * height
  );
}

getArea(17, 42);

function getFirstName(person) {
  console.log(
    'The first name of ' +
      person.firstName +
      ' ' +
      person.lastName +
      ' is ' +
      person.firstName
  );
}

getFirstName({ firstName: 'Steve', lastName: 'Perry' });

function getLastElement(array) {
  // console.log('The last item in the array is ' + (array[array.length-1]));
  console.log(
    'The last item in the array of stuff I came up with is ' + array.at(-1)
  );
}

getLastElement(['Bubblegum', 'Cheese', 'Milk', 'Eggs', 'Dookie']);
