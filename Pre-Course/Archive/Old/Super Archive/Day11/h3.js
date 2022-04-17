console.log(mapping(["p", "s"])// ➞ { "p": "P", "s": "S" }
    ,
    mapping(["a", "b", "c"])// ➞ { "a": "A", "b": "B", "c": "C" }
    ,
    mapping(["a", "v", "y", "z"])// ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }
)
// Exercise 3
function mapping(str) {
    return str.reduce((accu, curVal) => {
        accu[curVal] = curVal.toUpperCase();
        return accu;
    }, {})
}