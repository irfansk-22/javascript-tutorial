//FOR LOOP

for (let i = 1; i < 10; i++ ) {
  if (i === 2) {
    console.log('this is number 2');
    continue;
  }

  if (i === 5) {
    console.log('Stoping the loop');
    break;
  }

  console.log('Number ' + i);
}

//WHILE LOOP

// let i = 0;

// while(i < 10) {
//   console.log('Number ' + i);
//   i++;
// }

//DO WHILE LOOP

// let i = 0;

// do {
//   console.log('Number ' + i);
//   i++;
// } while(i < 10);


//LOOPING THROUGH THE ARRAY

const cars = ['Ford', 'BMW', 'Honda', 'Toyota', 'Tesla'];

//using raw for loop
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

//using forEach loop
cars.forEach(function(element, index, cars) {
  console.log(`${index} : ${element}`);
  console.log(cars);
});


//MAP
// const users = [
//   {id: 1, name: 'John'},
//   {id: 2, name: 'Sara'},
//   {id: 3, name: 'Mo'},
//   {id: 4, name: 'Steve'}
// ]

// const ids = users.map(function (user) {
//   return user.id;
// });

// console.log(ids);


//FOR IN LOOP
//often use with objects

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
}

for(let x in user) {
  console.log(`${x} : ${user[x]}`);
}
