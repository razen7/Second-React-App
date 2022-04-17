let rooms = [[1], [2], [3], []]
// Output: true
let rooms2 = [[1, 3], [3, 0, 1], [2], [0]]
// Output: false
console.log(collectKeys(rooms));
console.log(collectKeys(rooms2));

function collectKeys(rooms) {
    let vObj = {
        0: true,
    }
    for (const [i, v] of rooms.entries()) {
        const v2 = v[0];
        if (!vObj[i]) vObj[i] = false;
        if (v2)
            if (!vObj[v2] && v2 != i) vObj[v2] = true;
    }
    return Object.values(vObj).every(v => v === true)
}
