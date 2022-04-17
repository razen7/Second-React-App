// Exercise 2
function deleteOccurrences(arr, freq) {
    let countObj = {};
    return arr.reduce((newArr, cur) => {
        if (countObj[cur]) {
            ++countObj[cur];
        } else {
            countObj[cur] = 1;
        }
        if (countObj[cur] <= freq) newArr.push(cur);
        return newArr;
    }, [])

}
console.log(
    deleteOccurrences([1, 1, 1, 1], 2),//  ➞ [1, 1]

    deleteOccurrences([13, true, 13, null], 1),//  ➞ [13, true, null]

    deleteOccurrences([true, true, true], 3),//  ➞ [true, true, true]
)