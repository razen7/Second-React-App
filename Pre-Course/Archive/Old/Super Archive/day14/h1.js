console.log(
    fibStr(3, ["j", "h"]),// ➞ "j, h, hj"

    fibStr(5, ["e", "a"]),// ➞ "e, a, ae, aea, aeaae"

    fibStr(6, ["n", "k"]),// ➞ "n, k, kn, knk, knkkn, knkknknk"
)

function fibStr(num, arr) {
    let fibArr = [...arr];
    do {
        let [prev1, prev2] = [fibArr[fibArr.length - 2], fibArr[fibArr.length - 1]]
        fibArr.push(prev2 + prev1)
    } while (--num - 2 > 0)
    return fibArr.join(', ');
}