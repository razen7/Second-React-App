// Exercise 2 - Something in the Box?
// Create a function that returns true if an asterisk * is inside a box.

// Challenge 2
function inBox(box) {
    for (const v of box) {
        if (v.includes('*')) {
            const mainIdx = v.indexOf('*');
            const firstHash = v.indexOf('#');
            const lastHash = v.lastIndexOf('#');
            if (firstHash !== -1 && firstHash < mainIdx && lastHash !== -1 && lastHash > mainIdx) return true
        }
    }
    return false;
}
console.log(
    inBox([
        "###",
        "#*#",
        "###"
    ])// should return true
    ,
    inBox([
        "####",
        "#* #",
        "#  #",
        "####"
    ])// should return true
    ,
    inBox([
        "*####",
        "#  #",
        "#  #*",
        "####"
    ])// should return false
    ,
    inBox([
        "#####",
        "#   #",
        "#   #",
        "#   #",
        "#####"
    ])// should return false
)


// Write a function that adds from two function calls.

let add = (num) => {
    let returnFun = (num2) => {
        return num + num2;
    }
    return returnFun;
}

let a = add(3);
let b = a(4);
console.log(b)
// console.log(
//     add(3)(4)  // 7
//     ,
//     add(12)(20) // 32
// )