//EVENT BUBBLING

/**
 * Event bubbling is the bubbling up of events through the dom.
 * So when an event happens on a particular element in the dom and
 * actually will bubble up through its parent.
 */

// document.querySelector('.card-title').addEventListener('click', 
// function() {
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', 
// function() {
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', 
// function() {
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', 
// function() {
//   console.log('col');
// });


//EVENT DELEGATION

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {

  // if(e.target.parentElement.className === 'delete-item secondary-content') {
  //   console.log('delete item');
  // }

  if(e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}

/**
 * Event delegation can be described as kind of opposite of event bubbling.
 * 
 * So the whole definition of event delegation in simple terms is just
 * putting the listener on a parent of what you're looking for and then
 * putting a condition in here to try to find the target.
 * - brad
 */