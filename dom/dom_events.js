// document.querySelector('.clear-tasks').addEventListener('click', 
// function(event){
//     console.log('Hello world');
//     event.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(event) {

  // console.log('clicked');
  let val;

  val = event;

  //Event target element
  val = event.target;
  val = event.target.id;
  val = event.target.className;
  val = event.target.classList;

  event.target.innerText = 'Hello';

  //Event type
  val = event.type;

  //Timestamp
  val = event.timeStamp;

  //Coordinates of the events relative to window
  val = event.clientY;
  val = event.clientX;

  //Coordinates of the events relative to element itself
  val = event.offsetY;
  val = event.offsetX;


  console.log(val);
}
