let farm = [['W', 'C', 'W'], ['C', 'W', 'C'], ['C', 'C', 'C'], ['C', 'C', 'W'], ['C', 'C', 'C']]
// has 2 rows without any water outlet
function isHydrated(farm) {
    for (let i = 0; i < farm.length; i++) {
        if (!farm[i].includes('W'))
            return false;
    }
    return true;
}
console.log(isHydrated(farm)); // should print false

let farm2 = [['W', 'C'], ['C', 'W'], ['C', 'W'], ['W', 'W']]
console.log(isHydrated(farm2)); // should print true