// SETS - Stores unique values of any type

const set1 = new Set();

console.log(typeof set1);

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100); // won't be added as 100 is already present in the set

console.log(set1);

// const set2 = new Set([1, true, 'string']);
// console.log(set2);

// Get count
console.log(set1.size);

// Check for values
console.log(set1.has(100));
console.log(set1.has(50+50));

console.log(set1.has({name: 'John'}));  // will log false

console.log({name: 'John'} === {name: 'John'})  // will log false

// because even if they are looking similar both are 
// pointing towards the different location in the memory
// they are not primitive values they are reference object.

// Delete from set
set1.delete(100);

console.log(set1);
console.log('*********************');

// ITERATING THROUGH SETS

// for..of
for(let item of set1) {
  console.log(item);
}

console.log('*********************');

// forEach loop
set1.forEach((values) => {
  console.log(values);
});

// CONVERT SET TO ARRAY
const setArr = Array.from(set1);
console.log(setArr);
