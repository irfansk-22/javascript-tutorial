/**
 * Java, C++ an all uses class based objects Es5 js however doesn't.
 * 
 * Each object in js has a prototype and prototype is 
 * an object itself. All objects inherit their properties 
 * and methods from their prototype.
 * 
 * when you're dealing with object literals, then you're inheriting from a prototype called 
 * Object.prototype.
 * 
 * when you're dealing with objects that were created through a constructor, like, for instance, 
 * the person constructor that we created, it's going to come from Person.prototype.
 * OK, now there's something called the prototype chain where you have this prototype, but then you can
 * go up to the main object prototype.
 * 
 * Prototype Chain reference,
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-prototype-chain
*/

// Object.prototype

// Person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
}

// Calculate age 
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name 
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMaried = function (newLastName) {
  this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '9-3-1988');
const mary = new Person('Mary','Jane', 'March 20 1978');

console.log(mary);
console.log(john.calculateAge());
console.log(mary.getFullName());

mary.getsMaried('Smith');
console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));
