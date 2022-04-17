function permuteHelper(word, wordsArr = [], pointer = 0, string = '') {
    // Base Case
    if (pointer >= word.length) {

    }

    // Gather All Choice

}

function permute(word) {
    // write your code here
    permuteHelper(word);

    for (let charIdx = pointer; charIdx < word.length; charIdx++) {
        // Pick a Choice
        pickedChar = word[charIdx];



        // wordsArr.push()

        // Explore Options
        permuteHelper(word, pointer + 1,)

    }
}

permute('ABC') // ABC ACB BAC BCA CBA CAB