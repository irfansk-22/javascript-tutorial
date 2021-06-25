// Person constructor
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  //The this keyword refers to the current instance of the object.
  console.log(this);
}

//In globlal scope the value of this is same as the global window object in case of browsers
console.log(this);

const brad = new Person('Brad', '9-10-1981');
const asad = new Person('Asad', '08-16-1999');

console.log(asad.calculateAge());
