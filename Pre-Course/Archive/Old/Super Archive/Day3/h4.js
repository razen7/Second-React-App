// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".
// If you can't find Nemo, return "I can't find Nemo :(".

function findNemo(str) {
    let arr = str.split(' ');
    let index = arr.indexOf('Nemo');
    return ++index ? `I found Nemo at ${index}!` : `I can't find Nemo :(`;
}
console.log(
findNemo("I am finding Nemo !") // should return "I found Nemo at 4!"
,
findNemo("Nemo is me") // should return "I found Nemo at 1!"
,
findNemo("I  am") // should return "I found Nemo at 2!"
)