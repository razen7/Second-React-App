function permute(word) {
    return permuteHelper(word, word.length)
}

function permuteHelper(word, count, p = 0) {
    /* ─╤╦︻3=(◣_◢)=Ƹ︻╦╤─ BASE OVERFLOW CASE ─╤╦︻3=(◣_◢)=Ƹ︻╦╤─ */
    if (count <= 1) {
        console.log(word)
        return;
    }

    /* (づ｡◕‿‿◕｡)づ (づ｡◕‿‿◕｡)づ BASE CASE (づ｡◕‿‿◕｡)づ (づ｡◕‿‿◕｡)づ */


    // ƪ(˘⌣˘)┐ ƪ(˘⌣˘)ʃ ┌(˘⌣˘)ʃ RECURSIVE CASE ƪ(˘⌣˘)┐ ƪ(˘⌣˘)ʃ ┌(˘⌣˘)ʃ4
    for (let i = p; i < word.length; i++) {
        let tempArr = word.split('');
        [tempArr[i], tempArr[p]] = [tempArr[p], tempArr[i]];
        let newWord = tempArr.join('')
        permuteHelper(newWord, count - 1, p + 1)
    }

}
// permute('AB') // AB BA

// permute('A') // A
permute('ABC') // ABC ACB BAC BCA CBA CAB


