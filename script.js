'use strict';

let secretNumber = generateRandomNumber();
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    setMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    setMessage('🎉 Correct Number!');
    setNumber(secretNumber);

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > score ? setMessage('📈 Too high!') : setMessage('📉 Too low!');
      score--;
      setScore(score);
    } else {
      setScore(0);
      setMessage('💥 You lost!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = generateRandomNumber();
  setMessage('Start guessing...');
  setScore(20);
  setNumber('?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});

function setMessage(message) {
  document.querySelector('.message').textContent = message;
}

function setScore(score) {
  document.querySelector('.score').textContent = score;
}

function generateRandomNumber() {
  return Math.trunc(Math.random() * score) + 1;
}

function setNumber(secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
}
