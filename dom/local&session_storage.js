// set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// set session storage
// sessionStorage.setItem('name', 'John');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// clear local storage
// localStorage.clear();

// console.log(name, age);

/**
 * Difference between local storage and session storage is that 
 * local storage will stay until we manually clear it out in our 
 * settings or through our program and session storage will leave
 * once our browser is closed. other than that the api is almost same.
 */

document.querySelector('form').addEventListener('submit', 
function(e){

  const inputTask = document.getElementById('task').value;
  
  let tasksList;

  if (localStorage.getItem('tasks') === null) {
    tasksList = [];
  } else {
    tasksList = JSON.parse(localStorage.getItem('tasks'));
  }

  tasksList.push(inputTask);

  localStorage.setItem('tasks', JSON.stringify(tasksList));
  alert('Task saved');

  e.preventDefault();
});


const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task){
  console.log(task);
});