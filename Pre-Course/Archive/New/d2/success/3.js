let farm = [['W', 'C', 'C'], ['C', 'C', 'C'], ['W', 'W', 'C'], ['C', 'C', 'W']]

// Part 1 - Write the function totalSpots below
function totalSpots(arr) {
    let r = arr.length;
    let c = arr[0].length;
    return r * c;
}


console.log(totalSpots(farm)); // should print 12

// Part 2 - Write printLayout function below
function printLayout(arr) {
    for (const r of arr) {
        console.log(r.join(' | '));
    }
}

printLayout(farm);
// should print 
// W | C | C
// C | C | C
// W | W | C
// C | C | W