function clone(arr) {
    arr.push([...arr]);
    return arr
}

console.log(
    clone([1, 1]) //➞ [1, 1, [1, 1]]

)