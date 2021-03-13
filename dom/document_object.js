let val;

val = document;
val = document.all;   //deprecated, used here just for demonstration
console.log(val);
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;


//we can select html elements in js without using selectors but it's not recommended.
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;
// val = document.forms[1];    //will give undefined as there is only one form present in the markup

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;
val = document.links[0].classList[0];

val = document.images;
val = document.scripts[2].getAttribute('src');

//
let scripts = document.scripts;

let scriptsArray = Array.from(scripts);

scriptsArray.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);