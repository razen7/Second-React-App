function noOfways(num, count = 0) {
    if (num == 1) {
        return ++count;
    } else if (num == 2) {
        noOfways(1, count);
        return ++count;
    } else {
        count = noOfways(num - 1, count);
        count = noOfways(num - 2, count);
        return ++count;
    }
}

console.log(noOfways(4));