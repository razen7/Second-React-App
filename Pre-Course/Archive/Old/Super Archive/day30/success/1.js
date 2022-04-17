console.log(connellSequence(1, 3, 4)); // 2
// sequence = [1, 2, 4, 5, 7, 9]
// Number 4 is at index 2

console.log(connellSequence(2, 3, 4)); // 1
// sequence = [2, 4, 5, 7, 9]
// Number 4 is at index 1

console.log(connellSequence(4, 5, 22)); // "Not Found"
// sequence = [10, 12, 14, 16, 17, 19, 21, 23, 25]
// Number 22 is not in the sequence

function connellSequence(fromSeq, toSeq, target) {

    let arr = [];
    for (let i = fromSeq; i <= toSeq; i++) {
        let lastDigit = i * i;
        let tempArr = [lastDigit]
        while (tempArr.length != i) {
            tempArr.unshift(tempArr[0] - 2);
        }
        arr.push(...tempArr);
        tempArr = [];
    }

    return arr.includes(target) ? arr.indexOf(target) : "Not Found";
}