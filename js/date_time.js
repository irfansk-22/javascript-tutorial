let val;
const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

console.log(val);

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1987);
birthday.setHours(3);
birthday.setMinutes(45);
birthday.setSeconds(2);

console.log(birthday);