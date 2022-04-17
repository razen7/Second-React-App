// Exercise 3
// Write a function that returns true if the binary string can be rearranged to form a string of alternating 0s and 1s.

function canAlternate(str) {
    const one = str.match(/[1]/g);
    const oneCount = one ? str.match(/[1]/g).length : 0;
    const zero = str.match(/[0]/g);
    const zeroCount = zero ? str.match(/[0]/g).length : 0;
    const diff = oneCount > zeroCount ? oneCount - zeroCount : zeroCount - oneCount;
    const result = oneCount === zeroCount || diff === 1;
    return result;
}
// //     Examples
canAlternate("0001111")// ➞ true
// Can make: "1010101"

canAlternate("01001")// ➞ true
// Can make: "01010"

canAlternate("010001")// ➞ false

canAlternate("1111")// ➞ false