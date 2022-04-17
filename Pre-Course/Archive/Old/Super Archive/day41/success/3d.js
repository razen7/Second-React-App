console.log(processIt(8)); //3
console.log(processIt(7)); //4
console.log(processIt(1234)); //14
console.log(processIt(31)); //6

function processIt(n) {
    if (n === 1) {
        return 0;
    }

    if (n % 2 !== 0) {
        return 1 + Math.min(processIt(n + 1), processIt(n - 1));
    }
    
    return 1 + processIt(n / 2);
}