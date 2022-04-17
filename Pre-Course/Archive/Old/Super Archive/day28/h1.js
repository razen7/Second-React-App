function meeting(x, need) {
    if (need === 0)
        return "Game On";
    let myArr = [];
    let pointer = 0;
    while (need > 0 && pointer < x.length) {
        let occupied = x[pointer][0].length;
        let totalSeats = x[pointer][1]
        if (occupied < totalSeats) {
            let avail = totalSeats - occupied;
            myArr.push(avail);
            need -= avail;
        } else {
            myArr.push(0)
        }
        ++pointer;
    }

    if (need > 0)
        return "Not enough!"
    else
        return myArr
}
console.log(
    meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 2]], need = 4)
);