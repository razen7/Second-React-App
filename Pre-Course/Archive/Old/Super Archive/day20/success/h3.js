function pluralize(arr) {
    let countObj = {}, newArr = [];
    let pointer = 0;
    for (const word of arr) {
        if (countObj[word]) {
            ++countObj[word][0];
            let idx = countObj[word][1];
            if (countObj[word][2]) {
                newArr[idx] = newArr[idx] + 's';
                countObj[word][2] = false;
            }
        } else {
            countObj[word] = [freq = 1, pointer, singular = true];
            newArr.push(word);
            ++pointer;
        }
    }
    return newArr;
}
console.log(
    pluralize(["cow", "pig", "cow", "cow"]), //  ➞ ["cows", "pig"]

    pluralize(["table", "table", "table"]), //  ➞ ["tables"]

    pluralize(["chair", "pencil", "arm"]), //  ➞ ["chair", "pencil", "arm"]
)