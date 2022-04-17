function integerBoolean(str) {
    if (str) {
        return str.split('').map(v => v == 1 ? true : false)
    }
    return [];
}
console.log(
integerBoolean("100101") //➞ [true, false, false, true, false, true]
)