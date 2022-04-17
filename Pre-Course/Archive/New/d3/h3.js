console.log(findNemo("I am finding Nemo !")); // should return "I found Nemo at 4!"

findNemo("Nemo is me"); // should return "I found Nemo at 1!"

console.log(findNemo("I Nemo am")); // should return "I found Nemo at 2!"

function findNemo(sentence) {
    let arr = sentence.split(' ');
    let pos = arr.indexOf('Nemo');
    if (pos > -1) {
        return `I found Nemo at ${pos + 1}!`
    } else
        return "I can't find Nemo :("
}