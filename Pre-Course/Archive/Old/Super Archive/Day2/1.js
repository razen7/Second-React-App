let farm = [['W', 'C', 'W'], ['C', 'W', 'C'], ['C', 'C', 'C'], ['C', 'C', 'W'], ['C', 'C', 'C']]
// has 4 water outlets
function waterOutlets(farm) {
    let count = 0;
    for (let i = 0; i < farm.length; i++) {
        for (let j = 0; j < farm[i].length; j++) {
            if (farm[i][j] === 'W') ++count; 
        }
    }
    return count;
}
console.log(waterOutlets(farm)); // should print 4