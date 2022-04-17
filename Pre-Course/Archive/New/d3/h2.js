console.log(changeEnough([2, 100, 0, 0], 14.11)); // should return false

console.log(changeEnough([0, 0, 20, 5], 0.75)); // should return true

console.log(changeEnough([30, 40, 20, 5], 12.55)); // should return true

function changeEnough(change, amountDue) {
    amountDue = amountDue * 100; // to cents

    for (const [key, unit] of [25, 10, 5, 1].entries()) {
        let avail = unit * change[key];
        if (avail <= amountDue) {
            amountDue -= avail
        } else {
            amountDue -= Math.floor(amountDue / unit) *unit
        }
        // console.log(amt);
    }
    return amountDue === 0;
}