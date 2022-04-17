// Exercise 1 - Factor Chain
// A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:

// Challenge 1
function factorChain(numbers) {
    if (numbers.length === 0) return false;
    else if (numbers.length === 1) return true;

    for (let i = 1; i < numbers.length; i++) {
        const cur = numbers[i];
        const prev = numbers[i - 1];
        if (cur % prev !== 0) return false;
    }
    return true;
}

// console.log(
//     factorChain([1, 2, 4, 8, 16, 32]) // should return true
// ,
//     factorChain([2, 4, 6, 7, 12]) // should return false
// ,
//     factorChain([10, 1]) // should return false
// )

// Exercise 2 - Is the Word an Isogram?
// An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

function isIsogram(str) {
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (str.indexOf(char) !== str.lastIndexOf(char)) return false;
    }
    return true;
}

// Examples
console.log(
    isIsogram("Algorism")// should return true
// ,
//     isIsogram("PasSword")// should return false
//     // // Not case sensitive.
// ,
//     isIsogram("Consecutive")// should return false
);