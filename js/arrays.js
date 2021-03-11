//Create some arrays

const numbers = [32, 42, 5, 34, 13, 83, 52, 71];
const arrayOld = new Array(23,35,353,553);
const fruit = ['apple', 'banana', 'orange', 'pear'];
const mixedArray = [22, 'Hello', true, undefined, null, {a: 1, b: 2}, new Date()];

// console.log(mixedArray);

let val;

//Get array length
val = numbers.length;

//Check if is array
val = Array.isArray(numbers);

//Get single value
val = numbers[3];
val = numbers[0];

//Insert into array
numbers[2] = 100;

//Find index of value
val = numbers.indexOf(432);

//MUTATING ARRAYS
//Add on the end
numbers.push(999);

//Add on to front
numbers.unshift(111);

//Take off from end
numbers.pop();

//Take from the front
numbers.shift();

//Splice values
numbers.splice(1,1);

//Reverse
numbers.reverse();

//Concatenate array
val = numbers.concat(arrayOld);

//Sorting arrays
val = fruit.sort();
// val = numbers.sort();

// //Use the "compare function" to sort numbers properly
// val = numbers.sort(function(x, y) {
//   return x-y;
// });

// //Reverse sort
// val = numbers.sort(function(x, y) {
//   return y-x;
// });

//Find
function under50(num) {
  return num < 50;
}

val = numbers.find(under50);


console.log(numbers);
console.log(val);