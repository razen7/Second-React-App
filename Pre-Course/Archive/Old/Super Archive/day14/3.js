//  O(Nlog(N)) time complexity.

function updateArr(arr) {
    if (arr[0] % 2 === 1) {
        arr[0] = 0;
        return arr;
    } else {
        return arr.sort((a, b) => a - b)
    }
}