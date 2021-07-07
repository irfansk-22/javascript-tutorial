//ITERATOR EXAMPLE
function nameIterator(namesArr) {
  let nextIndex = 0;

  const obj = {
    next: function() {
      return nextIndex < namesArr.length ? 
      { value: namesArr[nextIndex++], done: false } : 
      { done: true }
    }
  }

  return obj;
}

// Create an array of names
const namesArr = ['Jack', 'Jill', 'John'];

// Init iterator and pass in the names array
const names = nameIterator(namesArr);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next());


// GENERATOR EXAMPLE
function* sayNames(){
  yield 'Jack';
  yield 'Jill';
  yield 'John';
  // yield value doesn't have to be a string we can yield whatever we want
}

const name = sayNames();

console.log(name.next());
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next());


// ID Creator example ~ generator
function* createIds() {
  let index = 1;

  while(true) {
    yield index++;
  }
}

const gen = createIds();

for (let i = 1; i < 11; i++)
  console.log(gen.next().value);


/**
 * Iterators and generators are both different, but they're used in similar ways and they're both 
 * used to iterate through something. 
 * 
 * Iterators are kind of like advanced loops that can be paused and then generators are functions 
 * that can return multiple values what's called yield values.
 * 
 * Follow the below link to know more,
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
 * 
 * https://blog.logrocket.com/javascript-iterators-and-generators-a-complete-guide/
 */
