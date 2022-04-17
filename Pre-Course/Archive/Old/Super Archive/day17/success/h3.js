
//Exercise 3
function nearestGreaterFrequencies(arr) {
    let freqObj = arr.reduce((accu, cur) => {
        if (accu[cur]) {
            ++accu[cur];
        } else {
            accu[cur] = 1;
        }
        return accu;
    }, {})

    let highestArr = [arr[0]];
    let newArr = arr.reduce((accu, cur) => {
        highestArr.some((v, idx, arr) => {
            let freqList = freqObj[v];
            let curFreq = freqObj[cur];
            // console.log(freqList,highestArr)
            if (freqList > curFreq) {
                accu.push(v)
                return true;
            } else if (idx == arr.length - 1){
                accu.push(-1)
            }
        });
        highestArr.unshift(cur)
        return accu;
    }, [])
    return newArr;
}
// console.log(newArr)

nearestGreaterFrequencies([8, 1, 1, 2, 2, 9, 1])
// Output: [-1, -1, -1, 1, 1, 2, -1]


// Input: [5, 3, 3, 9, 8, 1, 1, 2]
// Output: [-1, -1, -1, 3, 3, -1, -1, 1]