let count = 0;
function noOfways(num) {
    if (num === 0) return 0;

    if (num == 1) {
        count++;
        return;
    } else if (num == 2) {
        noOfways(1);
        count++;
    } else {
        noOfways(num - 1);
        noOfways(num - 2);
    }
    return count;
}

console.log(noOfways(4));