function isAbove80(number) {
    return number > 80;
}

function isEvenNumber(number) {
    return number % 2 === 0;
}

function isSingleDigit(number) {
    return number>=0 && number < 10;
}

let functionArr = [isAbove80, isEvenNumber, isSingleDigit];

let count=0;
for (const func of functionArr) {
    if (func(5)) {
        count++;
    }
}
console.log(count);