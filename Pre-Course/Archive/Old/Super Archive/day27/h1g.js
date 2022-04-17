function permute(word) {
    return permuteHelper(word)
}

function permuteHelper(word, p = 0) {
    /* ─╤╦︻3=(◣_◢)=Ƹ︻╦╤─ BASE OVERFLOW CASE ─╤╦︻3=(◣_◢)=Ƹ︻╦╤─ */
    if (p >= word.length-1) {
        console.log(word)
        return;
    }

    // ƪ(˘⌣˘)┐ ƪ(˘⌣˘)ʃ ┌(˘⌣˘)ʃ RECURSIVE CASE ƪ(˘⌣˘)┐ ƪ(˘⌣˘)ʃ ┌(˘⌣˘)ʃ4
    for (let i = p; i < word.length; i++) {
        let tempArr = word.split('');
        [tempArr[i], tempArr[p]] = [tempArr[p], tempArr[i]];
        let newWord = tempArr.join('')
        permuteHelper(newWord, p + 1)
    }

}
// permute('A') // A
// permute('AB') // AB BA

permute('ABC') // ABC ACB BAC BCA CBA CAB


