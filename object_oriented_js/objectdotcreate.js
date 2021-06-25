const personPrototype = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}

const mary = Object.create(personPrototype);
mary.firstName = 'Mary';
mary.lastName = 'William';
mary.age = 30;

mary.getsMarried('Thompson');

console.log(mary.greeting());

const brad = Object.create(personPrototype, {
  firstName: {value: 'Brad'},
  lastName: {value: 'Traversy'},
  age: 36,
});

console.log(brad);
console.log(brad.greeting());
