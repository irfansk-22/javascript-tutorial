//FUNCTION DECLARATIONS

//In ES6 we define default parameters in the brackets of function only
function greet(firstName = 'John', lastName='Doe') {

  // //ES5 way of defining default parameters
  // if (typeof firstName === 'undefined'){
  //   firstName = 'John';      
  // }
  // if (typeof lastName === 'undefined') {
  //   lastName = 'Doe';
  // }
  return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet('Steve', 'Smith'));


//FUNCTION EXPRESSIONS
/*
Function expression is basically putting a function as a  variable 
assignment.
*/

const square = function (x = 3) {
  return x*x;
};

// console.log(square(8));


//IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function () {
//   console.log('IIFE Ran...');
// })();

// (function () {
//   console.log('IIFE Ran...');
// })();

(function(name) {
  console.log('Hello ' + name);
})('Kane');


//PROPERTY METHODS

const todo = {
  add: function () {
    console.log('Add todo...');
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function () {
  console.log('Delete todo...');
}

todo.read = function () {
  console.log('Reading');
}

todo.add();
todo.edit(22);
todo.delete();
todo.read();