function measureDepth(arr, count = 0) {
    if (arr[0] === undefined) return count;
    return measureDepth(arr[0], ++count);
}
console.log(
    measureDepth([[[[[[[[[[[]]]]]]]]]]]),
    measureDepth([[]]),
)