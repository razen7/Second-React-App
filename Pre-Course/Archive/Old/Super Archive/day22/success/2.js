
function sumHelper(arr, index) {
    if (index >= arr.length) {
        return 0;
    } else {
        return arr[index] + sumHelper(arr, index + 1);
    }
}
console.log(sumHelper([1, 10, 2, 4, 5],0));