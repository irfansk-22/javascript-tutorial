//Create a symbol
const sym = Symbol();
const sym2 = Symbol('sym2');

console.log(sym)
console.log(sym2)

//No two symbols can be the same
console.log(Symbol() === Symbol()); //false
console.log(Symbol('123') === Symbol('123')); //false

//Can't use symbol value in string
//console.log(`Hello ${sym}`);  //Will throw an error, Can't convert a Symbol value to a string

//but we can cast it string then use it in the sentence
console.log(`Hello ${String(sym)}`);

//Unique Object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'prop1';
myObj[KEY2] = 'prop2';
myObj.key3 = 'prop3';
myObj.key4 = 'prop4';

console.log(myObj[KEY1]);
console.log(myObj[KEY2]);

//Symbols are not enumerable in for..in
for(let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
}

//Symbols are ignored by JSON.stringify
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));


/**
 * The unique thing about symbols is that every single one is completely unique 
 * and this makes them very valuable in terms of things like object property identifiers. 
 * And this is the main symbol. The main purpose of symbols is their uniqueness.
 * 
 * A youtube video explaning symbols,
 * https://www.youtube.com/watch?v=DHrYasp1OTw.
 * 
 */
