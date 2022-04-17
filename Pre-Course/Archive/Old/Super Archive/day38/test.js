let matrix = [
    ["p", "s", "u", "w", "h", "a", "t", "s"],
    ["l", "p", "a", "c", "k", "a", "g", "e"],
    ["n", "y", "o", "l", "r", "d", "v", "l"],
    ["f", "i", "n", "g", "e", "z", "b", "m"],
    ["i", "r", "e", "h", "q", "n", "j", "o"],
    ["a", "t", "b", "v", "g", "y", "e", "s"],
    ["j", "d", "u", "w", "u", "e", "s", "t"],
    ["p", "s", "t", "i", "c", "k", "e", "y"]
]
console.log(searchWord('tube', matrix, 7, 2));

function searchWord(word, matrix, r, c) {
    let p = 1;
    let tmp = word[0];

    //top
    while (p < word.length) {
        if (word[p] === matrix[r - p][c]) {
            tmp += matrix[r - p][c];
            ++p;
        } else break;
    }
    // console.log(word, tmp);
    if (tmp === word) return true;
    else {
        tmp = word[0];
        p = 1;
    }
}