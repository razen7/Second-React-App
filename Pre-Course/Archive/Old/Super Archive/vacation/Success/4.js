function flatten(arr) {
    return arr.reduce((accArr, curArr) => {
        return accArr.concat(curArr)
    }, [])
}

var arr = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arr)); // ["1", "2", "3", true, 4, 5, 6];