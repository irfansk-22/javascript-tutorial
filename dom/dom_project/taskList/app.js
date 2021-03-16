//Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

/* LOAD ALL EVENT LISTENERS */
loadEventListeners();

function loadEventListeners() {

  //DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);

  //Add task event
  form.addEventListener('submit', addTask);

  //Remove task event
  taskList.addEventListener('click', removeTask);

  //Clear task event
  clearBtn.addEventListener('click', clearTasks);

  //Filter tasks
  filter.addEventListener('keyup', filterTasks);

}

/* GET TASKS FROM LOCAL STORAGE */
function getTasks(){

  let tasks;

  if(localStorage.getItem('tasks') === null) {
    // console.log('local storage doesn\'t have any task yet');
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task) {
  createListItem(task);
  });

}

//Function to create list items
function createListItem(itemContent) {

  //Create li element
  const li = document.createElement('li');

  //Add materialize css class to li
  li.className = 'collection-item';

  //Create text node and append to the li
  li.appendChild(document.createTextNode(itemContent));

  //Create new link element
  const link = document.createElement('a');

  //Add a materialize css class to link 
  link.className = 'delete-item secondary-content';

  //Add a icon
  link.innerHTML = '<i class="fa fa-remove"></i>';

  //Append the link to li
  li.appendChild(link);

  //Append li to ul
  taskList.appendChild(li);

}

/* ADD TASK */
function addTask(e) {

  if(taskInput.value === '') {
    alert('Add a task');
  } else {

    //Create li
    createListItem(taskInput.value);

    //Store in ls
    storeTaskInLocalStorage(taskInput.value);
  }

  //Clear input
  taskInput.value = '';

  e.preventDefault();
}


/* STORE TASK */
function storeTaskInLocalStorage(taskToAddInLocalStorage) {

  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(taskToAddInLocalStorage);

  localStorage.setItem('tasks', JSON.stringify(tasks));

}

/* REMOVE TASK */
function removeTask(e) {

  //using event delegation technique
  if (e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are you sure, you want to delete this?')) {
      e.target.parentElement.parentElement.remove();

      //Remove from ls
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);

      //e.target.parentElement.parentElement === list item to be deleted
    }
  }

}

/* REMOVE TASK FROM LOCAL STORAGE */
function removeTaskFromLocalStorage(taskToDeleteFromLocalStorage) {
  
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(currentTask, index) {
    if(taskToDeleteFromLocalStorage.textContent === currentTask) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

/* CLEAR TASKS */
function clearTasks() {
  
  taskList.innerHTML = '';
  
  //Faster way, but didn't get that properly
  // while(taskList.firstChild) {
  //   taskList.removeChild(taskList.firstChild);
  // }

  //Clear from LS
  clearTasksFromLocalStorage();

}

/* CLEAR TASKS FROM LOCAL STORAGE */
function clearTasksFromLocalStorage() {

  localStorage.clear();
}

/* FILTER TASKS */
function filterTasks(e) {

  const text = e.target.value.toLowerCase();
  // console.log(text);

  //here we can use forEach loop because querySelectorAll returns a nodeList
  document.querySelectorAll('.collection-item').forEach(
    function(task){

      const item = task.firstChild.textContent;

      if(item.toLowerCase().indexOf(text) !== -1) {
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }

    });
}

/**
 * known issues
 * 1) empty spaces is getting added in the list
 * 2) If i have two tasks of the same name then when i remvoe one it get removed from the dom
 * and from the local storage but the other task of that name stays in the dom however is getting
 * removed from the local storage.
 * 
 * request feature
 * 1) Add line through function when someone clicks on the task which is done.
 * 2) Deploy this proejct.
 */