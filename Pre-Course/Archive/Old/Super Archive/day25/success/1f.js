function decodeHelper(input, pointer = 0, count = 0) {
    // Base case
    if (pointer >= input.length - 1) {
        return 0;
    }

    // Recursive Case
    let isValidSingleDigits =
        ((input[pointer] > 0) && (input[pointer] < 10))
            &&
            ((input[pointer + 1] > 0 && input[pointer + 1] < 10))
            ? 1 : 0;
    let isValidTwoDigit = (input[pointer] !== 0) && (input[pointer] + input[pointer + 1] < 27) ? 1 : 0;

    // console.log(pointer, isValidSingleDigits);
    return isValidTwoDigit + isValidSingleDigits + decodeHelper(input, pointer + 1);
}

// let s3 = "112515"; // Output: 10 
// decode(s3)

let s = "226"; // Output: 3
decode(s)

// let s2 = "12"; // Output: 2
// decode(s2)

function decode(input) {
    console.log(
        decodeHelper(input)
    );
}

function decode(input) {
    console.log(
        decodeHelper(input)
    );
}
