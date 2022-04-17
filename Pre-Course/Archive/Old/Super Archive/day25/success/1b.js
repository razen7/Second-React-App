let s = "226";

decode(s)

function decodeHelper(input, pointer = 0) {
    // let curInput = input.substring(pointer, pointer + 3);
    let partA=curInput.substring(0,1);
    let partA=curInput.substring(1,1);

    // base case
    if (curInput < 27) {
        return 2;
    } else
        return 1;
}

function decode(input) {
    // base case
    if (input.length === 0) {
        return 0;
    }

    // recursive case
    let pointer = 0;
    let answer = decodeHelper(input, pointer++)
    while (pointer < input.length - 2) {
        answer += decodeHelper(input, pointer++);
    }
    console.log(answer);
    // return answer;
}