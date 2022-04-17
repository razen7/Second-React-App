console.log(timeToEat("2:00 p.m.")); // ➞ [5, 0]
// 5 hours until the next meal, dinner

console.log(timeToEat("5:50 a.m.")); // ➞ [1, 10]
// 1 hour and 10 minutes until the next meal, breakfast

console.log(timeToEat("8:10 p.m.")); // ➞ [10, 50]
// 1 hour and 10 minutes until the next meal, breakfast

function timeToEat(str) {
    let tArr = [420, 720, 1140, 1860];

    let sArr = str.split(' ');

    let t = sArr[0].split(':').map(v => Number(v));
    let mins = t[0] * 60 + t[1];
    if (sArr[1].toLowerCase() === 'p.m.') {
        mins += 720;
    }

    let closeIdx;
    tArr.some((v, idx) => {
        if (v > mins) {
            closeIdx = idx;
            return true;
        }
    });

    let waitingT = tArr[closeIdx] - mins;
    let tStr = (waitingT / 60).toString().split('.');
    let output = [parseInt(tStr), 0]
    if (tStr[1]) {
        output[1] = Number('.' + tStr[1].substring(0, 2)) * 60;
        output[1] = Math.ceil(output[1]);
    }
    return output;
}