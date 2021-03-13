// Global scope
var a = 1;
let b = 2;
const c = 3; 

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function scope: ' , a, b, c);
// }

// test();

// if (true) {
//   //Block scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
  
//   console.log('Block Scope: ', a, b, c);
// }

for(var a = 0; a < 10; a++){
  console.log(`Loop: ${a}`);
} 

console.log('Global Scope: ' + a, b ,c);

/**
 * A good reference about scope variables in js.
 * 
 * https://www.w3schools.com/js/js_let.asp
 */