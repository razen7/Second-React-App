// Write a function `pickRandomWord` which picks a random word from the given list and returns it.

function pickRandomWord(words) {
    // write your code here
    return words[Math.floor(Math.random() * words.length)]

}
let words = ['respect', 'motion', 'coat', 'confused', 'atten', 'graceful', 'unusual', 'subsequent', 'guide', 'cost', 'medical'];
console.log(pickRandomWord(words));// should print one of the words in the array