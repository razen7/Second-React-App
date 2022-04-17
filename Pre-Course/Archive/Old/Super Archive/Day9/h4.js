function peelLayerOff(arr) {
    if (!arr) return arr;
    arr.pop();
    arr.shift();
    for (const row of arr) {
        row.pop();
        row.shift();
    }
    return arr;
}
console.log(
    peelLayerOff([
        ["a", "b", "c", "d"],
        ["e", "f", "g", "h"],
        ["i", "j", "k", "l"],
        ["m", "n", "o", "p"]
    ])
    /*➞[
    ["f", "g"],
        ["j", "k"]
    ] */
)