function getDiff(n1, n2) {
    let diff = Math.max(n1, n2) - Math.min(n1, n2);
    return Math.abs(diff);
}

function isBetween(n1, n2, val) {
    return val >= n1 && val <= n2;
}