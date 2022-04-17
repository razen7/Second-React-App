console.log(findMinNum(10));// 48  
//divisors are: 1, 2, 3, 4, 6, 8, 12, 16, 24 and  48

console.log(findMinNum(12));// 60

function findMinNum(num) {

    let p = 1;
    let start = num + p;
    let count = 0;

    while (count < num) {
        count = 0;
        for (let f = 1; f <= start; f++) {
            if (start % f === 0)
                ++count;
        }

        if (count === num) return start;

        start = num + (++p);
    }
}