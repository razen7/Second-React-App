function stockSpan(arr) {
    // write your code here
    let newArr = [];
    for (const [key, ele] of arr.entries()) {
        let count = 0;
        let idx = key;
        while (arr[idx - 1] <= ele && idx > -1) {
            --idx;
            ++count;
        }
        newArr.push(count);
    }
    return newArr;
}

let arr = [100, 80, 60, 70, 60, 75, 85]; // [0, 0, 0, 1, 0, 3, 5]
let arr2 = [100, 2] // [0, 0]
let arr3 = [2, 100, 100] // [0, 1, 2]

console.log(
    stockSpan(arr),
    stockSpan(arr2),
    stockSpan(arr3),
); 