/*

There are mainly two types of data types are there in js

1) Primitive Data Types

- Stored directly in the location the variable access.
- Stored in stack

example:

In js there are 6 primitive types

String
Number
Boolean
Null      //Intentional empty value
Undefined
Symbols(ES6)

2) Reference type

- Accessed by reference
- Objects that are stored on the heap
- A pointer to a location in memory

example:

Arrays
Object Literals
Functions
Dates 
Anything Else...


🔶 JS is a dynamically typed language

- Types are associated with values not variables
- The same variable can hold multiple types
- We do not need to specify types 
- Most other languages are statically typed(Java, C#, C++)
- There are supersets of JS and addons to allow static typing
(Typescript, Flow)


*/

//PRIMITIVE

//String
const name = 'John Doe';
console.log(typeof name);

//number
const age = 123;
console.log(typeof age);

//Boolean
const hasKids = true;
console.log(typeof hasKids);

//Null
const car = null;
console.log(typeof car);

//Undefined
let test;
console.log(typeof test);

//Symbol
const sym = Symbol();
console.log(typeof sym);


//REFERENCE TYPE

//Array
const hobbies = ['movies', 'music'];
console.log(typeof hobbies);

//Object Literal
const address = {
  city: 'Boston',
  state: 'LA'
}

console.log(typeof address);

//Date
const today = new Date();

console.log(today);
console.log(typeof today);

