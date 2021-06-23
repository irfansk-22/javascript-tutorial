const firstName = 'William';
const lastName = 'Johnson';
const age = 21;
const str = 'Hello there my name is brad';
const tags = 'web design,web development,programming';
let val;

val = firstName + lastName;

//Concatenation
val = firstName + ' ' + lastName;

//Append
val = 'Brad ';
val += 'Traversy';
val = 'Hello, my name is ' + firstName + ' and I am ' + age;

//Escaping
val = 'That\'s awesome, I can\'t wait \n\t Let\'s go!';

//Length
val = firstName.length;

//Concat
val = firstName.concat(' ', lastName);

//Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// we can treat string like read only arrays
val = firstName[1];

//indexOf()
val = firstName.indexOf('a');
val = firstName.lastIndexOf('l');
console.log(val);

//charAt()
val = firstName.charAt('0');
val = firstName.charAt(4);
console.log(val);

/**
 * if the character or number that we are searching for 
 * is not there then indexOf() and charAt() will return
 * negative 1, that's the default.
*/

// Get last char of a string
val = firstName.charAt(firstName.length - 1);

//substring()
val = firstName.substring(0, 4);

//slice() - negative number also work in slice unlike substring
//mostly use with arrays to pull things out of arrays
val = firstName.slice(0, 4);
val = firstName.slice(-4);
console.log(val);

//split()
val = str.split(' ');
console.log(val);
val = tags.split(',');

//replace()
val = str.replace('brad', 'Jack');  //case sensitive 

//includes()
val = str.includes('Hello');
val = str.includes('foo');


console.log(val);


/**
 * Difference between String.slice & String.substring?
 * 
 * https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring
 * 
 */