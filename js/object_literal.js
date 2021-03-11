const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 33,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Sydney',
    state: 'NSW'
  },
  getBirthYear: function () {
    return 2021 - this.age;
  }
};

let val;

val = person;

//Get specific value
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[0];
val = person.address['city']
val = person.address.state;
val = person.getBirthYear();

console.log(val);

const people = [
  {name: 'John', age: 22},
  {name: 'Mike', age: 44},
  {name: 'Nancy', age: 33}
]

for (let i = 0; i < people.length; i++){
  console.log(people[i].name);
}