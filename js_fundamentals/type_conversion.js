let val;

//Number to string
val = String(555);
val = String(4+4);

//Boolean to string
val = String(true);

//Date to string
val = String(new Date());

//Array to string
val = String([1,2,3,4,5]);

//In addition to the String() function we also have a toString() method.

val = (5).toString();
val = (true).toString();

//Or simply wrap the value with single or double quotes
val = '3424';
val = "true";
console.log(typeof val);

//String to number
val = Number('5');
val = Number(true);     //1
val = Number(false);    //0
val = Number(null);     //0
val = Number('hello');  //NaN
val = Number([1,2,3]);  //NaN

val = parseInt('100.333');
val = parseFloat('100.324');

//Output
console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed(5)); //only works on number


//TYPE COERCION

/**
 * Type Coercion refers to the process of automatic 
 * or implicit conversion of values from one data 
 * type to another. This includes conversion from 
 * Number to String, String to Number, Boolean to 
 * Number etc. when different types of operators 
 * are applied to the values.
 */

const val1 = '5';
const val2 = 6;

const sum = Number(val1 + val2);
console.log(sum);
console.log(typeof sum);