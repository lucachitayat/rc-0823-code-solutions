const a = 3;
const b = 7;
const c = 9;

const maximumValue = Math.max(a, b, c);
console.log('Max value: ', maximumValue);

const heroes = ['Superman', 'Batman', 'Spiderman', 'Thor'];
let randomNumber = Math.random();
randomNumber *= heroes.length;

const randomIndex = Math.floor(randomNumber);

console.log('Random Index: ', randomIndex);
const randomHero = heroes[randomIndex];

console.log('Random Hero: ', randomHero);

const library = [
  {
    title: 'Be Here Now',
    author: 'Ram Dass',
  },
  {
    title: 'The Missing Piece',
    author: 'Shel Silverstein',
  },
  {
    title: 'The Stranger',
    author: 'Albert Camus',
  },
];

const lastBook = library.pop();
console.log('Last book: ', lastBook);

const firstBook = library.shift();
console.log('First book: ', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Updated library: ', library);

const fullName = 'Luca Chitayat';
const firstAndLastName = fullName.split(' ');
console.log('First and Last name seperated: ', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('SAY, MY, NAME: ', sayMyName + '!');
