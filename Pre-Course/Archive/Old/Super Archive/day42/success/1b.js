console.log(rotatorial(4)); // should return 7 because  4 * 3 / 2 + 1 = 7
console.log(rotatorial(10)); // should return 12 because 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1 = 12

function rotatorial(num) {
    return helper(num);
}

function helper(n, arr1 = [], o = 1, tmp=n) {
    // wrap
    if (n <= 1) {
        arr1.push(tmp)
        return arr1.reduce((p, v) => p + v);
    }

    // roll
    if (o % 4 == 1) {
        tmp *= n - 1;
    } else if (o % 4 == 2) {
        tmp /= n - 1;
        tmp = parseInt(tmp);
    } else if (o % 4 == 3) {
        tmp += n - 1;
        arr1.push(tmp);
        tmp = -(n - 2);
    }
    return helper(n - 1, arr1, o + 1, tmp)
}