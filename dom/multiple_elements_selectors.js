//🔶 Multiple Elements Selectors

//********document.getElementsByClassName();*********
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[4].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);


//**********document.getElementsByTagName();***********
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'magenta';
// lis[4].textContent = 'Hello';

//Convert HTMLCollection into array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(list, index) {
//   console.log(list.className);
//   list.textContent = `${index} : Hello`;
// });

// console.log(lis);

/**
 * 
 * The HTMLCollection is not an array, so array methods like forEach loop an all won't 
 * work on it.
 * 
 * If we want to use array methods on it then we have to conver it into an array first
 * using Array.from() method and then we can apply the array methods on it.
 * 
 */


//**********document.querySelectorAll();*************
let items = document.querySelectorAll('ul.collection li.collection-item');

// items = Array.from(items);
// items.reverse();

items.forEach(function(item, index) {
  item.textContent = `${index} : Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index) {
  li.style.background = 'grey';
});

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = '#ddd';
}


console.log(items);

/**
 * 
 * document.querySelectorAll(); gives NodeList unlike few other selectors which gives HTMLCollections.
 * so there are some array methods applies on NodeList.
 * 
 * (*need more research..)
 */