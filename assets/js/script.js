// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners top them

document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');  // returns all buttons

    // loop to iterate through the array of buttons and add event listenern to each button
    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'submit') {
                alert('You clicked submit');
            }
            else {
                let gameType = this.getAttribute('data-type');
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

/**
 * The main game loop, called when the script is first loaded and after the user's answer has been processed
 */
function runGame() {
    // create two random numbers between 1 and 25 and store in variables
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}