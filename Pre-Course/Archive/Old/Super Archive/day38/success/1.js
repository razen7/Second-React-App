letters = "PSUWHATSLPACKAGENYOLRDVLFINGEZBMIREHQNJOATBVGYESJDUWUESTPSTICKEY"
words = ["stick", "most", "key", "vein", "yes", "package", "tube", "target", "elm", "spy"]
containAllWords(letters, words);

function containAllWords(letters, words) {
    let matrix = new Array(8).fill(null).map(r => new Array(8));
    let p = 0;
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            matrix[r][c] = letters[p++].toLowerCase();
        }
    }
    containAllWordsHelper(matrix, words)
}
function containAllWordsHelper(matrix, wordsArr) {
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const char = matrix[r][c];
            let stack = wordsArr.filter(w => w.startsWith(char));
            while (stack.length > 0) {
                let word = stack.pop();
                let search = searchWord(word, matrix, r, c)
            }
        }
    }
}

function searchWord(word, matrix, r, c) {
    pR = [-1, -1, 0, 1, 1, 1, 0, -1]
    pC = [0, 1, 1, 1, 0, -1, -1, -1]
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