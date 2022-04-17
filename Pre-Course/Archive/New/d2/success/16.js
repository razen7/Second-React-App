let [firstNum, SecondNum] = numbers


function billboard(words, [row, col]) {
    return { width: row, height: col }
}

let {width} = billboard('hello', [2, 5]);
console.log(width);
