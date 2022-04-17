// https://www.youtube.com/watch?v=5e3plF76dpo

function permute(word) {
    return permuteHelper(word)
}

function permuteHelper(word, result='') {
    /* (づ｡◕‿‿◕｡)づ (づ｡◕‿‿◕｡)づ BASE CASE (づ｡◕‿‿◕｡)づ (づ｡◕‿‿◕｡)づ */
    if (word.length === 0) {
        console.log(result);
    }

    // ƪ(˘⌣˘)┐ ƪ(˘⌣˘)ʃ ┌(˘⌣˘)ʃ RECURSIVE CASE ƪ(˘⌣˘)┐ ƪ(˘⌣˘)ʃ ┌(˘⌣˘)ʃ4
    for (let i = 0; i < word.length; i++) {
        let rest = word.substring(0, i) + word.substring(i + 1);
        permuteHelper(rest, result + word[i]);
    }
}
// permute('AB') // AB BA
// permute('A') // A
// permute('ABC') // ABC ACB BAC BCA CBA CAB


