let s = "12";

decode(s)

function decodeHelper(input, pointer = 0, count = 0) {
    // let inputLength = input.length;
    let curInput = input.substring(pointer, pointer + 2);

    // base case
    if (curInput < 10) {
        return ++count;
    } else if (curInput < 27) {
        return ++count;
    } else if (pointer < input.length - 1) { // recursive case
        return decodeHelper(input, ++pointer, count);
    }

}

function decode(input) {
    // base case
    if (input.length === 0) {
        return 0;
    }

    // recursive case
    return decodeHelper(input);

}