const number1 = 2;
const number2 = 4;

const product = number1 * number2;
console.log(
  'Product of numbers, and typeof: ',
  product,
  ' is a ',
  typeof product
);

const charge = 10;
const payment = 4;

const amountRemaining = charge - payment;
console.log(
  'Amount remaining to pay, and typeof: ',
  amountRemaining,
  ' is a ',
  typeof amountRemaining
);

const tests = 92;
const assignments = 98;
const final = 88;

const grade = (tests + assignments + final) / 3;
console.log('Average grade: ', grade);
console.log('Grade typeof: ', typeof grade);

const firstName = 'Kenny';
const lastName = 'Powers';
const fullName = firstName + ' ' + lastName;
console.log('Full name: ', fullName);
console.log('Full name typeof: ', typeof fullName);

const pH = 6;
const isAcidic = pH < 7;
console.log('Is pH of 6 acidic? : ', isAcidic);
console.log('pH typeof: ', typeof isAcidic);

const numberOfSoldiers = 300;
const isSparta = numberOfSoldiers === 300;
console.log('Is it Sparta?? : ', isSparta);
console.log('Sparta typeof: ', typeof isSparta);

let nickname = fullName;
nickname += ' is the GOAT';
console.log('Nickname: ', nickname);
console.log('Nickname typeof: ', nickname);
