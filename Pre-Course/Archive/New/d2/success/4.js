let farm = [
    ['W', 'C', 'W'], ['C', 'W', 'C'], ['C', 'C', 'C'], ['C', 'C', 'W'], ['C', 'C', 'C']
]
// Write function waterOutlets for Task 3 below:
function waterOutlets(farm) {
    let count = 0;
    for (const r of farm) {
        for (const c of r) {
            if (c === 'W') {
                count++;
            }
        }
    }
    return count
}

// has 4 water outlets
// console.log(waterOutlets(farm)); // should print 4


// Write function isHydrated for Task 4 below:
function isHydrated(farm=[]) {
    for (const r of farm) {
        if (r.includes('W') === false) return false;
    }
    return true;
}


console.log(isHydrated(farm)); // should print false because 'farm' has 2 rows without any water outlet
let farm2 = [['W', 'C'], ['C', 'W'], ['C', 'W'], ['W', 'W']]
console.log(isHydrated(farm2)); // should print true