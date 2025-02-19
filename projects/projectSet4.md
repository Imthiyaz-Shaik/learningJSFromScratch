## project 4 Link
[click here](https://stackblitz.com/edit/vitejs-vite-zvguonqy?file=index.html)

# solution code

## GUESS THE NUMBER

```JavaScriptCode

let random = parseInt(Math.random() * 100 + 1);

const submitBut = document.querySelector('.button');
const input = document.querySelector('.input');
const prev = document.querySelector('.prevGuessList');
const chanceRemain = document.querySelector('.remain');
const hints = document.querySelector('.highOrLow');
const results = document.querySelector('.results');

const newButt = document.createElement('button');

let prevGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
  submitBut.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(input.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please Enter the valid Number');
  } else if (guess < 1 || guess > 100) {
    alert('please enter the number between 1 and 100');
  } else {
    prevGuess.push(guess);
    displayGuess(guess);
    checkGuess(guess);
  }
}
function checkGuess(guess) {
  if (guess === random) {
    displayMsg(`you guessed it right`);
    endGame();
  } else if (guess < random) {
    displayMsg(` HINT :Think Higher`);
  } else if (guess > random) {
    displayMsg(` HINT :Keep It LOW`);
  }
}
function displayGuess(guess) {
  //clean UP method
  input.value = '';
  prev.innerHTML += `${guess},`;
  numGuess++;
  if (guess === 11) {
    displayMsg(`Game Over. Random Number is ${random}`);
    endGame();
  }
  chanceRemain.textContent = `${11 - numGuess}`;
}
function displayMsg(message) {
  hints.innerHTML = `<h3>${message}</h3>`;
}
function endGame() {
  input.value = '';
  input.setAttribute('disabled', '');
  prev.textContent = '';
  chanceRemain.textContent = 10;
  newButt.innerHTML = `<h3 class ='newGame'>NEW GAME</h3>`;
  newButt.className = 'newButt';
  results.appendChild(newButt);
  playGame = false;
  newGame();
}
function newGame() {
  newButt.addEventListener('click', function (e) {
    input.removeAttribute('disabled');
    results.removeChild(newButt);
    random = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    chanceRemain.textContent = `${11 - numGuess}`;
    prev.innerHTML = '';
    displayMsg('');
    playGame = true;
  });
}

```