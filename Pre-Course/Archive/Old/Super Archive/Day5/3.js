// Implement the `guessTheNumberGame` function using prompt, and alert as explained in class.
// The user should have 5 attempts to guess the number chosen by computer.
// After every guess you should give feedback whether `guess was smaller` or `guess was larger`
// If user is not able to guess the number, say `you lose, I was thinking of X`

// Part 1
/*
Breakdown the game into atleast 3 parts that you would complete to buid this game.
For eg: 
Part 1 can be to take the user input from browser and print it in console.
Part 2 compare the number to see if number is larger or smaller
Part 3 Say correct or msg
*/

//Part 2
function guessTheNumberGame() {
    // write your code here
    let number = Math.floor(Math.random() * 101);
    let lastGuess = 'N/A';
    for (let i = 0; i < 5; i++) {
        let guess = prompt(`Guess the number`);
        while (isNaN(guess)) {
            guess = prompt(`Guess can only be a number, your guess is ${typeof (guess)}`);
        }
        // [guess, number] = [Number(guess), Number(number)];
        if (guess == number) {
            alert('you have won')
            return;
        } else if (guess < number) alert(`My number is greater than ${guess}`)
        else alert(`My number is less than ${guess}`)
    }
    alert(`Sorry your 5 chances are over, your number is ${number}`);
}
guessTheNumberGame()
