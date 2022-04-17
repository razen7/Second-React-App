// Exercise 2
function changeEnough(change, amountDue) {
    let changeObj = {
        0: [25, change[0]],
        1: [10, change[1]],
        2: [5, change[2]],
        3: [1, change[3]],
    }
    amountDue *= 100; // converting to cents
    for (const order in changeObj) {
        let note = changeObj[order][0];
        let freq = changeObj[order][1];
        if (freq > 0) {
            // console.log('due' + amountDue)
            let changeAvail = note * freq;

            let changeNeeded = Math.floor(amountDue / note) * note;
            let changeAvailToReturn = changeAvail >= changeNeeded ? changeNeeded : changeAvail;
            amountDue -= changeAvailToReturn;
            // console.log(
            //     'Avail-' + changeAvail,
            //     'Needed-' + changeNeeded,
            //     'Return-' + changeAvailToReturn,
            //     'Note-' + note
            // );
            // return;
        }
    }
    return amountDue < 1;
}
console.log(
        changeEnough([2, 100, 0, 0], 14.11) // should return false
    ,
    changeEnough([0, 0, 20, 5], 0.75) // should return true
    ,
    changeEnough([30, 40, 20, 5], 12.55) // should return true
)
/* quarter: 25 cents / $0.25
dime: 10 cents / $0.10
nickel: 5 cents / $0.05
penny: 1 cent / $0.01
*/