// Given a list of numbers, sort it such that odd numbers are before even numbers and these numbers are sorted among them. e.g. for input [1, 44, 5, 6, 12, 91, 7, 24], your function should return [1, 5, 7, 91, 6, 12, 24, 44]

let input = [1, 44, 5, 6, 12, 91, 7, 24];

function compare(n1, n2) {
    let isEven = (num) => num % 2 === 0;
    let isOdd = (num) => !isEven(num);

    // 1	sort b before a
    if (isEven(n1) && isOdd(n2))
        return 1;
    // if (n1 < n2) 
    //     return -1;

    // -1	sort a before b
    if (isOdd(n1) && isEven(n2))
        return -1;
    // if (n1 > n2) 
    //     return 1;

    // === 0	keep original order of a and b
    return 0

}

console.log(
    input.sort(compare)
)