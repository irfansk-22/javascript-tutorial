// BUILT IN CONSTRUCTORS ~ NOT VERY USE OFTEN AND NOT EVEN RECOMMENDED USE PRIMITIVE TYPES INSTEAD
// built-in constructors effects on execution speed and may slow things down

// String
const name1 = 'Jeff';
console.log(name1);
console.log(typeof name1);

const name2 = new String('Jeff');
name2.foo = 'bar';

console.log(name2);
console.log(typeof name2);  //object

if (name2 === 'Jeff') {
  console.log('Yes');
} else {
  console.log('No');
}

// Number 
const num1 = 5;
const num2 = new Number(5);

console.log(typeof num2); //object

// Boolean 
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function (x, y) {
  return x + y;
}
console.log(getSum1(7,8));
console.log(typeof getSum1);  //function

const getSum2 = new Function('x', 'y', 'return x + y');
console.log(getSum2(1,8));
console.log(typeof getSum2);  //function    

// Object
const john1 = {name: 'John'};
console.log(john1);

const john2 = new Object({name: 'John'});
console.log(john2);

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(arr1);

// Regular Expression
const re1 = /\w+/;
console.log(re1);
console.log(typeof re1);  //object

const re2 = new RegExp('\\w+');

console.log(re2);
console.log(typeof re2);  //object
