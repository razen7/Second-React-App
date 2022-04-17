let tArr = [];
function permute(orgWord) {
    return permuteHelper(orgWord, orgWord.length)
}

function permuteHelper(word, orgLength, remaining) {
    /* ─╤╦︻3=(◣_◢)=Ƹ︻╦╤─ BASE OVERFLOW CASE ─╤╦︻3=(◣_◢)=Ƹ︻╦╤─ */
    if (remaining === '')
        return;

    /* (づ｡◕‿‿◕｡)づ (づ｡◕‿‿◕｡)づ BASE CASE (づ｡◕‿‿◕｡)づ (づ｡◕‿‿◕｡)づ */
    if (remaining.length === 1) {
        return remaining;
    } else if (remaining.length < orgLength) {
        return remaining.substring(1) + remaining[0];
    }

    // ƪ(˘⌣˘)┐ ƪ(˘⌣˘)ʃ ┌(˘⌣˘)ʃ RECURSIVE CASE ƪ(˘⌣˘)┐ ƪ(˘⌣˘)ʃ ┌(˘⌣˘)ʃ4
    tArr.push(word);
    for (let i = 0; i < orgLength; i++) {
        let rotated=permuteHelper()
    }


}
permute('AB') // AB BA
// permute('A') // A
// permute('ABC') // ABC ACB BAC BCA CBA CAB


