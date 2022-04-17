// Exercise 4
function charAtPos(val, flag) {
    let newArr = [];

    let i = flag === "even" ? 1 : 0;
    for (i; i < val.length; i += 2) {
        const cur = val[i];
        newArr.push(cur)
    }
    return Array.isArray(val) ? newArr : newArr.join('');
}

console.log(
    charAtPos([2, 4, 6, 8, 10], "even"), // ➞ [4, 8]
    // 4 & 8 occupy the 2nd & 4th positions

    charAtPos("EDABIT", "odd"), // ➞ "EAI"
    // // "E", "A" and "I" occupy the 1st, 3rd and 5th positions

    charAtPos(["A", "R", "B", "I", "T", "R", "A", "R", "I", "L", "Y"], "odd"), // ➞ ["A", "B", "T", "A", "I", "Y"]
)