console.log(findAllDigits([5175, 4538, 2926, 5057, 6401, 4376, 2280, 6137, 8798, 9083]));
// ➞ 5057

console.log(findAllDigits([5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381]));
// ➞ 3370

console.log(findAllDigits([4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868]));
// ➞ "Missing digits!"

function findAllDigits(arr) {
    let digitsArr = new Array(10).fill(0).map((v, i) => i)
    // console.log(digitsArr)
    for (const ele of arr) {
        let strArr = ele.toString().split('').map(c => Number(c));
        for (const digit of strArr) {
            let pos = digitsArr.indexOf(digit);
            if (pos !== -1)
                digitsArr.splice(pos, 1);
            if (digitsArr.length === 0) return ele;
        }
    }
    return "Missing digits!"
}