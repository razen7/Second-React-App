console.log(
isModest(2036) //➞ true
)

function isModest(num) {
    let numStr = num.toString();
    let startIdx = 1;
    while ((numStr.length - startIdx) > 0) {
        let left = Number(numStr.substring(0, startIdx))
        let right = Number(numStr.substring(startIdx))
        startIdx++
        let modeCalc = num % right;
        if (modeCalc === left) return true;
    }
    return false;
}


// Number (2036) % Right (36) = 20 != Left (2)
// Combination 2:
// Left = 20 | Right = 36
// Number (2036) % Right (36) = 20 = Left (20)
// At least a combination satisfies the condition
// It's a Modest number