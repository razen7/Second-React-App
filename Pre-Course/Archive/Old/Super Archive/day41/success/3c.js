// console.log(processIt(8)); //3
console.log(processIt(7)); //4
// console.log(processIt(1234)); //14
// console.log(processIt(31)); //6

function processIt(n) {
    // console.log(n);
    if (n === 1) {
        return 0;
    }

    if (n % 2 !== 0) {
        let case1 = 1 + processIt((n + 1) / 2);
        let case2 = 1 + processIt((n - 1) / 2);
        console.log(case1,case2);
        if (case1 < case2) {
            return case1;
        } else
            return case2;
    }
    return 1 + processIt(n / 2);
}