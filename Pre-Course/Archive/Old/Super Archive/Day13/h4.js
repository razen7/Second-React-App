// Exercise 4
function redundant(str) {
    let func2 = () => str;
    return func2;
}
const f1 = redundant("apple")
//f1() ➞ "apple"

const f2 = redundant("pear")
//f2() ➞ "pear"

const f3 = redundant("")
//f3() ➞ ""

console.log(f1)
