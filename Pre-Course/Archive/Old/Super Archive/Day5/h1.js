// Exercise 4
// Write a function that takes a string as an argument and returns the left most digit in the string.
function leftDigit(str) {
    let digit=str.match(/[0-9]/g)[0];
    return Number(digit);
}
leftDigit("TrAdE2W1n95!")// ➞ 2

leftDigit("V3r1ta$")// ➞ 3

leftDigit("U//DertHe1nflu3nC3")// ➞ 1

leftDigit("J@v@5cR1PT")// ➞ 5