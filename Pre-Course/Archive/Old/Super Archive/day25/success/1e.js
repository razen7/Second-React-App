function decodeHelper(input, pointer = 0, count = 0) {
    // Base OverFlow
    if (pointer >= input.length) {
        return count;
    }
    console.log(input[pointer]);
    console.log(input[pointer] + input[pointer + 1]);
    // Base Case
    if (input[pointer] < 10 && input[pointer] > 0) {
        ++count;
    }
    if (input[pointer] + input[pointer + 1] > 9 && input[pointer] + input[pointer + 1] < 27) {
        ++count;
    }

    // Recursive Case
    return count + decodeHelper(input, pointer + 1);
}

let s = "112515"; // Output: 10 //  "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
console.log(decode(s));



function decode(input) {
    return decodeHelper(input);
}
