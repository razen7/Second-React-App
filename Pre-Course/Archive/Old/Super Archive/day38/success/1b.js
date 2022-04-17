letters = "PSUWHATSLPACKAGENYOLRDVLFINGEZBMIREHQNJOATBVGYESJDUWUESTPSTICKEY"
words = ["stick", "most", "key", "vein", "yes", "package", "tube", "target", "elm", "spy"]
console.log(containAllWords(letters, words));;

function containAllWords(letters, words) {
    let matrix = new Array(8).fill(null).map(r => new Array(8));
    let p = 0;
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            matrix[r][c] = letters[p++].toLowerCase();
        }
    }
    return containAllWordsHelper(matrix, words)
}
function containAllWordsHelper(matrix, wordsArr) {
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const char = matrix[r][c];
            let stack = wordsArr.filter(w => w.startsWith(char));
            while (stack.length > 0) {
                let word = stack.pop();
                let search = searchWord(word, matrix, r, c);
                if (search) {
                    let idx = wordsArr.indexOf(word);
                    wordsArr.splice(idx, 1);
                }
            }
        }
    }
    if (wordsArr.length > 0) return false;
    else return true;
}

function searchWord(word, matrix, r, c) {
    pR = [-1, -1, 0, 1, 1, 1, 0, -1]
    pC = [0, 1, 1, 1, 0, -1, -1, -1]
    for (let i = 0; i < pR.length; i++) {
        const x = pR[i];
        const y = pC[i];
        let p = 1;
        let tmp = word[0];
        let [row, col] = [r, c]
        while (p < word.length) {
            row += x;
            col += y;
            if (matrix[row] && matrix[row][col] && word[p] === matrix[row][col]) {
                tmp += matrix[row][col];
                ++p;
            } else break;
        }
        if (tmp === word) return true;
    }
    return false;
}