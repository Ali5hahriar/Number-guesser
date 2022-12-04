// Game Functionality
// Player Must Guess a Number Between a Min and Max
// Player Gets a Certain Amount of Guesses
// Notify Player of Guesses Remaining
// Notify the Player of the Correct Answer if Loose
// Let Player Choose to Play Again

// Game Values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements 
const UIgame = document.querySelector('#game'),
        UIminNum = document.querySelector('.min-num'),
        UImaxNum = document.querySelector('.max-num'),
        UIguessBtn = document.querySelector('#guess-btn'),
        UIguessInput = document.querySelector('#guess-input'),
        UImessage = document.querySelector('.message');

// Assign UI min and max
UIminNum.textContent = min;
UImaxNum.textContent = max;

// Listen for guess
UIguessBtn.addEventListener('click', function(){
    let guess = parseInt(UIguessInput.value);

    // Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won
    if(guess === winningNum){
        // Game over - won
        gameOver(true, `${winningNum} is correct, YOU WIN!`);
    } else {
        // Wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0){
            // Game over - lost
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
        } else {
            // Game continues - answer wrong

            // Change border color  
            UIguessInput.style.borderColor = 'red';

            // Clear Input
            UIguessInput.value = '';

            // Tell user its the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }
});

// Listen for play again
UIgame.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

// Path: app.js



