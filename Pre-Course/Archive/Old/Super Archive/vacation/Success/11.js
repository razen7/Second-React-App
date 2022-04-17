// Create a left rotation and a right rotation function that returns all the left rotations and right rotations of a string.

function leftRotations(str) {
    let rollArr = [str]
    for (let idx = 1; idx < str.length; idx++) {
        str = str.substring(1) + str.substring(0, 1);
        rollArr.push(str)
    }
    return rollArr
}

function rightRotations(str) {
    let rollArr = [str]
    for (let idx = 1; idx < str.length; idx++) {
        str = str.substring(str.length - 1) + str.substring(0, str.length - 1);
        rollArr.push(str)
    }
    return rollArr
}

console.log(
    leftRotations("abc"),// ➞ ["abc", "bca", "cab"]

    rightRotations("abc"),// ➞ ["abc", "cab", "bca"]

    leftRotations("abcdef"),// ➞ ["abcdef", "bcdefa", "cdefab", "defabc", "efabcd", "fabcde"]

    rightRotations("abcdef"),// ➞ ["abcdef", "fabcde", "efabcd", "defabc", "cdefab", "bcdefa"]
)