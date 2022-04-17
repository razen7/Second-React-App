function decodeHelper(input, pointer = 0, count = 0) {
    // Base OverFlow
    if (pointer === input.length) {
        return count;
    } else if (pointer > input.length) {
        return ++count;
    }
    let a = input.substring(pointer, pointer + 1);
    let b = input.substring(pointer + 1, pointer + 2);
    let c = input.substring(pointer + 2, pointer + 3);
    

    // Base Case
    if (a < 10 && b < 10 && c < 10 && a > 0 && b > 0 && c > 0) { 
        ++count;
    }
    if (a + b < 27 && c < 10 && c > 0) {
        ++count;
    }
    if (a < 10 && a > 0 && b + c < 27) {
        ++count;
    }

    // Recursive Case
    return decodeHelper(input, pointer + 3, count);
}

let s = "226"; // Output: 3

let s2 = "12"; // Output: 2
// decode(s)
decode(s2)

function decode(input) {
    console.log(
        decodeHelper(input)
    );
}
