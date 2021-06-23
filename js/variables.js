// There are mainly 3 ways to declare variables in js, var is 
// present since creation of js but we should use let and const in
// modern js becuase they have better advantages in terms of block level scope.

var name = 'John Doe';
console.log(name);

name = 'Steve Smith';
console.log(name);

//Init var
var greeting;

console.log(greeting);  //will get undefined
greeting = 'Hello';
console.log(greeting);


// letters, numbers, underscore and $ 
// cannot start with a number 

// Multi word vars - camel case recommend in js 
// use pascal case in OOP var declaration
 
// var firstName = 'John'; //Camel case
// var first_name = 'Sara';  //snake case
// var FirstName = 'Tom';  // Pascal case


// LET
/**
 * let seem very similar to var, it's identical on global scope
 * but it has advantages when it come's to block level scope
 */

// let name;
// name = 'John Doe';
// console.log(name);

// name = 'Steve Smith';
// console.log(name);

//CONST
// const name = 'John';
// console.log(name);
// name = 'doe';   // can't reassign

// //Have to assign a value
// const greeting;  //will throw error of missing declaration


const person = {
  name: 'John',
  age: 30
}

person = {
  name: 'tom',
  age: 34
} // can't do this, Assignment to constant variable.

person.name = 'Sara';
person.age = 23;

console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);

numbers = [1,2,3,6] // can't do this, Assignment to constant variable.

console.log(numbers);

// WHEN WE DECLARE AN OBJECT OR AN ARRAY AS CONSTANT WE CAN'T CHANGE IT TO DIFFERENT OBJECT
// OR ARRAY BUT WE CAN CHANGE(MUTATE) THE CONTENT(DATA) INSIDE THE THEM.
