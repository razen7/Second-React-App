console.log(arrayOperation(1, 10, 3)); // should return [3, 6, 9]

arrayOperation(7, 9, 2); // should return [8]

arrayOperation(15, 20, 7); // should return []

function arrayOperation(start, end, n) {
    let result = [];
    for (let i = start; i <= end; i++) {
        if (i % n === 0) {
            result.push(i);
        }
    }
    return result
}