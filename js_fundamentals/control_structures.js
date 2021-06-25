// if (somethingIsTrue) {
//   do something
// } else {
//   do something else
// }

const id = '100';

// //EQUAL TO
// if(id == 100) {
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }

// //NOT EQUAL TO 
// if(id != 100) {
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }

// //EQUAL TO VALUE & TYPE
// if(id === 100) {
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }

// //NOT EQUAL TO AND TYPE
// if(id !== 100) {
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }

/**
 * There are only six falsy values in JavaScript you 
 * should be aware of:

    false — boolean false
    0 — number zero
    “” — empty string
    null
    undefined
    NaN — Not A Number

// JavaScript — Double Equals vs. Triple Equals
https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a

*/


// Test if undefined
// if (typeof id !== 'undefined') {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log(`No ID`);
// }
// typeof  returns a string, so you compare the result of it to a string.


// GREATER OR LESS THAN
// if(id <= 200) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }
// ❔ how we can check greater than or less then between two different types 


//IF ELSE IF ELSE
const color = 'red';

// if (color === 'red') {
//   console.log('Color is red');
// } else if (color === 'blue') {
//   console.log('Color is blue');
// } else {
//   console.log('No color');
// }


//LOGICAL OPERATORS

const name = 'Steve Smith';
const age = 75;

//AND &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is a an adult`);
}

//OR ||
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'correct' : 'incorrect');

// WITHOUT BRACES if only one statement is to execute - not recommended
if (id === 100) 
  console.log('correct');
else 
  console.log('incorrect');