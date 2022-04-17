let flights = ['LAX-LGD', 'BOM-SYD', 'SYD-DPS', 'LHR-CDG', 'LAX-LHR'], bookings = [[0, 1, 10], [1, 2, 20], [1, 4, 25]]
// Output: [['LAX-LGD', 10], ['BOM-SYD', 55], ['SYD-DPS', 45], ['LHR-CDG', 25], ['LAX-LHR', 25]]
console.log(spy(flights, bookings));
function spy(flights, bookings) {
    let rObj = {};
    for (let [i, j, k] of bookings) {
        while (i <= j) {
            if (!rObj[i]) rObj[i] = 0;
            rObj[i] += k;
            ++i;
        }
    }

    let output = [];
    for (const [idx, v] of flights.entries()) {
        // console.log(v);
        let cur = [v];

        if (rObj[idx]) cur.push(rObj[idx])
        else cur.push(0)

        output.push(cur);
    }

    return output;
}