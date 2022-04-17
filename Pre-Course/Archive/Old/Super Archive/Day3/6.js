// Write a function which picks a random word from the given list.

let words = ['respect', 'motion', 'coat', 'confused', 'atten', 'graceful', 'unusual', 'subsequent', 'guide', 'cost', 'medical'];

function getRandom(words) {
    return words[Math.floor(Math.random() * words.length)];
}

console.log(getRandom(words));