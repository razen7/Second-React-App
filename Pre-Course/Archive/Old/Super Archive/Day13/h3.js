// Exercise 3
function countIdenticalArrays(arr, arr1, arr2, arr3) {
    let argsArr = [arr, arr1, arr2, arr3].map(v => JSON.stringify(v));
    let findIdentical = () => {
        for (let i = 0; i < 4; i++) {
            for (let j = 1; j < 4; j++) {
                if (argsArr[i] === argsArr[j] && !(i === j)) {
                    return [argsArr[i], i];
                }
            }
        }
        return [undefined, undefined]
    }
    let [identical, identicalIdx] = findIdentical();
    if (identical === undefined) return 0;

    let identicalCount = 1;
    for (let idx = identicalIdx + 1; idx < argsArr.length; idx++) {
        if (identical === argsArr[idx])
            ++identicalCount;
    }
    return identicalCount;

}

console.log(
    countIdenticalArrays([0, 0, 0], [0, 1, 2], [0, 0, 0], [2, 1, 0]),// ➞ 2

    countIdenticalArrays([0, 1, 0], [0, 1, 2], [0, 2, 0], [2, 1, 0]),// ➞ 0

    countIdenticalArrays([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0]),// ➞ 3
)