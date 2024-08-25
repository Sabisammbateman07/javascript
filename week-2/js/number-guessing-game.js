function runGame() {
    const target = Math.floor((Math.random())*100)+1;
 
    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;

    do {
      let guessString = prompt("I am thinking of a number between 1 and 100.\n\n What is the number?");
      numTries +=1;
      if (guessString === null) {
        return;
      }

      guessNumber = +guessString;
      correct = checkGuess(guessNumber, target);
    }
    while (!correct);
  
    alert('You got it. The number was ' +target + '.\n\n It took you' +numTries +' tries to guess correctly.')
}

function checkGuess(guessNumber, target) {
  let correct = false;

  if (isNaN(guessNumber)) {
      alert ('You have not entered a number.\n\n Please enter a number in the 1-100 range.');

  } else if ((guessNumber <1) || (guessNumber >100)) {
      alert('Please enter an integer in the 1 to 100 range.');

  } else if (guessNumber > target) {
      alert('Your number is too large! \n Guess again.');

  } else if (guessNumber < target) {
      alert('Your number is too small! \n Guess again.');

  } else {
      correct = true;
  }

  return correct; 
}