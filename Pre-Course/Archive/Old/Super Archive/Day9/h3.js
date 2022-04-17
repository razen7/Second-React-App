function ordinal(n) {
    // Ref: https://leancrew.com/all-this/2020/06/ordinal-numerals-and-javascript/
    var s = ["th", "st", "nd", "rd"];
    var v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);

}

function century(num) {
    let century = 10;
    for (let i = 2100; i >= 1000; i -= 100) {
        if (num < i && num > i - 100) {
            century = i / 100;
            break;
        }

    }
    return ordinal(century) + ` century`
}
century(1756)// ➞ "18th century"

century(1555)// ➞ "16th century"

century(1000)// ➞ "10th century"

century(1001)// ➞ "11th century"

century(2005)// ➞ "21st century"
// Notes
// All years will be between 1000 and 2010.
// The 11th century is between 1001 and 1100.
// The 18th century is between 1701-1800.