k = 3
n = 5
// Output: 123, 124, 125, 134, 135, 145, 234, 235, 245, 345
sequences(k, n);

function sequences(k, n) {
    let nArr = new Array(n).fill().map((v, idx) => ++idx);
    sequencesHelper(nArr.join(''), k - 2, k - 1)
}

function sequencesHelper(nStr, p1, p2) {
    /* ─╤╦︻3=(◣_◢)=Ƹ︻╦╤─ BASE OVERFLOW CASE ─╤╦︻3=(◣_◢)=Ƹ︻╦╤─ */
    if (p2 === nStr.length - 1 && p1 === p2) {
        return;
    }

    // ƪ(˘⌣˘)┐ ƪ(˘⌣˘)ʃ ┌(˘⌣˘)ʃ RECURSIVE CASE ƪ(˘⌣˘)┐ ƪ(˘⌣˘)ʃ ┌(˘⌣˘)ʃ
    let digit = nStr.substring(0, p1) + nStr.substring(p1, p1 + 1) + nStr.substring(p2, p2 + 1);
    if (p1 !== p2)
        console.log(digit, nStr.substring(0, p1));

    if (p1 === nStr.length - 1) {
        p1 = 1;
        ++p2;
    } else ++p1;
    sequencesHelper(nStr, p1, p2);
}