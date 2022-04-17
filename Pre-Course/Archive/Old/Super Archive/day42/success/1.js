console.log(rotatorial(4)); // should return 7 because  4 * 3 / 2 + 1 = 7
console.log(rotatorial(10)); // should return 12 because 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1 = 12

function rotatorial(num) {
    let tmp = num, arr1 = [], o = 1;
    while (num > 1) {
        if (o % 4 == 1) {
            tmp *= num - 1;
        } else if (o % 4 == 2) {
            tmp /= num - 1;
            tmp = parseInt(tmp);
        } else if (o % 4 == 3) {
            tmp += num - 1;
            arr1.push(tmp);
            tmp = -(num - 2);
        }
        ++o;
        --num;
    }
    arr1.push(tmp);
    let sum = arr1.reduce((p, v) => p + v);
    return sum;
}