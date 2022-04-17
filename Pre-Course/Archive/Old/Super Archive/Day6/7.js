// Given a list of functions (isAbove80, isEven, isSingleDigit) call each function in functionArr passing 5 and count number of times true is returned.

function isAbove80(number) {
    return number > 80;
}

function isEvenNumber(number) {
    return number % 2 === 0;
}

function isSingleDigit(number) {
    return number >= 0 && number < 10;
}

let functionArr = [isAbove80, isEvenNumber, isSingleDigit];

let count = 0;
for (const v of functionArr) {
    if (v(5)) ++count;
}
console.log(count);