'use strict';

// document.querySelector('.message').textContent = 'Correct Number!'

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

function secret() {
  return Math.trunc(Math.random(0) * 20) + 1
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message
}

const stateMessage = document.querySelector('.message');
let secretNumber = secret();
let score = 19;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function() {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess)
  if (!guess) {
    displayMessage('No number :-(');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score + 1
      document.querySelector('.highscore').textContent = highscore;
    }

  } else if (guess != secretNumber) {
    displayMessage(guess >  secretNumber ? 'Too high!' : 'Too low!');
    document.querySelector('.score').textContent = score --;
  }
})

document.querySelector('.again').addEventListener('click', function() {
  secretNumber = secret();
  score = 19;
  stateMessage.textContent = 'start guessing...'
  document.querySelector('.score').textContent = 20
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?'
})
