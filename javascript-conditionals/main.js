/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

const chosenNumber = 3;
console.log('Is ' + chosenNumber + ' under 5?', isUnderFive(chosenNumber));

function isEven(number) {
  if (number % 2 > 0) {
    return false;
  } else {
    return true;
  }
}

console.log('Is ' + chosenNumber + ' an even number?', isEven(chosenNumber));

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

const stringOfChoice = 'Timmy';
console.log(
  'Does ' + stringOfChoice + " start with 'J'?",
  startsWithJ(stringOfChoice)
);

function isOldEnoughToDrink(person) {
  if (person.age < 21) {
    return false;
  } else {
    return true;
  }
}

const chosenPerson = {
  name: [stringOfChoice] + ' Butler',
  age: 17,
};
console.log(chosenPerson);

console.log(
  'Is ' + chosenPerson.name + ' old enough to drink?',
  isOldEnoughToDrink(chosenPerson)
);

function isOldEnoughToDrive(person) {
  if (person.age < 16) {
    return false;
  } else {
    return true;
  }
}
console.log(
  'Is ' + chosenPerson.name + ' old enough to drive?',
  isOldEnoughToDrive(chosenPerson)
);

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 16 && person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
console.log(
  'Is ' + chosenPerson.name + ' old enough to drink and drive?',
  isOldEnoughToDrinkAndDrive(chosenPerson)
);

function categorizeAcidity(pH) {
  if (pH < 7) {
    return 'acidic';
  } else if (pH === 7) {
    return 'neutral';
  } else {
    return 'basic';
  }
}

const chosenpH = 7;
console.log(
  'Is a pH of ' + chosenpH + ' acidic, basic or neutral?',
  categorizeAcidity(chosenpH)
);

function introduceWarnerBro(name) {
  switch (name) {
    case 'Yakko':
    case 'Wakko':
      return "We're the warner brothers!";
    case 'Dot':
      return "~I'm cute!";
    default:
      return 'Goodnight Everybody';
  }
}

const warnerCharacters = ['Yakko', 'Wakko', 'Dot', 'Porky', 'Daffy', 'Bugs'];
const randomCharacter =
  warnerCharacters[Math.floor(Math.random() * warnerCharacters.length)];
console.log(randomCharacter + ' says ' + introduceWarnerBro(randomCharacter));

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'The Avengers';
    case 'comedy':
      return "Dude, Where's My Car??";
    case 'horror':
      return 'The Shining';
    case 'drama':
      return 'The Notebook';
    case 'musical':
      return 'Avenue Q';
    case 'sci-fi':
      return '2001: A Space Odyssey';
    default:
      return 'genre not recognized';
  }
}

const genresAvailable = [
  'action',
  'comedy',
  'horror',
  'drama',
  'musical',
  'sci-fi',
];
const randomGenre =
  genresAvailable[Math.floor(Math.random() * genresAvailable.length)];
console.log(
  'A good ' + randomGenre + ' movie is ' + recommendMovie(randomGenre)
);
