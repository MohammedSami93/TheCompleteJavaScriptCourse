'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Answer 🎉';

// console.log(console.log(document.querySelector('.message').textContent));

// document.querySelector('.guess').value = 10;
// console.log(document.querySelector('.guess').value);

//////////////////////////////////////////////////////////////

/* Create a random number */
let secretNumber = Math.trunc(
  Math.random() * Number(document.querySelector('.maxGuess').textContent) + 1
);

let scoreAgain = Number(document.querySelector('.score').textContent);
let score = scoreAgain;
// console.log(score, typeof score);

/* adding an action to the bottun */
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent =
      '😱 OoOoOoOoOoh, No number was chosen';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Answer';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#6ac1E9';
    document.querySelector('.number').style.width = '30rem';
    // High score
    let highscore = Number(document.querySelector('.highscore').textContent);
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      if (guess - secretNumber > 5) {
        document.querySelector('.message').textContent = '📈 Too high';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '📈 High';
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else {
      document.querySelector('.message').textContent = 'You lose the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = '#d45434';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      if (secretNumber - guess > 5) {
        document.querySelector('.message').textContent = '📉 Too low';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '📉 Low';
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else {
      document.querySelector('.message').textContent = 'You lose the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = '#d45434';
    }
  }
});

/* Again Button */
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(
    Math.random() * Number(document.querySelector('.maxGuess').textContent) + 1
  );
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = scoreAgain;
  score = scoreAgain;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
