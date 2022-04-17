console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])); // should return 3

console.log(sockMerchant([50, 20, 30, 90, 30, 20, 50, 20, 90])); // should return 4

console.log(sockMerchant([])); // should return 0

function sockMerchant(sockNumbers) {
    let pairObj = {};
    for (const ele of sockNumbers) {
        if (pairObj.hasOwnProperty(ele)) {
            pairObj[ele]++;
        } else
            pairObj[ele] = 1;
    }

    let count = 0;
    for (let [ele, freq] of Object.entries(pairObj)) {
        if (freq > 1) {
            if (freq % 2 === 1) {
                freq--;
            }
            count += freq / 2;
        }
    }
    return count;
}