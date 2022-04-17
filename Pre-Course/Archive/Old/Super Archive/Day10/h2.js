function group(arr, n) {
    let noOfRows = Math.ceil(arr.length / n);
    let newArr = [];
    for (let i = 0; i < noOfRows; i++) {
        newArr.push([])
        for (let j = i; j < arr.length; j += noOfRows) {
            if (arr[j])
                newArr[i].push(arr[j])
        }
    }
    return newArr;
}
console.log(
    group([1, 2, 3, 4], 2)
    // [[1, 3, 5], [2, 4, 6]]
    // // Divide array into groups of size 3.
    // ,
    // group([1, 2, 3, 4, 5, 6], 2)
    // [[1, 4], [2, 5], [3, 6]]
    // // Divide array into groups of size 2.
    // ,
    // group([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4)
    // [[1, 4, 7, 10], [2, 5, 8, 11], [3, 6, 9]]
    // // "Leftover" arrays are okay.
)