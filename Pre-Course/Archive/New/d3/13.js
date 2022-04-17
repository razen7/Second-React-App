/*
  Write a function called `numbersAbove80` which takes in a list of numbers and return a new array containing all the numbers
  above 80 present in the list. You should call `isAbove80` function inside `numbersAbove80` function.
*/

function isAbove80(number) {
    return number > 80;
}
function numbersWhichAreEven(number) {
    return number % 2 === 0;
}
function numbersWhichAreSingleDigit(number) {
    return number < 10;
}

function numbersAbove80(numbers, func) {
    // write your code here.
    let filterFunction = func;
    let result = [];
    for (const age of numbers) {
        if (filterFunction(age)) {
            result.push(age)
        }
    }
    return result;
}

console.log(
    numbersAbove80([81, 80, 90, 9], numbersWhichAreSingleDigit)
);