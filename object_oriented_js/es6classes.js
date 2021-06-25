/**
 * Even though we're using ES6 classes, we still get
 * the prototype object in the __proto__ property in 
 * which we have a constructor method.
 * 
 * So under the hood the javaScript engine works almost
 * the exact same way that's why es6 classes are called
 * as syntactic sugar or a convenient syntex, because it's
 * basically just changing the way that we write them, 
 * not the way that it works in the underlying engine or
 * underlying language.
 * 
 */

 class Person {
  constructor (firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(x,y) {
    return x + y;
  }

}

const mary = new Person('mary', 'Williams', '8-16-1999');
mary.getsMarried('Thompson');
console.log(mary);

//accessing static method using class name
console.log(Person.addNumbers(2, 4));
