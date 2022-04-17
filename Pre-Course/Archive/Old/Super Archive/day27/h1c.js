function permute(word) {
    return permuteHelper(word, word.length)
}

function permuteHelper(word, length, pointerA = 0, pointerB = 0, wordSwap = word) {
    /* ─╤╦︻3=(◣_◢)=Ƹ︻╦╤─ BASE OVERFLOW CASE ─╤╦︻3=(◣_◢)=Ƹ︻╦╤─ */
    if (pointerA > length) {
        return;
    }
    /* (づ｡◕‿‿◕｡)づ (づ｡◕‿‿◕｡)づ BASE CASE (づ｡◕‿‿◕｡)づ (づ｡◕‿‿◕｡)づ */
    if (length === pointerB) {
        // console.log(word)
        return;
    }

    // ƪ(˘⌣˘)┐ ƪ(˘⌣˘)ʃ ┌(˘⌣˘)ʃ RECURSIVE CASE ƪ(˘⌣˘)┐ ƪ(˘⌣˘)ʃ ┌(˘⌣˘)ʃ4
    // Pick
    let find = word[pointerA];
    let replace = word[pointerB];
    if (pointerA === pointerB)
        wordSwap = word;
    else
        wordSwap = word.substring(0, pointerA) + replace + word.substring(pointerA + 1, pointerB) + find + word.substring(pointerB + 1)

    console.log(wordSwap, pointerA, pointerB);

    // Explore
    let explore = permuteHelper(word, length, pointerA, pointerB + 1, wordSwap);

    // Unpick
    ++pointerA;
    wordSwap = word;
    pointerB = 0;
    permuteHelper(word, length, pointerA, pointerB, wordSwap)
}
// permute('AB') // AB BA
// permute('A') // A
permute('ABC') // ABC ACB BAC BCA CBA CAB


