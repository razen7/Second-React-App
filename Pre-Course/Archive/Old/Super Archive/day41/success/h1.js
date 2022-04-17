console.log(oneSec(".L.R...LR..L.."));
// Output: "LL.RR.LLRRLL.."

function oneSec(str) {
    let sArr = str.split('');
    let rArr = [];
    for (let i = 0; i < sArr.length; i++) {
        let [l, r] = [sArr[i - 1], sArr[i + 1]]
        if (['.', undefined].includes(r) && ['.', undefined].includes(l)) {
            rArr[i] = sArr[i] // do nothing
        } else if (['L', 'R'].includes(sArr[i])) {
            rArr[i] = sArr[i] // do nothing
        } else if (['.', undefined].includes(r) && ['R'].includes(l)) {
            rArr[i] = l;
        } else if (['.', undefined].includes(l) && ['L'].includes(r)) {
            rArr[i] = r;
        } else if (r != l) {
            rArr[i] = sArr[i] // do nothing
        } else if (r == l)
            rArr[i] = r;
    }
    return rArr.join('')
}

