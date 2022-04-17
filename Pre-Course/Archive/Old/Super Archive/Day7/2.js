/*
Write numbersAbove80 function which takes in a list of numbers and return all the numbers above 80 present in the list. You should call `isAbove80` function inside numbersAbove80 function.
*/

function isAbove80(number) {
    return number > 80;
}

function numbersAbove80(numbers,func) {
    // write your code here.
    let filterFunc = func;
    let filteredList = []                                                 
    for (const v of numbers) {
        if (filterFunc(v)) filteredList.push(v)
    }
    return filteredList
}
console.log(
    numbersAbove80([22, 99, 35, 87, 45, 86],isAbove80)
)