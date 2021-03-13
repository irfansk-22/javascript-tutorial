//REPLACE ELEMENT

//Create Element
const newHeading = document.createElement('h2');

//Add id
newHeading.id = 'task-title';

//New text node
newHeading.appendChild(document.createTextNode('Task List'));

//Get the old heading
const oldHeading = document.getElementById('task-title');

//Parent
const cardAction = document.querySelector('.card-action');

//Replace
cardAction.replaceChild(newHeading, oldHeading);


//REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//Remove list item
lis[0].remove();

//Remove child element
list.removeChild(lis[3]);


//CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];
let val;

//Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
val = link;
link.classList.remove('test');

//Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href');
val = link.hasAttribute('title');
val = link.setAttribute('title', 'Google');
val = link;
link.removeAttribute('title');

console.log(val);