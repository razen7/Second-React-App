function willFit(holds, cargo) {
    let holdsObj = {
        "S": 50,
        "M": 100,
        "L": 200,
    }
    let holdsSum = holds.reduce((accu, cur) => {
        return accu + holdsObj[cur];
    }, 0);
    let totalCargo = cargo.reduce((accu, cur) => accu + cur);
    return totalCargo <= holdsSum;
}

console.log(
    willFit(["M", "L", "L", "M"], [56, 62, 84, 90]), // ➞ true

    willFit(["S", "S", "S", "S", "L"], [40, 50, 60, 70, 80, 90, 200]), // ➞ false

    willFit(["L", "L", "M"], [56, 62, 84, 90]), // ➞ true
);