function pilishString(string) {
    let pi = '314159265358979';
    let pPointer = 0;
    let pilishString = '';
    for (let charIdx = 0; charIdx < string.length; charIdx++, pPointer++) {
        for (let pIdx = 0; pIdx < pi[pPointer] && charIdx < string.length; pIdx++) {
            const char = string[charIdx];
            pilishString += char;

            if (pIdx < pi[pPointer] - 1 && string[charIdx+1] != undefined)
                ++charIdx;
        }
        if (charIdx < string.length - 1)
            pilishString += ' ';
    }
    return pilishString;
}
console.log(
    pilishString("HOWINEEDADRINKALCOHOLICINNATUREAFTERTHEHEAVYLECTURESINVOLVINGQUANTUMMECHANICSANDALLTHESECRETSOFTHEUNIVERSE") 
);