function permute(word) {
    for (let charIdx = 0; charIdx < word.length; charIdx++) {
        char = word[charIdx];
        let remaining = word.substring(charIdx + 1);
        permute(remaining)
    }
}

permute('ABC') // ABC ACB BAC BCA CBA CAB