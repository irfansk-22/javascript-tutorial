//🔶 Single Element Selectors

//document.getElementById();
console.log(document.getElementById('task-title'));

const taskTitle = document.getElementById('task-title');

//Get things from the elements
console.log(taskTitle.id);
console.log(taskTitle.className);

//Change Styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
// taskTitle.style.display = 'none';

//Change Content
taskTitle.textContent = 'hola <hr />';
taskTitle.innerText = 'my tasks <hr />';
taskTitle.innerHTML = 'my tasks <hr />';

/**
 * Difference between the textContent and innerText?
 *
 * https://stackoverflow.com/questions/35213147/difference-between-textcontent-vs-innertext
 * 
 */

//document.querySelector();
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'pink';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(odd)').textContent = 'Odd';    //will only change content of the first odd element
document.querySelector('li:nth-child(even)').textContent = 'Even';  //will only change content of the first even element