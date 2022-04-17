// Write 3 different functions to get minimum, maximum and sum of all the elements from a given array.

function getMin(minSoFar, currElement) {
    return currElement < minSoFar ? currElement : minSoFar;
}

function getMax(maxSoFar, currElement) {
    return currElement > maxSoFar ? currElement : maxSoFar;
}

function getSquare(accumulator, currElement) {
    return accumulator + Math.pow(currElement,2);
}
// Re-write a new function called reduce which takes an array and a callback function. Callback function takes two numbers as a parameter and returns a new number. Here are 3 such callback functions given to you.

let arr = [1,2,3];


// console.log(arr.reduce(getMin));
// console.log(arr.reduce(getMax));
console.log(arr.reduce(getSquare,0));