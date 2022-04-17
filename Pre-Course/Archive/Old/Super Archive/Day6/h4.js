// Exercise 4
// Create a function that takes a number as an argument and returns the highest digit in that number. 377401
function highestDigit(num) {
    let highIdx = 0;
    let str = num.toString();
    for (let i = 1; i < str.length; i++) {
        const char = str[i];
        if (char > str[highIdx]) highIdx = i;
    }
    return Number(str[highIdx])
}
console.log(
// highestDigit(379)// should return 9
// ,
// highestDigit(2)// should return 2
// ,
highestDigit(377401)// should return 7
)