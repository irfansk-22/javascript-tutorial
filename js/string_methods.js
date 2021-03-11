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

val = firstName[1];

//indexOf()
val = firstName.indexOf('a');
val = firstName.lastIndexOf('l');

//charAt()
val = firstName.charAt('0');

//Get last char
val = firstName.charAt(firstName.length - 1);

//substring()
val = firstName.substring(0, 4);

//slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

//split()
val = str.split(' ');
val = tags.split(',');

//replace()
val = str.replace('brad', 'Jack');  //case sensitive 

//includes()
val = str.includes('Hello');
val = str.includes('foo');


console.log(val);
