// Destructuring Assignment

let a, b;
[a, b] = [100, 200];

// Rest pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500];

({ a, b } = {a: 100, b: 200, c: 300, d: 400, e: 500});
({ a, b, ...rest } = {a: 100, b: 200, c: 300, d: 400, e: 500});

console.log(a, b);
console.log(rest);

({js, cpp, ...rem} = {js: 1995, cpp: 1980, scala: 1985, go: 2008, swift: 2013});
console.log(js, cpp);
console.log(rem);

// ARRAY DESTRUCTURING
const people = ['John', 'Beth', 'Mike'];
const [person1, person2, person3] = people;

console.log(person1, person2, person3);

//Parse array returned from function
function getPeople() {
  return ['John', 'Beth', 'Mike'];
}

let p1,p2,p3;
[p1,p2,p3] = getPeople();
console.log(p1, p2, p3);

// OBJECT DESTRUCTURING
const player = {
  name: 'Messi',
  age: 35,
  city: 'Bunes Aires',
  gender: 'male',
  greeting: function() {
    console.log('Hola');
  }
}

// Old ES5
// const name = player.name, age = player.age, city = player.city;
// console.log(name, age, city);

// New ES6 Destructuring
const { name, age, city, greeting } = player;
console.log(name, age, city);

greeting();
