//Game values
let min = 1, 
  max = 10,
  winningNum = Math.floor(Math.random() * (max - min + 1) + min),
  guessesLeft = 3;

//UI Elements
const gameUI = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.msg');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play again event listener
game.addEventListener('mousedown', function(e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
 });

//Listen for guess
guessBtn.addEventListener('click', function() {
  
  let guess = parseInt(guessInput.value);

  //Validate
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    return false;
  }

  //Check if won
  if (guess === winningNum) {

    //Game over - won
    gameOver(true, `${winningNum} is correct, YOU WIN!`);

  } else {

    //Wrong number entered
    guessesLeft--;

    if(guessesLeft === 0) {

      //Game over - lost
      gameOver(false, `Game over you lost. The correct number was ${winningNum}`);

    } else {
      //Game continues - answer wrong

      //Change border color
      guessInput.style.borderColor = 'red';

      //Clear input
      guessInput.value = '';

      //Give hint and Tell user its the wrong number
      if (guess > winningNum) {
        setMessage(`Your guess is too high, ${guessesLeft} guesses left`, 'red');
      } else if(guess < winningNum) {
        setMessage(`Your guess is too low, ${guessesLeft} guesses left`, 'red');
      } 
    }
  }
  
});

//Game over
function gameOver(won , msg) {

  let color;
  color = (won === true) ? 'green' : 'red';

  //Disable input
  guessInput.disabled = 'true';

  //Change border color
  guessInput.style.borderColor = color;

  //Set text color 
  message.style.color = color;
  
  //Set message
  setMessage(msg);

  //Play again?
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

//Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}