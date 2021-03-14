const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//Click
// clearBtn.addEventListener('click', runEvent);

//DoubleClick
// clearBtn.addEventListener('dblclick', runEvent);

//Mousedown
// clearBtn.addEventListener('mousedown', runEvent);

//Mouseup
// clearBtn.addEventListener('mouseup', runEvent);

//Mouseenter
// card.addEventListener('mouseenter', runEvent);

//Mouseenter
// card.addEventListener('mouseleave', runEvent);

//Mouseover
// card.addEventListener('mousover', runEvent);

//Mouseout
// card.addEventListener('mouseout', runEvent);

//Mousemove
card.addEventListener('mousemove', runEvent);


//Even Handler
function runEvent(event) {
  console.log(`EVENT TYPE: ${event.type}`);  

  heading.textContent =  `MouseX: ${event.offsetX} MouseY: ${event.offsetY}`;
  
  document.body.style.backgroundColor =  `rgb(${event.offsetX}, ${event.offsetY}, 40)`;
}